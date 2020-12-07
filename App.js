/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
// import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
// import BookmarkScreen from './screens/BookmarkScreen';
import EarnIntrestScreen from './screens/EarnIntrestScreen';
import BackupFundsScreen from './screens/BackupFundsScreen';
import AddressesScreen from './screens/AddressesScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import AirdropsScreen from './screens/AirdropsScreen';
import LockboxScreen from './screens/LockboxScreen';
import LitWalletScreen from './screens/LitWalletScreen';
import Camera from './screens/Camera';

// import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

// import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  // const loginReducer = (prevState, action) => {
  //   switch( action.type ) {
  //     case 'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false,
  //       };
  //     case 'REGISTER':
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // const authContext = React.useMemo(() => ({
  //   signIn: async(foundUser) => {
  //     // setUserToken('fgkj');
  //     // setIsLoading(false);
  //     const userToken = String(foundUser[0].userToken);
  //     const userName = foundUser[0].username;

  //     try {
  //       await AsyncStorage.setItem('userToken', userToken);
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'LOGIN', id: userName, token: userToken });
  //   },
  //   signOut: async() => {
  //     // setUserToken(null);
  //     // setIsLoading(false);
  //     try {
  //       await AsyncStorage.removeItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   signUp: () => {
  //     // setUserToken('fgkj');
  //     // setIsLoading(false);
  //   },
  //   toggleTheme: () => {
  //     setIsDarkTheme( isDarkTheme => !isDarkTheme );
  //   }
  // }), []);

  // useEffect(() => {
  //   setTimeout(async() => {
  //     // setIsLoading(false);
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  //   }, 1000);
  // }, []);

  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar backgroundColor="#192A56" />
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen
            name="EarnIntrestScreen"
            component={EarnIntrestScreen}
          />
          <Drawer.Screen
            name="BackupFundsScreen"
            component={BackupFundsScreen}
          />
          <Drawer.Screen name="AddressesScreen" component={AddressesScreen} />
          <Drawer.Screen name="ExchangeScreen" component={ExchangeScreen} />
          <Drawer.Screen name="AirdropsScreen" component={AirdropsScreen} />
          <Drawer.Screen name="LockboxScreen" component={LockboxScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="LitWalletScreen" component={LitWalletScreen} />
          <Drawer.Screen name="Camera" component={Camera} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
