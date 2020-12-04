import React from 'react';
import {View, StyleSheet} from 'react-native';
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
    <View>
      <View
        style={{padding: 10, borderBottomColor: '#eee', borderBottomWidth: 2}}>
        <View
          style={{
            width: 50,
            backgroundColor: '#3C40C6',
            padding: 10,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Icon name="arrow-left" color="#000" size={20} /> */}
          <Icon name="arrow-right" color="#fff" size={20} />
        </View>
        <Title
          style={{fontFamily: 'BlissPro-Bold', fontSize: 22, opacity: 0.8}}>
          Verify Your id. Swap Today.
        </Title>
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'BlissPro', fontSize: 18, opacity: 0.5}}>
            Verify your identity to Swap crypto at anytime. Apply and Swap in
            minutes
          </Text>
        </View>
      </View>

      <View style={{marginTop: 50}}>
        <List>
          <ListItem avatar>
            <Left>
              <Badge primary>
                <Text>1</Text>
              </Badge>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.6,
                }}>
                Kumar Pratik
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
              <Badge primary>
                <Text>1</Text>
              </Badge>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.6,
                }}>
                Kumar Pratik
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
              <Badge primary>
                <Text>1</Text>
              </Badge>
            </Left>
            <Body>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.6,
                }}>
                Kumar Pratik
              </Text>
              <Text note style={{fontFamily: 'BlissPro', opacity: 0.8}}>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note />
            </Right>
          </ListItem>
        </List>
      </View>
      <View style={{margin: 10}}>
        <Button full primary style={{borderRadius: 10}}>
          <Text
            style={{
              fontFamily: 'BlissPro-Bold',
              color: '#fff',
              opacity: 0.8,
            }}>
            Apply Now
          </Text>
        </Button>
      </View>
    </View>
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
