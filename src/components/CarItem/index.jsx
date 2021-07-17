import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import Button from '../Button';
import styles from './styles/CarItem';

const CarItem = props => {
  
  const { name, tagline, taglineCTA, image } = props.car;
  
  return (

    <View style={styles.carContainer}>

      <ImageBackground 
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        
        <Text style={styles.subtitle}>
      
          {tagline}

          <Text 
            style={styles.subtitleCTA}
            onPress={() => {
              console.warn('Touchless Delivery')
            }}
          >
            {taglineCTA}
          </Text>
      
        </Text>

      </View>

      <View style={styles.buttonContainer}>

        <Button 
          type='primary'
          content='Custom Order'
          onPress={() => {
            console.warn('Custom Order')
          }}
        />

        <Button 
          type='secondary'
          content='Existing Inventory'
          onPress={() => {
            console.warn('Existing Inventory')
          }}
          />

        </View>

    </View>
  );
}

export default CarItem;
