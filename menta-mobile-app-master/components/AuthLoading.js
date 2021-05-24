import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';

import { getLocalCognitoId, setLocalCognitoId, getLocalUserId, setLocalUserId } from '../functions/async-storage'

import { checkCognitoUser } from '../functions/amplify'



const AuthLoading = props => {
  // const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    getAuthUser();

  })

  const getAuthUser = async () => {

    const cognitoUser = await checkCognitoUser();

    if (cognitoUser) {
      // setLocalCognitoId(cognitoUser.attributes.sub).then(() => {
      //   props.navigation.navigate('App');
      // });
      setLocalUserId(cognitoUser.attributes.sub).then(() => {
         props.navigation.navigate('App');
      });

    } else {
      // setLocalCognitoId('not-authenticated').then(() => {
      //   props.navigation.navigate('Auth');
      // });
      props.navigation.navigate('Auth');
    }
  }

  return (
    <View style={styles.page}>
      <ActivityIndicator />
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

  }
});

export default AuthLoading;