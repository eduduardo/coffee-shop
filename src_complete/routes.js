import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SingleCoffee from './pages/SingleCoffee';

const Stack = createStackNavigator();

const commonScenes = {
  Home: {
    component: Home,
    options: {
      headerShown: false,
    },
  },
  SingleCoffee: {
    component: SingleCoffee,
  }
};

const SCREEN_OPTIONS = {
  headerTitleStyle: { alignSelf: 'center' },
  headerTintColor: '#000',
  headerBackTitleVisible: false,
};

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      {Object.entries({
        ...commonScenes,
      }).map(([name, route]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};
export default Routes;
