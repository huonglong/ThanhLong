import React, { Component } from 'react';
import { AppRegistry, Text, View,Button } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state={soluong:5}
  }
resetSoluong(){
    this.setState({soluong: this.state.soluong+1})
}
  render() {
    return (
      <View>
            <Text style={{color:'red', fontSize:20,fontWeight:'bold',
                        textAlign:'center'}}>{this.state.soluong}</Text>
            <Button
            title='click'
            color="#841584"
            onPress ={()=>{this.resetSoluong()}}
            >

            </Button>
      </View>
    );
  }
}




