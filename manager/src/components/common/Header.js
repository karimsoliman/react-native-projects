import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderColor: '#A9A9A9',
    borderBottomWidth: 2,
    elevation: 2,
    position: 'relative',
    marginBottom: 5
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
