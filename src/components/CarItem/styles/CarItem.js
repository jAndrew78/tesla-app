import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  carContainer: {
    width: '100%',
    height: '100%',
  },
  
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },

  image: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default styles;
