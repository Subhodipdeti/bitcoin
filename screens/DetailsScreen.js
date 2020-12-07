import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from 'react-native-paper';
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
  Badge,
  Text,
  Button,
} from 'native-base';

const DetailsScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 2}}>
        <View>
          {/* <Icon name="arrow-left" color="#000" size={20} /> */}
          <Icon name="cart" size={30} color="#1749FF" />
        </View>
        <Text style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 1}}>
          Verify Your id, Swap Today
        </Text>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.8}}>
            Verify your identity to Swap crypto at Anytime Apply and Swap in
            minutes.
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
                  opacity: 1,
                }}>
                Select Your Country
              </Text>
              <Text note style={{fontFamily: 'BlissPro', opacity: 0.9}}>
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
                    opacity: 0.9,
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
                  opacity: 1,
                }}>
                Verify Your identity
              </Text>
              <Text note style={{fontFamily: 'BlissPro', opacity: 1}}>
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
                  opacity: 1,
                }}>
                Start Swapping
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
              opacity: 1,
            }}>
            Apply Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
