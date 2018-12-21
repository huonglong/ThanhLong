import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';

export default class Vehicle extends Component{
  constructor(props){
    super(props);
  }
  clickEdit_Xe(){
    this.props.navigation.navigate('ThemSua',{thamso:'Xe so'});
}
  render() {
    
    return (
      
      <View style={styles.appRow}>

          <View style={{borderRightWidth:1,borderRightColor:'grey',flex:1 ,backgroundColor: 'powderblue',marginLeft:0,paddingLeft:0,justifyContent: 'center'}}>
             
             <Image
             style={styles.img}
             source={{uri: this.props.img}}
             />
          </View>
          <View style={{width: 250 ,backgroundColor: 'powderblue'}}>
            <Text style={styles.typeText}>Tên xe: {this.props.tenxe} - {this.props.bienso}</Text>
            <Text style={styles.typeText}>Màu xe: {this.props.mauxe}</Text>
            <Text style={styles.typeText}>Phân khối: {this.props.xilanh}</Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appRow:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
  },
  appColumn:{
    // flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  img: {
  
    width: 105,
    height: 85,
},
typeText:{
  fontFamily:'Times New Roman',
  fontSize: 15,
  paddingLeft:5,
  marginLeft: 5,
  marginBottom: 5,
}
  
});