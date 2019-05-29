import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, CustomButton, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorMessageStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {    
    if (this.props.loading) {
      return (
        <Spinner size='small' />
      );
    }

      return (
        <CustomButton buttonText={'Log in'} whenPressed={this.onButtonPress.bind(this)} />
      );
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          placeholder='user@gmail.com'
          label='Email'
          value={this.props.email}
          onChangeText={this.onEmailChanged.bind(this)}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder='password'
          label='Password'
          value={this.props.password}
          onChangeText={this.onPasswordChanged.bind(this)}
        />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToprops = state => {
  const { email, password, error, loading } = state.Auth;

  return { email, password, error, loading };
};

const styles = {
  errorMessageStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'red'
  }
};

export default connect(mapStateToprops, { emailChanged, passwordChanged, loginUser })(LoginForm);
