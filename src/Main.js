import React, { Component } from 'react';
import {  View, AsyncStorage,Text,StyleSheet,Modal,TextInput,Button,Alert,TouchableHighlight,Image} from 'react-native';
import axios from 'axios';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CreateUserModal from './components/CreateUserModal'
import PopupDialog ,{SlideAnimation} from 'react-native-popup-dialog';
import Register from './components/Register';
const remote = require('./assests/bg.png')
const logoImage = require('./assests/logo.png')

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });

export default class Main extends Component {
  
  constructor() {
    super()
    console.log('in constructor')

    this.state = {
      email: '',
      password: '',
      name: '',
      isLogged: false,
      currentMember: null,
      modalVisible: false,
      errorInput: false,
      registerMode: false,
    }
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }
  componentWillMount = () => {
    console.log('in cwm')
    AsyncStorage.getItem('isLogged').then((value)=>{
      console.log(value);
      if (value == 'true'){
        this.setState({isLogged:true})
      }else {
        this.setState({isLogged: false})
      }
    })
    let member = {}
    
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          console.log(key, value)
          member[key] = value

      });
      this.setState({currentMember: member});

     })
    })
}

  showSlideAnimationDialog = () => {
    console.log("hiddd")
    console.log(this.slideAnimationDialog)
    this.slideAnimationDialog.show()

  }
  onLogin = ()=>{
    this.loginRequest()
  }
  onSignout = ()=>{
    console.log('signout ')
    AsyncStorage.setItem('isLogged', 'false').then((val)=>{
      this.setState({isLogged: false})
    })
  }
  loginRequest = ()=>{
    var data = this.state;
    var url = 'http://18.218.39.178/api/user/auth/login'
        axios.post(url,data,{
           headers: {
              'Content-Type': 'application/json',
            }
          }).then((res)=>{
            this.setState({email:'',password:'',registerMode: false})
            this.saveToStorage(res.data)
          }).catch(error=>{
            this.setState({errorInput: true})
          console.log('errory' + error)
        });
  }
  onPasswordChange = (password)=> {
    this.setState({password,errorInput: false})
  }
  onEmailChange = (email)=> {
    this.setState({email,errorInput: false})
  }
  onNameChanged = (name)=> {
    this.setState({name,errorInput: false})
  }

  saveToStorage(data){
    AsyncStorage.setItem('isLogged', 'true').then((val)=>{
      this.setState({isLogged: true})
    })

    var values = [['user', JSON.stringify(data.id)], 
                  ['access_token', data.access_token],
                  ['first_name', data.first_name],
                  ['email',data.email],
                  ['city',data.city],
                  ['token_type',data.token_type]];

    AsyncStorage.multiSet(values, function(error) {
      console.log('finish')
      if(error) { 
        console.log('error saving')
      } else { 
        console.log('success saved')
      }
    });
  }

  onRegister = () => {
    var url = 'http://18.218.39.178/api/user'
    let data = this.state
    axios.post(url,data,{
       headers: {
          'Content-Type': 'application/json',
        }
      }).then((res)=>{
        this.setState({email:'',password:'',registerMode: false})
        
      }).catch(error=>{
        this.setState({errorInput: true})
      console.log('errory' + error)
    });
  }

  setRegisterMode = () => {
    this.setState({ registerMode: !this.state.registerMode, email: '', password: '' })
  }

  render() {
    // const slideAnimationDialog = new PopupDialog();
    const isLog = this.state.isLogged
    const { currentMember,email,password,name} = this.state 

    if (!currentMember) return null

    return (
      <View style = {styles.container}>
     
        
        <Image
          style={styles.stretch}
          source={remote}
        />
        <Image 
           style={styles.logo}
          source = {logoImage}/>

        {this.state.isLogged ==  false ?
          <View style = {styles.container}>
            {!this.state.registerMode ?
              <Login
                onLogin = {this.onLogin} 
                email = {email} 
                errorInput  = {this.state.errorInput}
                password={password} 
                setRegisterMode= {this.setRegisterMode}
                onEmailChange = {this.onEmailChange}s
                onPasswordChange = {this.onPasswordChange}
              />
              :
              <Register 
                onRegister={this.onRegister}
                setRegisterMode={this.setRegisterMode}
                email = {email} 
                name = {name}
                password={password}
                onNameChanged = {this.onNameChanged} 
                onEmailChange = {this.onEmailChange}s
                onPasswordChange = {this.onPasswordChange}
              />
            }
          </View>

        : 
         <Dashboard 
          currentMember = {currentMember} 
          onSignout = {this.onSignout}
          />
          }
        {/* <CreateUserModal 
           modalVisible = {this.state.modalVisible} 
           setModalVisible = {this.setModalVisible}/> */}
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    marginTop: 100,
    resizeMode: 'contain',

  },
  circle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    justifyContent: 'center',
  },
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center'
        },
    modal:{
      flex: 0.3,
      backgroundColor: 'red'
    },
    input: {
      width: '50%',
      margin: 20,
      height: 30,
      textAlign: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    subContainer: {
      flex: 1,
      width: '60%',
      height: 500,
      alignItems: 'center',    
      justifyContent: 'center'
        },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },dialogContentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });