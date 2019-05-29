/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

/* export default class App extends Component<Props> {
  render() {
	  let pic = {
		  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
	  };
	  
    return (
      <Image source= {pic} style={{width: 193, height: 110}}/>
    );
  }
} */

class Greeting extends Component{
	render(){
		return (
			<View style={{alignItems: 'center'}}>
				<Text>Hello {this.props.name}!</Text>
			</View> 
		);
	}
}

export default class LotsofGreetings extends Component{
	render(){
		return(
			<View style={{alignItems: 'center'}}>
				<Greeting name="karim"/>
				<Greeting name="gehad" />
			</View>
		);
	}
}