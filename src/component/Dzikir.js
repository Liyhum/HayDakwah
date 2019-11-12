import React from 'react';
import { Text, View,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Pagis extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
        placeholder={'Dzikir Pagi Input here'}
        />
      </View>
    );
  }
}

class Petangs extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:15}}>Dzikir Petang</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Pagi: Pagis,
  Petang: Petangs,
});

export default createAppContainer(TabNavigator);