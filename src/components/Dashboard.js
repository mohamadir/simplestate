import React from 'react';
import {  View, AsyncStorage,Text,StyleSheet,TextInput,Button,Alert,Image   } from 'react-native';
                     /*()=> this.showSlideAnimationDialog()} */

const Dashboard = ({currentMember,onSignout}) => {

    return (
        <View style={styles.dashboardContainer}> 
          
            <View style =  {styles.userDetails}>
                <Text style = {styles.welcomeText}>welcome {currentMember.first_name}</Text> 
                <Text>{currentMember.email}</Text> 
            </View>

            <View >
                <Button title = "sign out" style={{marginTop: 100}} onPress= {       
                    onSignout}>  </Button> 
            </View>

        </View>
    );

}


const styles = StyleSheet.create({
    dashboardContainer:{
        width:'80%',
        height: 300,
        marginTop: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    welcomeText: {
        fontSize: 20
    },
    userDetails: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.4
        },
    loginButton: {
      width: 100,
      height: 70,
      backgroundColor: 'red'
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

export default Dashboard;

