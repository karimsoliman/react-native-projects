import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCZCvetz9FwiGdWUPd7lS2tMCgOv2oTw14',
      authDomain: 'manager-b9eb3.firebaseapp.com',
      databaseURL: 'https://manager-b9eb3.firebaseio.com',
      projectId: 'manager-b9eb3',
      storageBucket: 'manager-b9eb3.appspot.com',
      messagingSenderId: '283809059090'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <RouterComponent />
      </Provider>
    );
  }
}

export default App;
