import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, CustomButton, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp(
        {
          apiKey: 'AIzaSyCWGRn0WxCgKT-QwWkczi1odLrW5_LCOa8',
          authDomain: 'authentication-f3e5d.firebaseapp.com',
          databaseURL: 'https://authentication-f3e5d.firebaseio.com',
          projectId: 'authentication-f3e5d',
          storageBucket: 'authentication-f3e5d.appspot.com',
          messagingSenderId: '855723359836'
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
              <CustomButton buttonText={'Log out'} whenPressed={() => firebase.auth().signOut()} />
            </CardSection>
          );
        case false:
          return (
            <LoginForm />
          );
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
          <Header headerText='Authentication' />
          {this.renderContent()}
        </View>
    );
  }
}

export default App;
