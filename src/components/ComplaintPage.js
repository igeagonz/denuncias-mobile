import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class ComplaintPage extends Component {
  static navigationOptions = {
    title: 'Tu Denuncia',
  };

  render() {
    return (
      <View style={{flex: 1}}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d7ae8'
  },
  title: { 
    fontSize: 50,
    fontFamily: 'monospace',
    color: 'white'
  }
});