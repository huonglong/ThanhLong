import React, { Component } from 'react';
import { AppRegistry, View,Text,StyleSheet } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{backgroundColor:'grey',flex:0.5}} >
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
            <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            <View style={{backgroundColor:'green' }}>
                <Text>dsaddsadssads</Text>
            </View>
      </View>
    );
  }
}
