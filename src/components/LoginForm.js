import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '' };

	render() {
		return ( 
			<Card>
				<CardSection>
					<Input 
						label = "Email"
						value = {this.state.email}
						onChangeText = {email => this.setState({ email })}
						placeholder = "me@rommelrico.com"
					/>
				</CardSection>

				<CardSection />

				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
