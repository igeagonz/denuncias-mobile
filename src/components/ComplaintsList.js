import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';

export default class ComplaintsList extends Component {
  render() { 
    return(
      <ScrollView>
        <Text style={{fontSize:40}}>
          Lista de denuncias
        </Text>
      </ScrollView>
    );
  }
}