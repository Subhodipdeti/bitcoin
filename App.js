/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  StatusBar,
  AppState,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
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
import CreatePinScreen from './screens/CreatePinScreen/CreatePinScreen';

import {AuthContext} from './Components/context';
import RootStackScreen from './screens/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

// import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUserLogeed, setisUserLogeed] = React.useState(false);
  // const [userToken, setUserToken] = React.useState(null);

  //FIXME:

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // Alert.alert('Ok');
      // console.warn(appState.current);

      dispatch({type: 'APP_STATE', value: true, isRenterPin: false});
    }
    if (appState.current === 'active') {
      dispatch({type: 'APP_STATE', value: true});
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };
  //FIXME:

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    value: false,
    isRenterPin: false,
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

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          isRenterPin: action.isRenterPin,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'APP_STATE':
        return {
          ...prevState,
          value: action.value,
          isRenterPin: action.isRenterPin,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async userToken => {
        try {
          await AsyncStorage.setItem('@blockchain_Key', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({
          type: 'LOGIN',
          id: 'abc',
          token: userToken,
          isRenterPin: true,
        });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('@blockchain_Key');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async userToken => {
        try {
          await AsyncStorage.setItem('@blockchain_Key', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({
          type: 'REGISTER',
          id: 'abc',
          token: userToken,
          isRenterPin: true,
        });
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
      toggleAppState: value => {
        dispatch({type: 'APP_STATE', value: value});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('@blockchain_Key');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#02295F',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <StatusBar backgroundColor="#192A56" />

          {loginState.userToken && loginState.value ? (
            <CreatePinScreen
              token={loginState.userToken}
              isRenterPin={loginState.isRenterPin}
            />
          ) : loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen
                name="EarnIntrestScreen"
                component={EarnIntrestScreen}
              />
              <Drawer.Screen
                name="BackupFundsScreen"
                component={BackupFundsScreen}
              />
              <Drawer.Screen
                name="AddressesScreen"
                component={AddressesScreen}
              />
              <Drawer.Screen name="ExchangeScreen" component={ExchangeScreen} />
              <Drawer.Screen name="AirdropsScreen" component={AirdropsScreen} />
              <Drawer.Screen name="LockboxScreen" component={LockboxScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen
                name="LitWalletScreen"
                component={LitWalletScreen}
              />
              <Drawer.Screen name="Camera" component={Camera} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
