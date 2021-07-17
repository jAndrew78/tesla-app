import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import styles from './styles/Header';

const Header = props => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.warn('Tesla')}>
        <Image style={styles.logo} source={require('../../../assets/tesla.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.warn('Menu')}>
        <Image style={styles.menu} source={require('../../../assets/menu.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
