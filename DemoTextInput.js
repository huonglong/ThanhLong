import React, { Component } from 'react';
import {Text ,View,Button,TextInput,Alert,CheckBox} from 'react-native';
export default class ListViewScreen extends Component{
    constructor(props){
        super(props);
            this.state={checked:false}
        } 
       
      render() {
        return (         
         <View style ={{flexDirection:'row',margin:30,alignItems:'center'}}>
             <View >
                    <Text style={{color:'blue',fontWeight:'bold'}}>Họ tên: </Text>
             </View>
             <View >
                <TextInput 
                    placeholder = "Nhập tên nội dung..."
                    style = { {borderColor:'red',borderWidth:1,width:200} } 
                    underlineColorAndroid = "transparent"
                    onChangeText = {(TextInputText) => this.setState({ text: TextInputText })} />
            </View>  
            <View>
             <Text>{this.state.text}</Text>
            </View>    
         </View> 
                     
        );
      }
  }
 
