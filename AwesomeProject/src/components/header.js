//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//create Component
const Header = (props) => {
  const { textStyle } = styles;

  return (
    <View style={styles.viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

//styling Header
const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderBottomWidth: 2,
    borderColor: '#A9A9A9',
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//render or export Component
export default Header;
