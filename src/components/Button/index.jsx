import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles/Button';

const Button = props => {
  return (
    <View style={styles.button}>
      <Text>Button Component</Text>
    </View>
  );
}

export default Button;
