import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Routes from './routes';
Icon.loadFont();

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>
);

export default App;
