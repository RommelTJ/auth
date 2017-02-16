import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		// Initialize Firebase
		firebase.initializeApp({
			apiKey: "AIzaSyAaQsSVeJgU88vyoVBLgpQoQ2a5DWemyPc",
		    authDomain: "auth-12368.firebaseapp.com",
		    databaseURL: "https://auth-12368.firebaseio.com",
		    storageBucket: "auth-12368.appspot.com",
		    messagingSenderId: "394815104638"
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()} >
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<CardSection>
						<Spinner size='large' />
					</CardSection>
				);
		}
	}

	render() {
		return (
			<View>
			    <Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
