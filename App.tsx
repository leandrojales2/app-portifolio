
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import MainScreen from './components/mainScreen/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/background-top.svg')}
        style={{ width: '100%', height: '50%', }}
      />
      <Image
        source={require('./assets/background-top.svg')}
        style={{ width: '100%', height: '50%', transform: [{ rotate: '180deg' }] }}
      />
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
