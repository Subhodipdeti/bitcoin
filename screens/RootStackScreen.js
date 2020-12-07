import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen/SignInScreen';
import SignUpScreen from './SignUpScreen/SignUpScreen';
import CreatePinScreen from './CreatePinScreen/CreatePinScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@blockchain_Key');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="CreatePinScreen" component={CreatePinScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
