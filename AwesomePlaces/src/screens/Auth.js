import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {startTabs} from './startMainTabs';

class AuthScreen extends Component{
    onPressHandler = () => {
        startTabs()
    }

    render() {
        return(
            <View>
                <Text>
                    Login
                </Text>
                <Button title="login" onPress={this.onPressHandler}/>
            </View>
        );
    }
}

export default AuthScreen;