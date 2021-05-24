import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon, Button, Text } from 'react-native-elements'
import { Input } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';

const ForgotPassword = props => {

  const [verificaitonEmailSent, setVerificationEmailSent] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [resetError, setResetError] = useState('')
  const [codeText, setCodeText] = useState('');


  const [usernameText, setUsernameText] = useState('');
  const [newPasswordText, setNewPasswordText] = useState('');
  const [newConfirmPasswordText, setNewConfrimPasswordText] = useState('');

  const handleCognitoSendVerificationEmail = () => {
    // After retrieving the confirmation code from the user
    // setSendingEmail(true)
    Auth.forgotPassword(usernameText)
      .then(data => {
        console.log('data');
        setVerificationEmailSent(true);
      })
      .catch(err => {
        setSendingEmail(false)
        setEmailError(err.message)
        console.log('err')
      });
  };

  const handleCognitoSubmitNewPassword = (code, password) => {
    // After retrieving the confirmation code from the user
    Auth.forgotPasswordSubmit(usernameText, code, password)
      .then(data => {
        console.log('data');
        // setCurrentAuthDisplay("sign-in");
        props.navigation.navigate('SignIn')

      })
      .catch(err => {
        setResetError(err.message)
        console.log('err')
      }
      );
  };

  const submitNewPassword = () => {
    if (newPasswordText === newConfirmPasswordText) {
      handleCognitoSubmitNewPassword(codeText, newPasswordText)
    } else {
      setResetError('passwords do not match')
    }
  }


  return (
    <View style={styles.page}>

      <Text h4 h4Style={styles.title}>Forgot Password</Text>

      <Input
        onChangeText={(value) => setUsernameText(value)}
        value={usernameText}
        // ref={username}
        placeholder='email'
        autoCapitalize='none'
        editable={!verificaitonEmailSent}
        inputContainerStyle={styles.inputs}

      />

      <Text>{emailError}</Text>
      <Button
        onPress={() => handleCognitoSendVerificationEmail()}
        title="Verify & Reset Password"
        disabled={verificaitonEmailSent || usernameText === ''}
        buttonStyle={{
          marginTop: 5,
          height: 45,
          flexDirection: 'row',
          width: 220,
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

      />
      {verificaitonEmailSent && (
        <>
          <Input
            onChangeText={(value) => setCodeText(value)}
            value={codeText}
            // ref={password}
            placeholder='code from email'
            autoCapitalize='none'
            inputContainerStyle={styles.inputs}

          />
          <Input
            onChangeText={(value) => setNewPasswordText(value)}
            value={newPasswordText}
            // ref={password}
            placeholder='new password'
            autoCapitalize='none'
            secureTextEntry={true}
            inputContainerStyle={styles.inputs}


          />
          <Input
            onChangeText={(value) => setNewConfrimPasswordText(value)}
            value={newConfirmPasswordText}
            // ref={password}
            placeholder='confirm new password'
            autoCapitalize='none'
            secureTextEntry={true}
            inputContainerStyle={styles.inputs}


          />
          <Text>{resetError}</Text>

          <Button
            onPress={() => submitNewPassword()}
            title="Set New Password"
            buttonStyle={{
              marginTop: 5,
              height: 45,
              flexDirection: 'row',
              width: 220,
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
            disabled={codeText === '' || newPasswordText === '' || newConfirmPasswordText === ''}


          />
        </>
      )}



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
    color: '#7951A8',
    fontWeight: 'bold'
  },
  inputs: {
    margin: 20,
    marginBottom: 0
  }
});

export default ForgotPassword;