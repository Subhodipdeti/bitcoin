import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {Title} from 'react-native-paper';
import {Icon, ICON_TYPE} from '../Assets/icons/index';

export default ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.headerLeft}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
          name="menu"
          type={ICON_TYPE.MATERIAL_COMMUNITY}
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      <Title style={styles.headerLeftTitle}>Buy & Sell</Title>
    </View>

    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Camera', {screenName: 'Buy & Sell'})}>
      <Icon
        type={ICON_TYPE.MATERIAL_COMMUNITY}
        name="qrcode-scan"
        size={25}
        color="#fff"
        style={{marginRight: 10}}
      />
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#192A56',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  headerLeft: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTitle: {
    color: '#fff',
    fontFamily: 'BlissPro-Bold',
    marginLeft: 20,
  },
});
