import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, CustomButton, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', errorMessage: '', error: false, loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: false, errorMessage: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.logInSuccess.bind(this))
    .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.logInSuccess.bind(this))
          .catch(this.logInFailure.bind(this));
      });
  }

  logInSuccess() {
    this.setState({ errorMessage: '', loading: false, email: '', password: '' });
  }

  logInFailure() {
    this.setState({ error: true, errorMessage: 'Authentication Failed.', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner size='small' />
      );
    }

      return (
        <CustomButton buttonText={'Log in'} whenPressed={this.onButtonPress.bind(this)} />
      );
  }

  renderText() {
    if (this.state.error) {
      return (
        <Text style={styles.errorMessageStyle}>
          {this.state.errorMessage}
        </Text>
      );
    }
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            placeholder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          </CardSection>

          {this.renderText()}

        <CardSection>
            {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorMessageStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'red'
  }
};

export default LoginForm;
