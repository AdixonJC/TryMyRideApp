/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Navigation from './src/navigation';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, ScrollViewBase
} from 'react-native';




const App = () => (
  <SafeAreaView style={styles.root}>
     <Navigation/>
  </SafeAreaView>

)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f9fBfC",
    padding: 15,
  }
})
export default App;
