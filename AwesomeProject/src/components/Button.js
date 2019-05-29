import React from 'react';
import { Button, View } from 'react-native';

const CustomButton = ({ buttonText, whenPressed }) => {
  const { buttonStyle } = styles;

  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={whenPressed}
        style={buttonStyle}
        title={buttonText}
        color="#007aff"
      />
    </View>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
  }
};

export default CustomButton;

/* or you can do this in another way */

/*
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ buttonText }) => {
const { buttonStyle, textStyle } = styles;

return (
  <TouchableOpacity style={buttonStyle}>
    <Text style={textStyle}>
      {buttonText}
    </Text>
  </TouchableOpacity>
);
};

const styles = {
buttonStyle: {
  flex: 1,
  alignSelf: 'stretch',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius: 5,
  backgroundColor: '#007aff',
  marginLeft: 5,
  marginRight: 5,
  paddingTop: 10,
  paddingBottom: 10
},
textStyle: {
  fontSize: 16,
  fontWeight: '600',
  alignSelf: 'center',
  color: '#fff'
}
};

export default CustomButton;

*/
