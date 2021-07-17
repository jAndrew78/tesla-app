import React from 'react'
import { View, Image } from 'react-native';
import styles from './styles/Header';

const Header = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/tesla.png')} />
      <Image style={styles.menu} source={require('../../../assets/menu.png')} />
    </View>
  );
}

export default Header;
