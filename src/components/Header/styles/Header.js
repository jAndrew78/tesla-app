import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },

  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },

  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default styles;
