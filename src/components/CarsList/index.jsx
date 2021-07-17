import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles/CarsList';

const CarsList = props => {
  return (
    <View style={styles.carsList}>
      <Text>CarsList Component</Text>
    </View>
  );
}

export default CarsList;
