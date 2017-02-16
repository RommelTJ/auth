import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		firebase.initializeApp({
			apiKey: "AIzaSyAaQsSVeJgU88vyoVBLgpQoQ2a5DWemyPc",
		    authDomain: "auth-12368.firebaseapp.com",
		    databaseURL: "https://auth-12368.firebaseio.com",
		    storageBucket: "auth-12368.appspot.com",
		    messagingSenderId: "394815104638"
		});
	}

	render() {
		return (
			<View>
			    <Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
