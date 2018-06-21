import React from 'react';
import HomePage from './src/components/HomePage';
import ComplaintPage from './src/components/ComplaintPage';
import QuestionsPage from './src/components/QuestionsPage';
import { AppRegistry, Platform, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home:  HomePage ,
    Complaint: ComplaintPage,
    Questions: QuestionsPage,
  }, 
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// Remove this line if using Create React Native App
AppRegistry.registerComponent('App', () => App);