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

import { sendRequest, addConnection } from '../functions/connect'

const SubmitMentorApp = props => {

    const [textBox, setTextBox] = useState('Hello Ian! I feel like we have a lot of the same interests and we can learn a lot from each other. Looking forward to being able to connect with you!');

    const handleOK = async () => {
        props.navigation.navigate('Menu')
    }

    const handleYesImDone = () => {
        handleSubmitRequestToDB(textBox);
        // Alert.alert('Request Sent!',
        // '',
        // [
        //     {
        //         text: 'OK', onPress: () => props.navigation.state.params('Connect')
        //     }
        // ])
    }

    const handleNoNotYet = () => {
        console.log('Not yet Pressed')
    }

    const handleSubmitRequestToDB = async (text) => {

        // const userId = await getLocalUserId();

        await sendRequest(props.navigation.state.params.userId,
            props.navigation.state.params.userType,
            props.navigation.state.params.actionId,
            textBox).then(() => {
                Alert.alert('Request Sent!',
                    '',
                    [
                        {
                            text: 'OK', onPress: () => props.navigation.navigate('Connect')
                        }
                    ])
            })

        // const input = {
        //   // id: props.navigation.state.params.userData.sub,
        //   mentorApplicationUserId: userId,
        //   text: text,
        // }

        // console.log('test input:', {input})

        // const result = await API.graphql(graphqlOperation(createMentorApplication, { input }))
        //   .then((data) => {
        //     console.log('Mentor Application Created:', data)
        //     return data
        //   })
        //   .catch((err) => {
        //     console.log('Error in creating mentor applicaiton: ', err)
        //     return null
        //   })

        //   console.log({result})
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
                    <Text style={styles.titleStyle}>Why do you want to connect with this mentor? </Text>
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
                    title="Submit"
                        buttonStyle={styles.buttonStyle}
                        titleStyle={{
                            color: 'white',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                        onPress=
                        {() => Alert.alert(
                            'Submit Request',
                            'Ready to submit? This cannot be undone.',
                            [
                                {
                                    text: 'Cancel',
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
        //flex: 1
    },
    buttonStyle: {
        marginTop: 5,
        height: 45,
        flexDirection: 'row',
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 30,
        backgroundColor: "#7951A8",
        marginLeft: 10,
        marginRight: 10,
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
        fontSize: 25,
        color: 'gray',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        paddingBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default SubmitMentorApp;