import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
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

const {height, width} = Dimensions.get('screen');

function MyTabs({navigation}) {
  console.log('====>>', navigation);
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
            Transfer
          </Title>
        </View>

        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Camera', {screenName: 'Transfer'})
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
        <Tab.Screen name="Send" component={BuyScreen} />
        <Tab.Screen name="Receive" component={SellScreen} />
      </Tab.Navigator>
    </>
  );
}

const BuyScreen = () => {
  return (
    <Content>
      <View
        style={{padding: 15, justifyContent: 'center', alignItems: 'center'}}>
        <Title>No crypto to send</Title>
        <Text
          style={{
            fontFamily: 'BlissPro',
            opacity: 0.6,
            textAlign: 'center',
          }}>
          Looks ike your wallets are empty, we can help you buy crypto
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: height / 3.5,
        }}>
        <View
          style={{
            borderColor: 'rgba(23, 73, 255, 0.5)',
            borderWidth: 5,
            backgroundColor: 'rgba(23, 73, 255, 1)',
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="bitcoin"
            size={50}
            color="#fff"
            style={{transform: [{rotate: '50deg'}]}}
          />
        </View>
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
            Buy Crypto
          </Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
};

const SellScreen = () => {
  return (
    <ScrollView>
      <View
        style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 2}}>
        <View
          style={{
            backgroundColor: 'rgba(23, 73, 255, 1)',
            height: 30,
            width: 30,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          {/* <Icon name="arrow-left" color="#000" size={20} /> */}
          <Icon
            name="arrow-left"
            size={20}
            color="#fff"
            style={{transform: [{rotate: '-50deg'}]}}
          />
        </View>
        <Title
          style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 0.8}}>
          Receive Crypto
        </Title>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.5}}>
            Select a wallet to receive crypto to.
          </Text>
        </View>
      </View>

      <List>
        <ListItem
          avatar
          noBorder
          style={{
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
            marginTop: 10,
          }}>
          <Left>
            <View
              style={{
                backgroundColor: '#FAC42F',
                // margin: 10,
                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Icon name="bitcoin" color="#fff" size={20} />
            </View>
          </Left>
          <Body>
            <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
              My Bitcoin Wallet
            </Text>
            <Text note>Bitcoin</Text>
          </Body>
          <Right>
            <Text>$0.00</Text>
            <Text note>0 BTC</Text>
            {/* <Text note>3:43 pm</Text> */}
          </Right>
        </ListItem>

        <ListItem
          avatar
          noBorder
          style={{
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
            marginTop: 15,
          }}>
          <Left>
            <View
              style={{
                backgroundColor: '#6AB04A',
                //margin: 10,
                padding: 5,
                borderRadius: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Icon name="bitcoin" color="#fff" size={20} />
            </View>
          </Left>
          <Body>
            <Text style={{fontFamily: 'BlissPro-Bold', opacity: 0.6}}>
              My Bitcoin Cash Wallet
            </Text>
            <Text note>Bitcoin</Text>
          </Body>
          <Right>
            <Text>$0.00</Text>
            <Text note>0 BTC</Text>
            {/* <Text note>3:43 pm</Text> */}
          </Right>
        </ListItem>
      </List>
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
