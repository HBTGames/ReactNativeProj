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

const App: () => React$Node = () => {
  return (
    <>
      <Dic />
    </>
  );
};


export default App;
