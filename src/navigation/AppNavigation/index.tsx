import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthNavigation from '../AuthNavigation';
import Main from '../../screens/Main';
import Animation from '../../screens/Animation';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Auth" component={AuthNavigation} />
      <Tab.Screen name="Animation" component={Animation} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
