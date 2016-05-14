
import React, { Component } from 'react';
import Root from './src/config/root'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class cincoletras extends Component {
  render() {
    return (
      <Root/>
    );
  }
}


AppRegistry.registerComponent('cincoletras', () => cincoletras);
