import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ActivityScreen from './ActivityScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#3C40C6"
    barStyle={{
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}>
    <Tab.Screen
      name="Activity"
      component={ActivityStackScreen}
      options={{
        tabBarLabel: 'Activity',
        //tabBarColor: '#009387',
        tabBarIcon: ({color}) => <Icon name="poll" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Swap"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Swap',
        //tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="swap-horizontal-bold" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        //tabBarColor: '#694fad',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Buy & Sell"
      component={BuySellStackScreen}
      options={{
        tabBarLabel: 'Buy & Sell',
        //tabBarColor: '#d02860',
        tabBarIcon: ({color}) => <Icon name="cart" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Transfer"
      component={ExploreScreen}
      options={{
        tabBarLabel: <Text>Transfer</Text>,
        //tabBarColor: '#d02860',
        tabBarIcon: ({color}) => <Icon name="send" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
const ActivityStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#192A56',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Activity"
      component={ActivityScreen}
      options={{
        title: (
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.5,
              letterSpacing: 1,
            }}>
            Activity
          </Text>
        ),
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#192A56"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#192A56',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: (
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.5,
              letterSpacing: 1,
            }}>
            Dashbord
          </Text>
        ),
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#192A56"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const BuySellStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#192A56',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="BuySell"
      component={ExploreScreen}
      options={{
        title: (
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.5,
              letterSpacing: 1,
            }}>
            Buy & Sell
          </Text>
        ),
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#192A56"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#192A56',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: (
          <Text
            style={{
              fontFamily: 'BlissPro',
              fontSize: 18,
              opacity: 0.5,
              letterSpacing: 1,
            }}>
            Swap
          </Text>
        ),
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#192A56"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DetailsStack.Navigator>
);
