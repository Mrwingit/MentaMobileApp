import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify, { Analytics } from "aws-amplify"
import API, { graphqlOperation } from '@aws-amplify/api';
import { withAuthenticator } from "aws-amplify-react-native"
import awsconfig from './aws-exports';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import MenuBar from './components/MenuBar'
import TabBar from './components/TabBar'
import Connect from './components/Connect'
import Feed from './components/Feed'
import Profile from './components/Profile'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

Amplify.configure(awsconfig);
API.configure(awsconfig);

Analytics.disable();

const loadAllAssests = [
  // Asset.loadAsync([
  //   require('../assets/images/logo.png'),
  // ]),
  Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('profile');
  const [resourcesLoading, setResourcesLoading] = useState(true)

  const loadResourcesAsync = async () => {
    var loadResources = await Promise.all(loadAllAssests)
      .then(() => {
        setResourcesLoading(false)
        return 'resources loaded'
      })
    return loadResources;
  };

  useEffect(() => {
    loadResourcesAsync();
  })

  return !resourcesLoading && (
    <>
      {/* <MenuBar currentPage={currentPage} /> */}

      {/* <View style={styles.pageContainer}>
        {currentPage === 'connect' && (
          <Connect />
        )}

        {currentPage === 'chat' && (
          <Chat />
        )}

        {currentPage === 'feed' && (
          <Feed />
        )}

        {currentPage === 'profile' && (
          <Profile />
        )}

      </View> */}

      <TabBar updateCurrentPageHandeler={setCurrentPage} currentPage={currentPage} />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageContainer: {
    marginBottom: 100
  }
});


export default App;