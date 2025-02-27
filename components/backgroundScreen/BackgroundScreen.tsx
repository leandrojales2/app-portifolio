import React from 'react';
import { Image } from 'react-native';
import backgroundScreenStyles from './backgroundScreenStyles';


export default function BackgroundScreen() {
  return (
    <>
      <Image
        source={require('../../assets/background-top.svg')}
        style={backgroundScreenStyles.image}
      />
      <Image
        source={require('../../assets/background-top.svg')}
        style={backgroundScreenStyles.imageInverted}
      />
    </>
  );
}
