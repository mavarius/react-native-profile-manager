import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ProfileScene from '../scenes/ProfileScene'
import ImageSelectScene from '../scenes/ImageSelectScene'

const RootStack = createStackNavigator(
  {
    ProfileScene: { screen: ProfileScene },
    ImageSelectScene: { screen: ImageSelectScene }
  },
  {
    initialRouteName: 'ProfileScene',
    navigationOptions: { header: null }
  }
);

export const AppNav = () => <RootStack />

export default AppNav