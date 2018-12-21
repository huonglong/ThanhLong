import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View,FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import Vehicle from './Vehicle';//Hien thi thong tin 1 chiec xe

export default class TimKiemXe extends  React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
        };
    }
    
    componentDidMount(){
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
              BienSo: this.props.navigation.state.params.thamSoBienSo,
          })
  
      }).then((response) => response.json())
      .then((responseJson) => {
  
          if(responseJson != "wrong"){
            this.setState({
              isLoading: false,
               dataSource: responseJson,
            }, function(){
    
            });  
             
          }else{
             Alert.alert("Thông báo!", "Không tìm thấy thông tin bạn vừa nhập!");
          }
  
        })           
      .catch((error) =>
      {
          console.error(error);
  
          this.setState({ ActivityIndicator_Loading : false});
      });
    }
  
    //Sua thong tin xe
    editMotocycle(MaSP, TenSP, BienSo, MauXe, PhanKhoiXe, LoaiXe) {
        this.props.navigation.navigate('EditMotocycle', {thamsoMaSP: MaSP, thamSoTenSP: TenSP, thamSoBienSo: BienSo, thamSoMauXe: MauXe, thamSoPhanKhoi: PhanKhoiXe, thamSoLoaiXe: LoaiXe});
    }


     //Xu ly xoa du lieu
    deleteMotocycle(maSP){
        Alert.alert("Xác nhận!", "Bạn có chắc chắn muốn xóa dữ liệu?", [
        {text: "Hủy", onPress: ()=>console.log("Cancel tapped")},
        {text: "Đồng ý", onPress: ()=> this.deleteData(maSP)},
        ],
        {cancelable: false});
    }

    //Delete xe
    deleteData(MaSP){
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.235.2/API_Project/DeleteXe.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                    MaSP : MaSP
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

    
    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            );
          }
        return (
            <View style={styles.container}>
                <View  >
                    <View style={styles.groupTitle}>
                    {/* Tieu de */}
                        <View>
                            <Text style={styles.title}>KẾT QUẢ TÌM KIẾM</Text>
                        </View>
                    </View>
                </View>
               
               {/* Noi dung */}
                <View style={{flex: 1, paddingTop:20, }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => 
                        <View  style={styles.flatlist}>
                            {/* Noi dung xe */}
                            <View style ={styles.Vehicle}>
                                <Vehicle tenxe={item.TenSP} bienso={item.BienSo} mauxe={item.MauXe} xilanh={item.PhanKhoiXe} img={item.HinhAnh}/>
                            </View>
                            
                            {/* Button edit va delete */}
                            <View style={styles.appColumn}>
                                    <TouchableOpacity onPress={()=> this.editMotocycle(item.MaSP, item.TenSP, item.BienSo, item.MauXe, item.PhanKhoiXe, item.LoaiXe)}>
                                        <Image
                                        style={{width:30 ,height:30, margin: 7}}
                                        source={require('./images/edit.png')}/>
                                    </TouchableOpacity>        
                                

                                {/* Nut delete */}
                            
                                    <TouchableOpacity onPress={()=> this.deleteMotocycle(item.MaSP)} >
                                    <Image
                                        style={{width:30 ,height:30, margin: 7}}
                                        source={require('./images/delete.jpg')}/>
                                    </TouchableOpacity>
                               
                            </View>
                        </View>
                    }/>
                </View>
            </View>
        );
    }
}
//-----------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
    Vehicle: {
        width:'90%',
    },
    flatlist: {
        flexDirection: 'row',
        borderBottomColor:'grey',
        borderBottomWidth:1,
    },

      appColumn:{
          width: '10%',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',

      },

    container: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    groupSearch: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin:10
    },
    imgs: {
        width: 30,
        height:30
    },
    edtSearch: {
        borderColor: 'black',
        width:300,
        borderWidth:1,
        borderRadius:12,
       padding:2,
       backgroundColor:'white',
       fontFamily:'Times New Roman',
    },
    img: {
        width: 50,
        height: 50,
        marginLeft: 40,
    }
    ,
    groupTitle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'rgb(0,111,0)'
    },


    btnBack: {
        marginLeft: 10,
        marginBottom: 5,
        width:48,
        color: 'blue',
        fontFamily:'Times New Roman',
        borderBottomColor:'blue',
      borderBottomWidth:1
    }
    ,
  
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight:'bold',
        fontFamily:'Times New Roman',
        marginLeft:10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 20
    },
    rowButtonLogin: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,

        paddingBottom: 20,
        borderTopColor: 'red',
        borderTopWidth: 1,
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,

    },
    btnLogin: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 80,
        height: 30,
        alignItems: 'center',
        padding: 5,
        borderColor: 'green',
        borderWidth: 1
    },
    btnExit: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 80,
        height: 30,
        alignItems: 'center',
        padding: 5,
        borderColor: 'green',
        borderWidth: 1
    },
});
