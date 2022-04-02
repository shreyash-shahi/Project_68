import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    )
  } 
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{ screen:Facebook },
  Instagram:{ screen:Instagram }
});

const AppContainer = createAppContainer(TabNavigator);
