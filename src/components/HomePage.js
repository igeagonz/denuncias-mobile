import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ComplaintsList from './ComplaintsList';

export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Denuncias',
  };

  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation; 
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 5}}>
          <ComplaintsList />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={ () => navigate('Complaint') }>
            <Text style={styles.buttonText}>Denunciar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => navigate('Questions') }>
            <Text style={styles.buttonText}>Preguntas</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  },
  button: {
    flex: 1,
    margin: 15,
    backgroundColor: '#0d7ae8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  buttonText: { 
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'white'
  }
});