/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, ActivityIndicator,ToastAndroid, Picker} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

var listLoaixe =[
  {label: "Chọn loại xe", value: "0"}, 
  {label: "Xe số", value: "1"},
  {label: "Xe tay ga", value: "2"},
]
export default class EditMotocycle extends Component{
  constructor()
  {
      super();
      this.state = { 
        masp: '',
        tenXe: '',
        bienSo: '',
        loaiXe: '',
        mauXe: '',
        phanKhoi: '',
        ActivityIndicator_Loading: false, 
        isLoading: true
      }
  }

  componentDidMount(){ 
    this.setState({masp:this.props.navigation.state.params.thamsoMaSP})
    this.setState({tenXe:this.props.navigation.state.params.thamSoTenSP})
    this.setState({mauXe: this.props.navigation.state.params.thamSoMauXe})
    this.setState({bienSo: this.props.navigation.state.params.thamSoBienSo})
    this.setState({phanKhoi: this.props.navigation.state.params.thamSoPhanKhoi})
    this.setState({loaiXe: this.props.navigation.state.params.thamSoLoaiXe})
  
  }

  //Xu ly nut luu
  saveData(){
    if(this.state.tenXe == ""){
      Alert.alert("Thông báo!","Bạn hãy nhập tên xe");
      return
    } 
    if(this.state.bienSo == ""){
      Alert.alert("Thông báo!","Biển số xe không được bỏ trống!");
      return
    }
    if(this.state.loaiXe == "" || this.state.loaiXe == "Chọn loại xe"){
      Alert.alert("Thông báo!","Bạn hãy chọn loại xe!");
      return
    }
    if(this.state.mauXe == ""){
      Alert.alert("Thông báo!","Màu xe không được bỏ trống!");
      return
    }
    if(this.state.phanKhoi == ""){
      Alert.alert("Thông báo!","Bạn hãy nhập phân khối xe!");
      return
    }

    Alert.alert("Xác nhận!", "Bạn có chắc chắn muốn thay đổi thông tin?", [
      {text: "Hủy", onPress: ()=>console.log("Cancel tapped")},
      {text: "Đồng ý", onPress: ()=>this.changeInformation()},
    ],
    {cancelable: false});
  }

  changeInformation()
  {
    // Alert.alert(this.state.bienSo, this.props.navigation.state.params.thamSoBienSo)
    // return
    if (this.state.bienSo != this.props.navigation.state.params.thamSoBienSo) 
    {
      //Kiem tra bien so da ton tai chua
      fetch('http://192.168.235.2/API_Project/search_XeTheoBienSo.php',
      {
          method: 'POST',
          headers: 
          {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(
          {
              BienSo: this.state.bienSo,
          })

      }).then((response) => response.json())
      .then((responseJson) => {
          if(responseJson != "wrong"){
              Alert.alert("Thông báo", "Biển số xe này đã tồn tại!")
              return
          } 
        })           
      .catch((error) =>
      {
          console.error(error);

          this.setState({ ActivityIndicator_Loading : false});
      });
     
   }

   //Tien hanh update du lieu khi du lieu thoa tat ca cac dieu kien
    this.setState({ActivityIndicator_Loading : true }, () =>
     {
        fetch('http://192.168.235.2/API_Project/Update_Xe.php',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
              MaSP: this.state.masp,
              TenSP: this.state.tenXe,
              BienSo: this.state.bienSo,
              LoaiXe: this.state.loaiXe,
              MauXe: this.state.mauXe,
              PhanKhoiXe: this.state.phanKhoi,
            })

        }).then((response) => response.json()).then((responseJsonFromServer) =>
        {

             this.setState({ ActivityIndicator_Loading : false });
             Alert.alert("Thông báo!",responseJsonFromServer,[
              {text: "OK", onPress: ()=>this.props.navigation.navigate('ListMotobike')},
            ],
            {cancelable: false});

        }).catch((error) =>
        {
            console.error(error);

            this.setState({ ActivityIndicator_Loading : false});
        });
  	});
  }


  //Xu ly nut huy
  cancelEdit(){
    this.props.navigation.pop()
  }

render(){
    return(
      <View style={styles.comtainer}>
        {/* An canh bao */}
        <StatusBar hidden ={true}/>
            {/* Hien thi thong bao  */}
            <View style = {styles.containerHeader}>
                <Text style = {styles.headerText}>SỬA THÔNG TIN XE</Text>
            </View>

            <View style = { styles.containerContent }>

            <View style={styles.containerTextAndTextInput}>
              <Text style={styles.TextLoiNhac}>Tên xe: </Text>
              <TextInput 
                placeholder = "Nhập tên xe..."
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                value={this.state.tenXe}
                onChangeText = {(TextInputText) => this.setState({tenXe: TextInputText })} />    
 
            </View>

             <View style={styles.containerTextAndTextInput}>
                <Text style={styles.TextLoiNhac}>Biển số: </Text>
                <TextInput 
                  placeholder = "Nhập biển số xe..."
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  value={this.state.bienSo}
                  onChangeText = {(TextInputText) => this.setState({ bienSo: TextInputText })} />
            </View>

            <View style={styles.containerTextAndTextInput}>
                <Text style={styles.TextLoiNhac}>Loại xe: </Text>
                  <Picker style = {{width: '75%', marginTop: -25,}} 
                    selectedValue={this.state.loaiXe}
                    onValueChange={(value)=> this.setState({loaiXe: value})}>
                    {listLoaixe.map((item)=><Picker.Item label = {item.label} value ={item.value}/>)}
                  </Picker>
            </View>

             <View style={styles.containerTextAndTextInput}>
                <Text style={styles.TextLoiNhac}>Màu xe: </Text>
                <TextInput 
                  placeholder = "Nhập màu xe..."
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  value = {this.state.mauXe}
                  onChangeText = {(TextInputText) => this.setState({ mauXe: TextInputText })} />
            </View>


             <View style={styles.containerTextAndTextInput}>
                <Text style={styles.TextLoiNhac}>Phân khối: </Text>
                <TextInput 
                  placeholder = "Nhập phân khối xe"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  value={this.state.phanKhoi}
                  onChangeText = {(TextInputText) => this.setState({ phanKhoi: TextInputText })} />
            </View>

              {/* Chua 2 button */}
              <View style = {styles.containerButton}>
                <TouchableOpacity onPress={()=> this.saveData()} activeOpacity = { 0.5 } style = { styles.TouchableOpacityStyle}>
                    <Text style = { styles.TextStyle }>Lưu</Text>
                </TouchableOpacity>
                {
                  this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }

                <TouchableOpacity onPress={()=>this.cancelEdit()} activeOpacity = { 0.5 } style = { styles.TouchableOpacityStyle}>
                    <Text style = { styles.TextStyle }>Hủy</Text>
                </TouchableOpacity>
                {
                  this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }

              </View>
          </View>
      </View>
    );
  }
}

//----------------------------------------------------------------------------------
//STYLESHEET
//Khai bao style cua component
var styles = StyleSheet.create({
  comtainer : {
    flex: 1, 
    backgroundColor: 'powderblue',
  },

  //Text tieu de: Doi mat khau
  containerHeader:{
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 20,
  },

  headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
      fontFamily: "Times New Roman", //Doi font chu
  },

  //Phan nhap noi dung
  containerContent: {
    flex: 10,
    alignItems: 'center',
    margin: 20,
  },

//Chua 1 text + textInput
  containerTextAndTextInput: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginBottom: 15,
  },

  //TextInput
  TextInputStyleClass: {
    textAlign: 'center',
    height: 30,
    backgroundColor : "#fff",
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7 ,
    marginBottom: 20,
    width: '75%', 
    fontSize: 13,
    fontFamily: "Times New Roman", //Doi font chu
  },

   //Text hien thi loi nhac
   TextLoiNhac: {
    marginRight: 10,
    height: 30,
    width: '25%',
    fontSize: 13,
    fontWeight: '500',
    color: 'green',
    fontFamily: "Times New Roman", //Doi font chu
  },

  //Phan chua 2 button
   containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: 35,
  },

  TouchableOpacityStyle:
  {
     paddingTop:10,
     paddingBottom:10,
     backgroundColor:'#009688',
     marginBottom: 20,
     width: '50%',
     height: 40,
     marginLeft: 20,
   },

   TextStyle:
   {
      color: '#fff',
       textAlign: 'center',
       fontSize: 18,
       fontFamily: "Times New Roman", //Doi font chu
       fontWeight: '500',
   },

   ActivityIndicatorStyle:{
     
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     alignItems: 'center',
     justifyContent: 'center'
   
 }

});

 