import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon, Text } from 'react-native-elements'
import { Button, Input } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';



const SignUp = props => {
  // const [signUpConfrim, setAuthUser] = useState(null);

  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [passwordConfirmText, setPasswordConfirmText] = useState('');

  const [signUpError, setSignUpError] = useState('');

  useEffect(() => {
    // getAuthUser();

  })

  const handleSignUp = () => {
    if (passwordConfirmText === passwordText) {
      handleCognitoSignUp(usernameText, passwordText)
    }
    else {
      setSignUpError('passwords do not match')
    }
  }


  const handleCognitoSignUp = async (email, password) => {

    const signUpResult = await Auth.signUp({
      username: email,
      // email : email,
      password: password,
      attributes: {
        email: email,
      }
    })
      .then(data => {
        console.log("user signed up, data: ", data);
        handleSignUpComplete();
        // setUsername(email)
        // setCurrentAuthDisplay("sign-up-confirm");
      })
      .catch(err => {
        console.log("error putting user in congnito pool", err)
        if (err.code === "UsernameExistsException") {
          //email error
          setSignUpError(err.message)
        } else {
          setSignUpError(err.message)
        }
      }
      );
    return (signUpResult)
  };

  const handleSignUpComplete = async () => {
    await AsyncStorage.setItem('SignedUpUsername', usernameText);
    props.navigation.navigate('SignUpConfirm')
    // props.navigation.navigate(userId ? 'App' : 'Auth');
  }

  return (
    <View style={styles.page}>
      {/* <Image
        source={require('../assets/menta-logo.png')}
        style={{ width: 300, height: 100 }}
      /> */}
      <Text h4 h4Style={styles.title}>Create an Account</Text>

      <Input
        onChangeText={(value) => setUsernameText(value)}
        value={usernameText}
        // ref={username}
        placeholder='Email'
        autoCapitalize='none'
        inputContainerStyle={styles.inputs}
      />
      <Input
        onChangeText={(value) => setPasswordText(value)}
        value={passwordText}
        // ref={password}
        placeholder='Password'
        autoCapitalize='none'
        secureTextEntry={true}
        inputContainerStyle={styles.inputs}

      />
      
      <Input
        onChangeText={(value) => setPasswordConfirmText(value)}
        value={passwordConfirmText}
        // ref={password}
        placeholder='Confirm Password'
        secureTextEntry={true}
        inputContainerStyle={styles.inputs}


      />
      <Text>{signUpError}</Text>
      <Button
        onPress={() => handleSignUp()}
        title="Sign Up"
        autoCapitalize='none'
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
        disabled={usernameText === '' || passwordText === '' || passwordConfirmText === ''}
      />

      {}
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
  },
  titleForInputs: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10
  }
});

export default SignUp;