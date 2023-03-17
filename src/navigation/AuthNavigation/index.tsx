import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Registration from '../../screens/Registration';

const Navigator = createNativeStackNavigator();
const AuthNavigation = () => (
  <Navigator.Navigator initialRouteName="login">
    <Navigator.Screen name="login" component={Login} />
    <Navigator.Screen name="registration" component={Registration} />
  </Navigator.Navigator>
);

export default AuthNavigation;
