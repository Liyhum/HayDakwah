import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

class Sholats extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:15}}>Sholat Hei Manusia</Text>
      </View>
    );
  }
}

class Dzikirs extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:15}}>Kalau udah Sholat Dzikir!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Sholat: Sholats,
  Dzikir: Dzikirs,
});

export default createAppContainer(TabNavigator);