import React from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import Button from '../Button';
import styles from './styles/CarItem';

const CarItem = props => {
  
  const { name, tagline, taglineCTA, image } = props;
  
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

          <Pressable
            onPress={() => {
              console.warn('Touchless')
            }}
          >  
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Pressable>
      
        </Text>

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
