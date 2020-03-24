/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Dic from "./Container/Dic/Dic.js";
import data from "./Data/Data.json";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data

    }
  }

  componentDidMount() {

  }



  render() {

    return (
      <Dic data={this.state.data} />
    );
  }
}

