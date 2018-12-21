import React, { Component } from 'react';
import {ListView,Text ,View,Button,TextInput,Alert} from 'react-native';
export default class ListViewScreen extends Component{
    constructor(props){
        super(props);
            this.state={text:''}
        }     
      render() {
        return (         
         <View>
             <View style={{alignItems:'center',marginTop:70}}>
             <TextInput 
                  placeholder = "Nhập tên nội dung..."
                  style = { {borderColor:'red',borderWidth:1,width:200} } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ text: TextInputText })} />
                <Button
                color="#841584"
                title ="go to"
                onPress ={()=>{ alert("noi dung nhap la: "+ this.state.text)}}/>
             </View>
             
         </View>        
        );
      }
      
    
  }
 
