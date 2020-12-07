import React, {useRef} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Title} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {ProgressCircle, StackedAreaChart} from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as shape from 'd3-shape';
import RBSheet from 'react-native-raw-bottom-sheet';
import {LineChart} from 'react-native-chart-kit';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListView from './ListView';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="1D" component={ListView} />
      <Tab.Screen name="1W" component={ListView} />
      <Tab.Screen name="1M" component={ListView} />
      <Tab.Screen name="1Y" component={ListView} />
      <Tab.Screen name="All" component={ListView} />
    </Tab.Navigator>
  );
}

const {height, width} = Dimensions.get('screen');

const LineChartpreview = () => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
  const keys = ['apples', 'bananas', 'cherries', 'dates'];
  const svgs = [
    {onPress: () => console.log('apples')},
    {onPress: () => console.log('bananas')},
    {onPress: () => console.log('cherries')},
    {onPress: () => console.log('dates')},
  ];

  return (
    <StackedAreaChart
      style={{height: 30}}
      data={data}
      keys={keys}
      colors={colors}
      curve={shape.curveNatural}
      showGrid={false}
      svgs={svgs}
    />
  );
};

const CircleChart = () => {
  return (
    <ProgressCircle
      style={{height: 100}}
      progress={0.4}
      progressColor={'rgb(134, 65, 244)'}
    />
  );
};

const HomeScreen = ({navigation}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        color: (opacity = 5) => `rgba(255,69,0, 8)`, // optional
        strokeWidth: 2, // optional
      },
    ],
    //legend: ['Rainy Days'], // optional
  };

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const refRBSheet = useRef();
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomColor: '#eee',
          borderBottomWidth: 2,
        }}>
        <View>
          <Text
            style={{fontFamily: 'BlissPro-Bold', fontSize: 18, opacity: 0.5}}>
            Total Balance
          </Text>
          <Title style={{fontFamily: 'BlissPro-Bold', opacity: 0.8}}>
            15.00
          </Title>
          <Text style={{color: '#45CE30', fontFamily: 'BlissPro'}}>
            0.00 (--)
          </Text>
        </View>
        <View style={{width: '30%'}}>{CircleChart()}</View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            borderColor: '#DAE0E2',
            borderWidth: 2,
            borderRadius: 10,
            width: width / 1.5,
            backgroundColor: '#ffffff',
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#45CE30',
                padding: 10,
                borderRadius: 10,
              }}>
              <Title style={{color: '#fff'}}>$</Title>
            </View>
            <View>
              <Title
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.8,
                }}>
                US Dollars
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  opacity: 0.5,
                }}>
                USD
              </Text>
            </View>
            <View>
              <Title
                style={{
                  fontFamily: 'BlissPro',
                  fontSize: 18,
                  opacity: 0.5,
                }}>
                0.00
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                US$0.00
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderColor: '#DAE0E2',
            borderWidth: 2,
            borderRadius: 10,
            width: width / 1.5,
            backgroundColor: '#ffffff',
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#45CE30',
                padding: 10,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}>
              <Title style={{color: '#fff'}}>$</Title>
            </View>
            <View>
              <Title
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.8,
                }}>
                US Dollars
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  opacity: 0.5,
                }}>
                USD
              </Text>
            </View>
            <View>
              <Title
                style={{
                  fontFamily: 'BlissPro',
                  fontSize: 18,
                  opacity: 0.5,
                }}>
                0.00
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                US$0.00
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderColor: '#DAE0E2',
            borderWidth: 2,
            borderRadius: 10,
            width: width / 1.5,
            backgroundColor: '#ffffff',
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#45CE30',
                padding: 10,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}>
              <Title style={{color: '#fff'}}>$</Title>
            </View>
            <View>
              <Title
                style={{
                  fontFamily: 'BlissPro-Bold',
                  fontSize: 18,
                  opacity: 0.8,
                }}>
                US Dollars
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro-Bold',
                  opacity: 0.5,
                }}>
                USD
              </Text>
            </View>
            <View>
              <Title
                style={{
                  fontFamily: 'BlissPro',
                  fontSize: 18,
                  opacity: 0.5,
                }}>
                0.00
              </Title>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.5,
                }}>
                US$0.00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          borderRadius: 10,
          borderColor: '#DAE0E2',
          borderWidth: 2,
          width: '100%',
          backgroundColor: '#ffffff',
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          marginVertical: 10,
          elevation: 10,
        }}
        onPress={() => refRBSheet.current.open()}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#FAC42F',
                margin: 10,
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
            <Title
              style={{
                fontFamily: 'BlissPro-Bold',
                opacity: 0.8,
              }}>
              Bitcoin
            </Title>
          </View>

          <View style={{width: '30%'}}>{LineChartpreview()}</View>
        </View>

        <View
          style={{
            marginLeft: 40,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.8,
              }}>
              $0.00
            </Text>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.5,
              }}>
              0 BTC
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#eee',
                width: 2,
                marginHorizontal: 10,
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.6,
                }}>
                $14,176.86
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#D63031',
                    fontFamily: 'BlissPro',
                    opacity: 0.6,
                  }}>
                  -1.55%{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                    opacity: 0.6,
                  }}>
                  24hrs
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderRadius: 10,
          borderColor: '#DAE0E2',
          borderWidth: 2,
          width: '100%',
          backgroundColor: '#ffffff',
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          marginVertical: 10,
        }}
        onPress={() => refRBSheet.current.open()}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#45CE30',
                margin: 10,
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
            <Title
              style={{
                fontFamily: 'BlissPro-Bold',
                opacity: 0.8,
              }}>
              Bitcoin Cash
            </Title>
          </View>

          <View style={{width: '30%'}}>{LineChartpreview()}</View>
        </View>

        <View
          style={{
            marginLeft: 40,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.8,
              }}>
              $0.00
            </Text>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.5,
              }}>
              0 BTC
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#eee',
                width: 2,
                marginHorizontal: 10,
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'BlissPro',
                  opacity: 0.6,
                }}>
                $14,176.86
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#D63031',
                    fontFamily: 'BlissPro',
                    opacity: 0.6,
                  }}>
                  -1.55%{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'BlissPro',
                    opacity: 0.6,
                  }}>
                  24hrs
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <RBSheet closeOnDragDown={true} ref={refRBSheet} height={height / 1.5}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'BlissPro',
              opacity: 0.5,
            }}>
            Current BTC Price
          </Text>
          <Title>$14, 043.36</Title>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text
              style={{
                color: '#D63031',
                fontFamily: 'BlissPro',
                opacity: 0.8,
              }}>
              -$462.78 (-3.2%)
            </Text>
            <Text
              style={{
                fontFamily: 'BlissPro',
                opacity: 0.5,
              }}>
              {' '}
              Last day
            </Text>
          </View>
        </View>
        <LineChart
          withDots={false}
          data={data}
          width={width}
          height={180}
          chartConfig={chartConfig}
        />

        <MyTabs />
      </RBSheet>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
