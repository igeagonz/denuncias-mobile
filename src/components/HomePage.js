import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import ComplaintsList from './ComplaintsList';

export default class HomePage extends Component {

  constructor() {
    super();
    this.doSomething = this.doSomething.bind(this);  }

  doSomething() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }

  render() { 
    return(
      <View style={{flex: 1}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Denuncias</Text>
        </View>
        <View style={{flex: 5}}>
          <ComplaintsList />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.doSomething}>
            <Text style={styles.buttonText}>Denunciar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.doSomething}>
            <Text style={styles.buttonText}>Preguntas</Text>
          </TouchableOpacity>
        </View>
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
  },
  buttonContainer: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    backgroundColor: '#0d7ae8'
  },
  button: {
    flex: 1,
    margin: 15,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    
  },
  buttonText: { 
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'black'
  }
});