import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
          {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      height: 270,
      padding: 10,
      backgroundColor: '#ff8d6b',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ff8d6b',
      position: 'relative'
  }
};

export { CardSection };
