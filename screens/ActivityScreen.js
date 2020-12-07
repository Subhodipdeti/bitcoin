import React from 'react';
import {View} from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from 'react-native-paper';

export default () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#192A56', width: '100%'}}>
        <List style={{backgroundColor: '#A4B0BD', margin: 10, borderRadius: 5}}>
          <ListItem avatar noBorder>
            <Left>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 5,
                  borderRadius: 100,
                }}>
                <Icon name="wallet" color="#1749FF" size={20} />
              </View>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#fff',
                  //opacity: 0.6,
                }}>
                My Bitcoin Wallet
              </Text>
              <Text
                note
                style={{
                  fontFamily: 'BlissPro-Bold',
                  color: '#fff',
                  //opacity: 0.6,
                }}>
                $0.00 GBP
              </Text>
            </Body>
            <Right>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <Icon name="chevron-down" size={20} color="#fff" />
              </View>
            </Right>
          </ListItem>
        </List>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Title
          style={{
            fontFamily: 'BlissPro-Bold',
          }}>
          You Have No Activity
        </Title>
        <Text
          style={{
            fontFamily: 'BlissPro',
            opacity: 0.6,
          }}>
          All your transactions will show up here.
        </Text>

        <View
          style={{
            marginTop: 100,
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
    </View>
  );
};
