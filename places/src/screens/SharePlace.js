import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PlaceInput from '../components/PlaceInput/PlaceInput';

class SharePlace extends Component{
    render(){
        return(
            <View>
                <PlaceInput />
            </View>
        );
    }
}

export default SharePlace;