import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CarItem } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CarItem 
        name="Model S"
        tagline="Order Online for "
        taglineCTA="Touchless Delivery"
        image={require('./assets/images/ModelS.png')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
