import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, Input, Text } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';



const SignUpConfirm = props => {
  const [signedUpUserName, setSignedUpUsername] = useState('');

  const [codeText, setCodeText] = useState('');


  const [codeError, setCodeError] = useState('');

  const getSignedUpUsername = async () => {
    const username = await AsyncStorage.getItem('SignedUpUsername');
    console.log({username})
    setSignedUpUsername(username)
  }

  useEffect(() => {
    // getAuthUser();
        // const userId = await AsyncStorage.getItem('userId');
        getSignedUpUsername();

  })

  const handleSignUp = () => {
    handleCognitoConfirmCode(codeText)
  }

  const handleCognitoConfirmCode = async code => {

    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(signedUpUserName, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    })
      .then(data => {
        // console.log(data);
        handleCodeConfirmed()
        // setUserJustSignedUp(true)
      })
      .catch(err => {
        console.log(err)
        setCodeError(err.message)
      });
  };

  const handleCodeConfirmed = () => {
    props.navigation.navigate('SignIn')
  }

  return (
    <View style={styles.page}>

<Text h4 h4Style={styles.title}>Enter Verification Code</Text>

      <Input
        onChangeText={(value) => setCodeText(value)}
        value={codeText}
        // ref={username}
        placeholder='Code From Email'
        autoCapitalize='none'
        inputContainerStyle={styles.inputs}


      />

      <Text>{codeError}</Text>
      <Button
        onPress={() => handleSignUp()}
        title="Sign Up"
        buttonStyle={{
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
        }}
        titleStyle={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold'
        }}
        disabled={codeText === ''}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    color:'#7951A8' 
  },
  inputs: {
    margin: 20,
    marginBottom: 0
  }
});

export default SignUpConfirm;