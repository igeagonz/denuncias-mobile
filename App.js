import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components/HomePage';
import { AppRegistry, Platform, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.parentView}>
        <HomePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

// Remove this line if using Create React Native App
AppRegistry.registerComponent('App', () => App);
