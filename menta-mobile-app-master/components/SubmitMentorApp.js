import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';
import { Text, View, StyleSheet, AsyncStorage, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'
import { createMentorApplication } from '../src/graphql/mutations'

import { getLocalUserId, getLocalUserData } from '../functions/async-storage'



const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);



const SubmitMentorApp = props => {


    const [textBox, setTextBox] = useState('Heisman frontrunner. 12 - 0. 4,366 yards. 44 touchdown.');

    const handleOK = async () => {
        props.navigation.navigate('Menu')
    }

    const handleYesImDone = () => {
        handleSubmitApplicationToDB(textBox);
        Alert.alert('Congrats! You\'ve submitted your mentorship application, sit tight you\'ll be hearing from us soon.',
        '',
        [
            {
                text: 'OK', onPress: () => handleOK()
            }
        ])
    }

    const handleNoNotYet = () => {
        console.log('Not yet Pressed')
    }

    const handleSubmitApplicationToDB = async (text) => {

        const userId = await getLocalUserId();
   
        const input = {
          // id: props.navigation.state.params.userData.sub,
          mentorApplicationUserId: userId,
          text: text,
        }

        console.log('test input:', {input})
    
        const result = await API.graphql(graphqlOperation(createMentorApplication, { input }))
          .then((data) => {
            console.log('Mentor Application Created:', data)
            return data
          })
          .catch((err) => {
            console.log('Error in creating mentor applicaiton: ', err)
            return null
          })

          console.log({result})
      }

      

      const checkUserSignedIn = async () => {
        const cognitoUser = await Auth.currentAuthenticatedUser()
            .then((data) => {
                console.log(data)
                return data
            }) 
            .catch((err) => {
                console.log(err)
            })

        return cognitoUser;
      }

      checkUserSignedIn();
      
    

    return (
        <DismissKeyboard>
            <View style={styles.page}>
                <View>
                    <Text style={styles.titleStyle}>Tell us why you should be a mentor!</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.textInputStyle} 
                        multiline 
                        onChangeText={(text) => setTextBox(text)}
                    />
                </View>
                <View>
                    <Button 
                    buttonStyle={{
                        marginTop: 5,
                        height: 45,
                        flexDirection: 'row',
                        width: 90,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 10,
                        marginTop: 10,
                        alignSelf: 'center',
                        borderRadius: 30,
                        backgroundColor: "#7951A8",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                      titleStyle={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                      }} 
                    title="Submit"
                        onPress=
                        {() => Alert.alert(
                            'Submit Application',
                            'Is your application ready to submit?',
                            [
                                {
                                    text: 'No not yet',
                                    onPress: () => handleNoNotYet(),
                                    style: 'cancel',
                                },
                                {
                                    text: 'Yes, I\'m done',
                                    onPress: () => handleYesImDone(),
                                }
                            ],
                            { cancelable: false },
                        )}
                    />
                </View>
            </View>
        </DismissKeyboard>

    )
};

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        flex: 1
    },
    buttonStyle: {
        paddingTop: 10,
        width: '20%',
        alignSelf: 'center'
    },
    subtitle: {
        textAlign: 'center',
        color: 'gray',
        paddingBottom: 10
    },
    textInputStyle: {
        width: '80%',
        height: 150,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
        fontSize: 18,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'gray',
        alignSelf: 'center',
        paddingBottom: 15
    }
});

export default SubmitMentorApp;