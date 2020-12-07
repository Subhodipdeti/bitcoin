import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
  Button,
  Badge,
} from 'native-base';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

function MyTabs({navigation}) {
  return (
    <>
      <View
        style={{
          backgroundColor: '#192A56',
          width: '100%',
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <Title
            style={{
              color: '#fff',
              fontFamily: 'BlissPro-Bold',
              marginLeft: 20,
            }}>
            Buy & Sell
          </Title>
        </View>

        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Camera', {screenName: 'Buy & Sell'})
          }>
          <Icon
            name="qrcode-scan"
            size={25}
            color="#fff"
            style={{marginRight: 10}}
          />
        </TouchableWithoutFeedback>
      </View>

      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            color: '#fff',
            fontFamily: 'BlissPro-Bold',
          },
          style: {
            backgroundColor: '#192A56',
            elevation: 0,
          },
          indicatorStyle: {
            height: 5,
            backgroundColor: '#fff',
            borderRadius: 5,
          },
        }}>
        <Tab.Screen name="Buy" component={BuyScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
      </Tab.Navigator>
    </>
  );
}

const BuyScreen = () => {
  return (
    <Content>
      <View style={{padding: 15}}>
        <Icon name="cart" size={30} color="#1749FF" />
        <Title
          style={{
            fontFamily: 'BlissPro-Bold',
            opacity: 0.8,
          }}>
          Buy With Cash or Card
        </Title>
        <Text
          style={{
            fontFamily: 'BlissPro',
            opacity: 0.5,
          }}>
          Select the crypto you want to buy
        </Text>
      </View>
      <List>
        <ListItem avatar>
          <Left>
            <View
              style={{
                backgroundColor: '#FAC42F',

                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
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
        <ListItem avatar>
          <Left>
            <View
              style={{
                backgroundColor: '#6ab04c',
                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
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

const SellScreen = () => {
  return (
    <ScrollView>
      <View
        style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 2}}>
        <View>
          {/* <Icon name="arrow-left" color="#000" size={20} /> */}
          <Icon name="cart" size={30} color="#1749FF" />
        </View>
        <Title
          style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 0.8}}>
          Sell Crypto
        </Title>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.5}}>
            Verify your identity to sell crypto for cash.
          </Text>
        </View>
      </View>

      <View style={{marginTop: 50}}>
        <List>
          <ListItem avatar>
            <Left>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'rgba(23, 73, 255, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  //padding: 10,
                  borderRadius: 100,
                }}>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    fontSize: 22,
                    opacity: 0.8,
                    color: '#1749FF',
                  }}>
                  1
                </Text>
              </View>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.6,
                }}>
                Verify Your identity
              </Text>
              <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note />
            </Right>
          </ListItem>

          <ListItem avatar>
            <Left>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'rgba(23, 73, 255, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  //padding: 10,
                  borderRadius: 100,
                }}>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    fontSize: 22,
                    opacity: 0.8,
                    color: '#1749FF',
                  }}>
                  2
                </Text>
              </View>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.6,
                }}>
                Buy Crypto
              </Text>
              <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Body>
            <Right>
              <Text note />
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'rgba(23, 73, 255, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  //padding: 10,
                  borderRadius: 100,
                }}>
                <Text
                  style={{
                    fontFamily: 'BlissPro-Bold',
                    fontSize: 22,
                    opacity: 0.8,
                    color: '#1749FF',
                  }}>
                  3
                </Text>
              </View>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.6,
                }}>
                Sell at Anytime
              </Text>
              <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Body>
            <Right>
              <Text note />
            </Right>
          </ListItem>
        </List>
      </View>
      <View style={{margin: 10}}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#1749FF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            padding: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              fontFamily: 'BlissPro-Bold',
              color: '#fff',
              opacity: 0.8,
            }}>
            Apply Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
