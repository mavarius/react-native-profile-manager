import React, { Component } from 'react'
import { Provider } from 'react-redux'

import AppNav from './app/components/app-nav/AppNav'
import store from './app/lib/store'

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    )
  }
}