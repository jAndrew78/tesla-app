import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import styles from './styles.js'

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.carContainer}>

        <ImageBackground 
          source={require('./assets/images/ModelS.png')}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}
