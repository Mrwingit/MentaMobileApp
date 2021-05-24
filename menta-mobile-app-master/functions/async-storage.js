import { View, StyleSheet, AsyncStorage } from 'react-native'

import { getCurrentUserData } from './amplify'

export const setLocalUserId = async (id) => {
  const result = await AsyncStorage.setItem('UserId', id);
  return result;
}

export const getLocalUserId = async () => {
  const result = await AsyncStorage.getItem('UserId');
  return result
}

export const setLocalUserData = async () => {
  const userId = await getLocalUserId();
  const result = await getCurrentUserData(userId)
  .then(data => {
    return data
  })
  .catch(err => {
    return err
  });
  const resultStorage = await AsyncStorage.setItem('UserData', JSON.stringify(result));

  return resultStorage
}

export const getLocalUserData = async () => {
  const result = await AsyncStorage.getItem('UserData');
  // console.log('yoooooo', JSON.parse(result))
  return JSON.parse(result)
}

export const setLocalCognitoId = async (id) => {
  const result = await AsyncStorage.setItem('CognitoId', id);
  return result;
}

export const getLocalCognitoId = async () => {
  const result = await AsyncStorage.getItem('CognitoId');
  return result
}