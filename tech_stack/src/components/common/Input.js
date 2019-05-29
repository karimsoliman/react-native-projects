import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
  const { labelStyle, textInputStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor='#D3D3D3'
          style={textInputStyle}
          autoCorrect={false}
          underlineColorAndroid='#D3D3D3'
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
};

const styles = {
  labelStyle: {
    fontSize: 16,
    flex: 1,
    marginLeft: 5
  },
  textInputStyle: {
    fontSize: 16,
    color: '#000',
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }

};

export { Input };
