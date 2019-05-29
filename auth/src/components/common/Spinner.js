import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  const { viewStyle, SpinnerStyle } = styles;
  return (
    <View style={viewStyle}>
      <ActivityIndicator size={size || 'large'} style={SpinnerStyle} />
    </View>
  );
};

  const styles = {
    viewStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    SpinnerStyle: {
      color: '#0000ff'
    }
  };

export { Spinner };
