
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SkillScreen from './components/skillScreen/SkillScreen';
import MainScreen from './components/mainScreen/MainScreen';

function HomeScreen() {
  return (
      <MainScreen></MainScreen>

  );
}
function ScreenSkill() {
  return (
      <SkillScreen></SkillScreen>

  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
    headerMode: 'none',
  },
  screens: {   
    Home: HomeScreen,
    Skills: ScreenSkill,
  },
})

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (      
    <Navigation />
  );
}

