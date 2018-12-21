import React, { Component } from 'react';
import { AppRegistry, Text,View } from 'react-native';

export default class BoldAndBeautiful extends Component {
  render() {
    return (
      <View>
          <View style={{backgroundColor:'red'}}>
              <Text>View 1</Text>
          </View>
          <View style={{backgroundColor:'yellow'}}>
                <Text>View 2</Text>
          </View>
      </View>
    );
  }
}
