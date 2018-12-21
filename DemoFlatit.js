import React, { Component } from 'react';
import {ListView,Text ,View,Button,TextInput,Alert,FlatList} from 'react-native';
export default class ListViewScreen extends Component{   
      render() {
        return (         
         <View>
             <View style={{alignItems:'center',marginTop:70}}>
             <FlatList
                data={[{key: 'Lớp học A'}, {key: 'Lớp học B'} , {key: 'Lớp học C'}, {key: 'Lớp học D'}]}
                renderItem={({item}) => <Text style ={{borderBottomWidth:1,borderBottomColor:'blue'}}>{item.key}</Text>}
                />
             </View>
         </View>        
        );
      }
  }
 
