import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import startTabs from './startMainTabs';

class Auth extends Component{

    onPressHandler = () => {
        startTabs();
    };

    render(){
        return(
            <View>
                <Button title="Login" onPress={this.onPressHandler}></Button>
            </View>
        );
    }
}

export default Auth;