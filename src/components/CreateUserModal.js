import React from 'react';
import { View, AsyncStorage,Text,StyleSheet,TextInput,Button,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight, Modal,Alert,Image  } from 'react-native';

const CreateUserModal = ({setModalVisible,modalVisible}) => {
    return (
        <View style = {styles.inputContainer}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View >
                    <View >
                    <Text>Hello Worasdld!</Text>

                    <TouchableHighlight
                        onPress={
                            setModalVisible(!modalVisible)
                        }
                           >
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                </Modal>
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
export default CreateUserModal;

