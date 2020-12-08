/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useRef, useState, useEffect} from 'react';
import {View, ActivityIndicator, StatusBar, AppState} from 'react-native';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {AuthContext} from '../Context/ctx';
import RootStackScreen from './MainStack/index';
import AuthStack from './AuthStack/AuthStack';
import CreatePinScreen from '../Screens/CreatePinScreen/CreatePinScreen';
import {navigationRef} from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <NavigationContainer theme={theme} ref={navigationRef}>
          <StatusBar backgroundColor="#192A56" />

          {loginState.userToken && loginState.value ? (
            <CreatePinScreen
              token={loginState.userToken}
              isRenterPin={loginState.isRenterPin}
            />
          ) : loginState.userToken !== null ? (
            <RootStackScreen />
          ) : (
            <AuthStack />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
