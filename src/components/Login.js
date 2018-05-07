import React from 'react';
const circle = require('../assests/circle.png')

import { View, AsyncStorage,Text,StyleSheet,TextInput,Button,KeyboardAvoidingView,TouchableOpacity, Alert,Image  } from 'react-native';

const Login = ({onLogin,email,password,onPasswordChange,onEmailChange,setRegisterMode,errorInput}) => {
    const errorMessage = "אחד או יותר מהפרטים שהזנת שגויים * "
    return (
        <View style = {styles.subContainer}>

        <Text style={{ fontSize: 20 }}>כניסה</Text>
        
        <View style={styles.inputContainer}>
        <KeyboardAvoidingView style = {styles.inputContainer} behavior="padding" enabled>

          <TextInput underlineColorAndroid = 'black' style = {styles.input} placeholder= "כתובת מייל" value={email} onChangeText={email => onEmailChange(email)} />
          <TextInput underlineColorAndroid = 'black' secureTextEntry = {true} style = {styles.input} placeholder= "סיסמה"  value={password} onChangeText={password => onPasswordChange(password)} />
            { errorInput &&  <Text style={{color: 'red'}}> {errorMessage} </Text> }
          <TouchableOpacity disabled = {!password || !email ? true: false} style = { (!password || !email) ? styles.loginDisabled : styles.loginButton}
        onPress= {        
                 onLogin}>
               <Text style= {styles.buttonText}> התחבר</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress = {setRegisterMode} >
               <Text style= {styles.createUserText}> צור חשבון</Text>  
        </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      

    </View>  
    );

}

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    loginButton: {
      width: 100,
      height: 35,
      backgroundColor: '#c6c18f',
      justifyContent: 'center',
      borderRadius: 5,
      alignItems: 'center'
    },
    loginDisabled: {
      backgroundColor: '#dddbc5',
      width: 100,
      height: 35,
      justifyContent: 'center',
      borderRadius: 5,
      alignItems: 'center'
    },
    buttonText:{
        color: '#fff'

    },
    stretch: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      justifyContent: 'center',
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
        alignItems: 'center',    
        backgroundColor: '#FFF'
      },
      input: {
        width: '100%',
        margin: 20,
        height: 50,
        textAlign: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      },
      subContainer: {
        flex: 1,
        width: '60%',
        height: 250,
        alignItems: 'center',
        marginTop: 50
        },
        createUserText:{
            marginTop: 15
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
export default Login;

