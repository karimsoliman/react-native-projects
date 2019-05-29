import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
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
    backgroundColor: '#008B8B',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  }
};

export { CardSection };
