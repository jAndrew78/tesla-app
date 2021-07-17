import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from '../Button';
import styles from './styles/CarItem';

const CarItem = props => {
  return (
    <View style={styles.carContainer}>

      <ImageBackground 
        source={require('../../../assets/images/ModelS.png')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <View style={styles.buttonContainer}>

        <Button 
          type='primary'
          content='Custom Order'
          onPress={() => {
            console.warn('Custom Order Pressed')
          }}
        />

        <Button 
          type='secondary'
          content='Existing Inventory'
          onPress={() => {
            console.warn('Inventory Pressed')
          }}
          />

        </View>

    </View>
  );
}

export default CarItem;
