import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          color: '#fff',
          fontFamily: 'BlissPro-Bold',
        },
        style: {backgroundColor: '#192A56', elevation: 0},
      }}>
      <Tab.Screen name="Buy" component={ExploreScreen} />
      <Tab.Screen name="Sell" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

const ExploreScreen = () => {
  return (
    <Content>
      <List>
        <ListItem avatar>
          <Left>
            <View
              style={{
                backgroundColor: '#FAC42F',
                margin: 10,
                padding: 5,
                borderRadius: 100,
              }}>
              <Icon name="bitcoin" color="#fff" size={20} />
            </View>
          </Left>
          <Body>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',

                opacity: 0.6,
              }}>
              Bitcoin
            </Text>
            <Text
              style={{
                fontFamily: 'BlissPro-Bold',

                opacity: 0.6,
              }}
              note>
              $14,073.04
            </Text>
          </Body>
          <Right>{/* <Text note>3:43 pm</Text> */}</Right>
        </ListItem>
      </List>
    </Content>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
