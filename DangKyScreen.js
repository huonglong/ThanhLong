import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ActivityIndicator,Alert} from 'react-native';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            pass:'',
            pas:'',
            ActivityIndicator_Loading: false, 
        }
    }

    //
    cancelAdd(){
        this.props.navigation.pop()
      }
      //
     
//
testField(){
    
    if(this.state.text.length < 6){
        Alert.alert("Thông báo!","Tên tài khoản tối thiểu 6 ký tự!");
        return
      }
   
    if(this.state.pass.length < 6){
        Alert.alert("Thông báo!","Mật khẩu tối thiểu 6 ký tự!");
        return
      }
      if(this.state.pas == ""){
        Alert.alert("Thông báo!","Mật khẩu xác nhận không được bỏ trống!");
        return
      }
      if(this.state.pass != this.state.pas){
        Alert.alert("Thông báo!","Mật khẩu và Mật khẩu xác nhận không giống nhau!");
        return
      }
      
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.235.2/API_Project/DangKy.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  username : this.state.text,
                  password : this.state.pass,
                })
 
            }).then((response) => response.json())
            .then((responseJson) => {
      
                if(responseJson == "successfully"){
                    Alert.alert("Thông báo", "Đăng ký thành công");
                    this.props.navigation.navigate('Login');
                }else{
                    Alert.alert("Thông báo","Tài khoản đã tồn tại!");
                    this.setState({ ActivityIndicator_Loading : false , text:'',pas:'',pass:''});      
                }
        
              })   
            .catch((error) =>
            {
                console.error(error);
    
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
      
          
      
}

  render() {
      //tham so đặt tiêu đề cho Giao diện: title =""
    return (
        
        <View style={styles.container}>
           
        <View  >
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Đăng Ký Tài Khoản</Text>
            </View>
           
            <Text style={styles.typetext}>Email/tên tài khoản:</Text>
            <TextInput
            style={styles.input}
            placeholder="Nhập tên tài khoản..."
            placeholderTextColor="black"
            autoCorrect={false}            
            onChangeText={(TextInputText)=>this.setState({text: TextInputText })}
            value={this.state.text}
            />
            
            <Text style={styles.typetext}>Mặt khẩu:</Text>
            <TextInput
            style={styles.input}
            placeholder="**********"
            placeholderTextColor="black"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(TextInputText)=>this.setState({pass: TextInputText })}
            value={this.state.pass}
            />
            
            <Text style={styles.typetext}>Xác nhận mật khẩu</Text>
            <TextInput
            style={styles.input}
             placeholder="*************"
             placeholderTextColor="black"
             autoCorrect={false}
             secureTextEntry={true}
             onChangeText={(TextInputText)=>this.setState({pas: TextInputText })}
             value={this.state.pas}
            />
            
        </View>
        <View style={styles.rowButtonLogin}>
                    <TouchableOpacity
                    onPress={()=>this.testField()}
                    >
                            <View style={styles.viewChucnang}>
                                <Text style={styles.btnChucnang}>Đăng ký</Text>
                            </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.cancelAdd()} activeOpacity = { 0.5 }
                    
                    >
                        <View style={styles.viewChucnang}>
                            <Text  style={styles.btnChucnang}>Hủy</Text>
                        </View>
                    </TouchableOpacity>
             </View>
             {
        
        this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
        
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    viewTitle:{
        backgroundColor:'rgb(0,111,0)',
        paddingBottom:10,
        paddingTop:10,
       marginBottom:10
    },
  container: {
    flex: 1,
    backgroundColor: 'rgb(237,233,227)',
  },
  typetext:{
    color:'rgb(0,111,0)',
    fontWeight: 'bold',
    fontFamily:'Times New Roman',
    marginLeft:10
}
  ,
  btnBack:{
      marginLeft:20,
      marginBottom:5,
      width:48,
      color:'blue',
      borderBottomColor:'blue',
      borderBottomWidth:1
  }
  ,
 
  title:{
    textAlign:'center',
    color:'white',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold'
   
  },
  input:{
      borderColor:'rgb(189,226,222)',
      borderWidth:2,
      margin:10,
      fontFamily:'Times New Roman',
      backgroundColor:'rgb(255,255,255)'
  },
  rowButtonLogin:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:300,
    paddingBottom:20,
    borderTopColor:'red',
    borderTopWidth:2,
    paddingTop:10,
    marginLeft:40,
    marginTop:20,  
},
btnChucnang:{
    fontFamily:'',
    fontWeight:'bold',
    color:'white',
    fontSize:20,
    fontFamily:'Times New Roman',
}
,
viewChucnang:{
    backgroundColor:'rgb(0,150,136)',
    width:130,
    height:40,
    alignItems:'center',
    padding:5,
   borderColor:'green',
   borderWidth:1,
   marginTop:20
},

});
