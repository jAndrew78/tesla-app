import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles/Button';

const Button = props => {
  
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('Pressed')
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
}

export default Button;
