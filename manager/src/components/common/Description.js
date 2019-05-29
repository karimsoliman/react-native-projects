import React from 'react';
import { View } from 'react-native';

const Description = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    padding: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  }
};

export { Description };
