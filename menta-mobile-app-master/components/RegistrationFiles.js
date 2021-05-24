import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, TextInput, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, Input, SearchBar } from 'react-native-elements'

import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { createMatchesFromMentors } from '../functions/connect'


import InterestPicker from './InterestPicker'

import { TagSelect } from 'react-native-tag-select';

const GENERIC_USER_ICON = 'https://icon-library.net/images/generic-user-icon/generic-user-icon-19.jpg';

import { getLocalUserId, setLocalUserData } from '../functions/async-storage'


const RegistrationFiles = props => {

  const [imageToUpload, setImageToUpload] = useState(null);
  const [imageFromDB, setImageFromDB] = useState('https://icon-library.net/images/generic-user-icon/generic-user-icon-19.jpg');
  const [loadingImage, setLoadingImage] = useState(false)

  const uploadToStorage = async (pathToImageFile) => {
    try {
      const response = await fetch(pathToImageFile)

      const blob = await response.blob()

      const userId = await getLocalUserId()

      Storage.put(`profile-${userId}.jpeg`, blob, {
        contentType: 'image/jpeg',
      }).then(data => {
        console.log('success!!!!!!!!');
        // console.log({data})
        Storage.get(`profile-${userId}.jpeg`).then(data => {
          console.log('photo is back!!!')
          // console.log({data})
          setImageFromDB(data);
          setLoadingImage(false)
        });
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  const _pickImage = async () => {
    setLoadingImage(true)
    await getPermissionAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);

    if (!result.cancelled) {
      setImageToUpload(result.uri);
      uploadToStorage(result.uri)
    }
  };

  const handleGotoApp = async () => {
    await setLocalUserData().then(async data => {
      await createMatchesFromMentors().then(data => {
        props.navigation.navigate('App');
      })
    });
  }

  return (
    <View style={styles.page}>
      <View>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              imageFromDB,
          }}
        />
      </View>

      <View style={styles.searchBarView}>
        <Button
          title="Upload Profile Picture"
          type="outline"
          buttonStyle={{
            marginTop: 5,
            height: 45,
            flexDirection: 'row',
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            borderRadius: 30,
            backgroundColor: "white",
            marginLeft: 10,
            marginRight: 10,
            borderWidth: 3,
            borderColor: "#7951A8",
          }}
          titleStyle={{
            color: '#7951A8',
            fontSize: 15,
            fontWeight: 'bold'
          }}
          onPress={() => _pickImage()}
          loading={loadingImage}
        // loadingStyle={styles.nextButton}
        />

        {/* </View> */}

        {/* <View style={styles.scrollView}> */}
        <Button
          title="Upload Resume"
          type="outline"
          buttonStyle={{
            marginTop: 5,
            height: 45,
            flexDirection: 'row',
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            borderRadius: 30,
            backgroundColor: "white",
            marginLeft: 10,
            marginRight: 10,
            borderWidth: 3,
            borderColor: "#7951A8",
          }}
          titleStyle={{
            color: '#7951A8',
            fontSize: 15,
            fontWeight: 'bold'
          }}
        />

        {/* </View> */}
        {/* <View style={styles.buttonView}> */}
        <Button
          title="Complete Registration"
          type="outline"
          buttonStyle={{
            marginTop: 5,
            height: 45,
            flexDirection: 'row',
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            borderRadius: 30,
            backgroundColor: "white",
            marginLeft: 10,
            marginRight: 10,
            borderWidth: 3,
            borderColor: "#7951A8",
          }}
          titleStyle={{
            color: '#7951A8',
            fontSize: 15,
            fontWeight: 'bold'
          }}
          onPress={() => handleGotoApp()}
        />
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'column',
    // flex: 1
    // margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  searchBar: {
    backgroundColor: 'white',
    margin: 10,
  },
  searchBarView: {
    marginTop: 30
  },
  scrollView: {
    margin: 'auto',
    textAlign: 'center',
    width: '90%',
    margin: 20,
    marginTop: 0,
    maxHeight: 500,
    minHeight: 500
  },
  labelSelected: {
    backgroundColor: '#7951A8'
  },
  itemSelected: {
    backgroundColor: '#7951A8',
    borderColor: '#7951A8',
  },
  nextButton: {
    borderColor: '#7951A8',
    alignSelf: 'center',
    // position: 'absolute',
    margin: 20,
    bottom: 35,
  },
  buttonView: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  nextButtonTitle: {
    color: '#7951A8',
  }
});

export default RegistrationFiles;