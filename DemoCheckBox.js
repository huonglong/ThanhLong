import React, { Component } from 'react';
import {ListView,Text ,View,Button,TextInput,Alert,CheckBox} from 'react-native';
export default class ListViewScreen extends Component{
    constructor(props){
        super(props);
            this.state={checked:false}
        } 
        demoCheck(){
            this.setState({checked: !this.state.checked});
            if(this.state.checked == false){
                alert("bạn đã check vào");
            }
        }    
      render() {
        return (         
         <View style ={{flexDirection:'row',height:20,
                        justifyContent:'center',alignItems:'center',marginTop:30}}>
             <View style={{alignItems:'center'}}>
                <CheckBox
                            center
                            title='Click Here '
                            iconRight
                            iconType='material'
                            checkedIcon='clear'
                            uncheckedIcon='add'
                            checkedColor='red'
                            checked={this.state.checked}
                            value={this.state.checked}
                            onChange={() => this.demoCheck()}
                            />
             </View>
             <View style={{backgroundColor:'grey'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>CheckBox</Text>
            </View>    
         </View>        
        );
      }
  }
 
