import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View,TextInput,TouchableOpacity, Image, Alert} from 'react-native';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            text:"",
            pass:"",
            kq:""
        }
    }

    //Dang nhap
    onPressLogin(tenTK, matKhau){
        fetch('http://192.168.235.2/API_Project/login.php',
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
                    password : this.state.pass
                         
                })
 
            }).then((response) => response.json())
            .then((responseJson) => {
      
                if(responseJson == "successfully"){
                    //Xoa text o ten tai khoan va password
                    this.setState({text: ''})
                    this.setState({pass: ''})
                    this.props.navigation.navigate('Home', {username: tenTK, password: matKhau})
                }else{
                   Alert.alert("Thông báo!", "Sai tài khoản hoặc mật khẩu! Vui lòng đăng nhập lại!");
                }
        
              })           
            .catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
    }

    //Dang ky
    register(){
        this.props.navigation.navigate('RegisterScreen')
    }

    render() {
        return (
          <View style={styles.app} >
                    <StatusBar hidden ={true}/>
                    <View style = {styles.imgLogo}>
                        <Image style={styles.imageStyle} source={require('./images/logo_team.png')}></Image>
                    </View>
    
                    {/* Hien thi tieu de  */}
                    <View style = {styles.header}>
                            <Text style = {styles.headerText}>ĐĂNG NHẬP</Text>
                     </View>
                
                <View style={styles.body}>
                    <Text style={styles.typetext}>Tên tài khoản: </Text>
                    <TextInput style={styles.input}
                            placeholder='Nhập tên tài khoản...'
                            placeholderTextColor='grey'
                            autoCorrect={false}
                            returnKeyType='next'
                            onChangeText={(text)=>this.setState({text})}
                            value={this.state.text}
                            />
                    <Text style={styles.typetext}>Mật khẩu: </Text>
                    <TextInput style={styles.input}
                            secureTextEntry
                            placeholder='Nhập mật khẩu...'
                            placeholderTextColor='grey'
                            autoCorrect={false}
                            returnKeyType='default'      
                            onChangeText={(pass)=>this.setState({pass})}
                            value={this.state.pass}
                            />
                </View>
            <View style={styles.rowButtonLogin}>
                    <TouchableOpacity
                    onPress={()=>{this.onPressLogin(this.state.text, this.state.pass)}}
                    > 
                        <View style={styles.viewChucnang}>                                                    
                            <Text style={styles.btnChucnang}>Đăng nhập</Text>                                                     
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.viewChucnang}>                                                   
                             <Text style={styles.btnChucnang}>Hủy</Text>                                            
                        </View>
                     </TouchableOpacity>
                 </View>

                 <View style={styles.viewLinkDK}>
                     <TouchableOpacity onPress={()=>this.register()}>
                         <Text style={{borderBottomWidth:1,borderBottomColor:'blue', }}>Đăng ký</Text>
                     </TouchableOpacity>
                 </View>
          </View>
        );
      }
    }

//----------------------------------------------------------------------------
const styles = StyleSheet.create({
    viewLinkDK:{
        alignItems:'center',
        flex: 1,
    },
    headerLogo:{
        alignItems:'center',
        flexDirection:'column', 
        textAlign:'center',
        marginTop:30,
        
    },
    imageStyle:{
        marginLeft: 20,
        width: '90%',
        height: '80%',
    },

    imgLogo: {
       flex: 2,
    },
    header:{
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor: 'green',
        marginTop: -12,
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: "Times New Roman", //Doi font chu
    },

    btnChucnang:{
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        color:'white',

    }
    ,
    body:{
        width: '100%',
        flex: 6,
         padding: 15,
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor: 'lightgray',
    }
    ,
    app:{
        flex:1,
        backgroundColor:'white'
    },
   
    input:{
        fontSize:20,
        height:40,
        backgroundColor:'rgba(255,255,255,0.3)',
        color:'black',
        width: '100%',
        borderRadius:15,
        paddingHorizontal:16,
        marginVertical:10,
        borderColor:'#7a42f4',
        borderWidth:1,
        fontFamily:'Times New Roman', 
        fontSize: 13,
    },
    typetext:{
        color:'rgb(0,111,0)',
        fontWeight: 'bold',
        fontFamily:'Times New Roman'
    }
    ,
    rowButtonLogin:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:300,
        margin: 30,
        paddingBottom:20,
        borderTopColor:'red',
        borderTopWidth:1,
        paddingTop:10
    },
    viewChucnang:{
        backgroundColor:'rgb(0,150,136)',
        width:90,
        height:30,
        alignItems:'center',
        padding:5,
       borderColor:'green',
       borderWidth:1,
      
    },
  });