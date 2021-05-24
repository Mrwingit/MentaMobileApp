import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native'
import { Tabs, Tab, Icon, Button } from 'react-native-elements'
import { Input, Image, Text } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';
import { getUser } from '../src/graphql/queries'
import { createUser } from '../src/graphql/mutations'

import Lottie from './Lottie'

import { setLocalUserId, setLocalUserData } from '../functions/async-storage'

import { createMatchesFromMentors } from '../functions/connect'

import { getThisUsersChatrooms } from '../functions/chat';


const SignIn = props => {
  // const [usernameText, setUsernameText] = useState('mail.wscott@gmail.com');
  // const [passwordText, setPasswordText] = useState('password');

  // const [usernameText, setUsernameText] = useState('d3111944@urhen.com');
  // const [passwordText, setPasswordText] = useState('menta123');

  // const [usernameText, setUsernameText] = useState('iandrepont@vinformatix.com');
  // const [passwordText, setPasswordText] = useState('password');

  const [usernameText, setUsernameText] = useState('wscot18@lsu.edu');
  const [passwordText, setPasswordText] = useState('password');

  // const [usernameText, setUsernameText] = useState('angu154@lsu.edu');
  // const [passwordText, setPasswordText] = useState('qqqqqqqqqq');  

  const [loadingToGetIntoApp, setLoadingToGetIntoApp] = useState(false)
  const [loadingSignIn, setLoadingSignIn] = useState(false)



  const [signInError, setSignInError] = useState('');

  useEffect(() => {
    // setUsernameText('')
    // setPasswordText('')
    // setSignInError('')
  })

  const handleCognitoSignIn = async (username, password) => {
    try {
      const user = await Auth.signIn(username, password)
        .then(data => {
          console.log(data.attributes)
          setLoadingSignIn(false)

          handleSignInToApp(data.attributes)
        }).catch(err => {
          setSignInError(err.message)
          setLoadingSignIn(false)
          console.log('setSignInError', err.message)
          if (err.code === 'UserNotConfirmedException') {
            //  setUsername(username)
            console.log('setUsername(username)')
            Auth.resendSignUp(username).then(() => {
              console.log('code resent successfully');
            }).catch(e => {
              console.log(e);
            });
            //  setCurrentAuthDisplay('sign-up-confirm')
            console.log('setCurrentAuthDisplay(\'sign-up-confirm\')')
            sendToConfrirmCode();
          }
          console.log(err)
        });
      //  logger.debug(user);
      if (
        user.challengeName === "SMS_MFA" ||
        user.challengeName === "SOFTWARE_TOKEN_MFA"
      ) {
        logger.debug("confirm user with " + user.challengeName);
        // this.changeState('confirmSignIn', user);
      } else if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        logger.debug("require new password", user.challengeParam);

        // this.changeState('requireNewPassword', user);
      } else if (user.challengeName === "MFA_SETUP") {
        logger.debug("TOTP setup", user.challengeParam);
        // this.changeState('TOTPSetup', user);
      } else {
        console.log("Attempting to checkContact");
        // this.checkContact(user);
      }
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        logger.debug("the user is not confirmed");
        // this.changeState('confirmSignUp', {username});
      } else if (err.code === "PasswordResetRequiredException") {
        logger.debug("the user requires a new password");
        // this.changeState('forgotPassword', {username});
      } else {
        console.log("Error from walter: ", err);
        // this.error(err);
      }
    } finally {
      // setLoading(false);
      // getUserData();
      //  return user;
    }
  };

  const sendToConfrirmCode = async () => {
    // await AsyncStorage.setItem('SignedUpUsername', usernameText)
    //   .then(() => {
    //     props.navigation.navigate('SignUpConfirm', { usernameText })
    //   });
    props.navigation.navigate('SignUpConfirm', { usernameText })
  }

  const signInAsync = async () => {
    setLoadingSignIn(true)

    const userId = await handleCognitoSignIn(usernameText, passwordText);
    return userId;
  };

  const handleSignInToApp = async (userData) => {
    setLoadingToGetIntoApp(true)
    console.log({ userData })

    // await AsyncStorage.setItem('userId', userData.sub);
    setLocalUserId(userData.sub)

    const result = await API.graphql(graphqlOperation(getUser, { id: userData.sub }))
      .then((data) => {
        return data
      })
      .catch((err) => {
        return null
      })
    console.log({ result })

    // check user exists
    if (!result.data.getUser) {
      props.navigation.navigate('UserRegistration', { email: userData.email });
    } else {
      await setLocalUserData().then(async data => {
        await createMatchesFromMentors().then(async data => {
          // await handleGettingThisUsersChatrooms().then(data => {
            setLoadingToGetIntoApp(false)
            props.navigation.navigate('App');
          })
          
        // })
      });
    }

  }

  const handleGettingThisUsersChatrooms = async () => {
    const result = await getThisUsersChatrooms();
    // console.log('CHATS: ', {result})
    const sortResult = await sortChatrooms(result)
    // setChatrooms(sortResult)
    const result2 = await AsyncStorage.setItem('InitaialChat', JSON.stringify(sortResult));
    console.log({result2})
    return result2
  }



  const sortChatrooms = async (chatrooms) => {
    const result = await chatrooms.sort((a, b) => {
      var aItems = a.messages.messages.items
      var bItems = b.messages.messages.items
      // console.log({bItems})
      aItems = aItems.sort((c, d) => {
        return (c.createdAt <= d.createdAt) ? 1 : -1
      })
      bItems = bItems.sort((c, d) => {
        return (c.createdAt <= d.createdAt) ? 1 : -1
      })
      if (aItems.length === 0 && bItems.length !== 0) {
        return 1
      } else if (aItems.length !== 0 && bItems.length === 0) {
        return -1
      } else if (aItems.length === 0 && bItems.length === 0) {
        return 1
      } else {
        console.log('items A: ', aItems[0].text, '<=', bItems[0].text)

        return aItems[0].createdAt <= bItems[0].createdAt ? 1 : -1
      }
    })
    return result;
  }


  return !loadingToGetIntoApp ? (
    <View style={styles.page}>

      <Image
        source={require('../assets/menta-log.png')}
        style={{ width: 300, height: 100 }}
        PlaceholderContent={<ActivityIndicator />}
        // placeholderStyle={{color}}

      />
      <Text h4 h4Style={styles.title}>Welcome to Menta!</Text>

      {/* <View style={styles.inputs}> */}
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
      {/* </View> */}

      <Text>{signInError}</Text>
      <View style={styles.buttons}>
        <Button
          onPress={() => props.navigation.navigate('SignUp')}
          title="Sign Up"
          type="clear"
          titleStyle={{
            color: '#7951A8',
            fontSize: 15,
            fontWeight: 'bold'
          }}
          buttonStyle={{ margin: 10 }}

        />
        <Button
          onPress={() => props.navigation.navigate('ForgotPassword')}
          title="Forgot Password"
          type="clear"
          titleStyle={{
            color: '#7951A8',
            fontSize: 15,
            fontWeight: 'bold'
          }}
          buttonStyle={{ margin: 10 }}

        />
        <Button
          onPress={() => signInAsync()}
          title="Sign In"
          buttonStyle={{
            marginTop: 5,
            height: 45,
            flexDirection: 'row',
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            borderRadius: 30,
            backgroundColor: "#7951A8",
            marginLeft: 10,
            marginRight: 10,
            //borderWidth: 3,
            borderColor: "#7951A8",
          }}
          titleStyle={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold'
          }}
          disabled={usernameText === '' || passwordText === ''}
          loading={loadingSignIn}
          loadingStyle={{ paddingLeft: 17, paddingRight: 17 }}
        />

      </View>


    </View>
  ) : (
      // <View style={{ margin: 'auto' }}>
      //   <ActivityIndicator size='large' color='#7951A8' style={{ paddingTop: 350 }} />
      // </View>
      <Lottie/>
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
  buttons: {
    flexDirection: 'row',

  },
  title: {
    color: '#7951A8',
            fontSize: 27,
            fontWeight: 'bold'
  },
  inputs: {
    margin: 20,
    marginBottom: 0
  }
});

export default SignIn;