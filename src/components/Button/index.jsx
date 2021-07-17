import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles/Button';

const Button = props => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffdd';
  const color = type === 'primary' ? '#fff' : '#393c41';
  
  return (
    <View style={styles.container}>

      <Pressable
        style={[styles.button, {backgroundColor}]}
        onPress={onPress}
      >
        <Text style={[styles.text, {color}]}>{content}</Text>
      </Pressable>

    </View>
  );
}

export default Button;
