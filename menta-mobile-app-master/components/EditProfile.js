import React, { Component, useState, useEffect } from 'react';
import { Overlay, Button, Input } from 'react-native-elements';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { getLocalUserId } from '../functions/async-storage'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Row, Col } from 'native-base';
import { getCurrentUserData } from '../functions/amplify';
import { getLocalUserData } from '../functions/async-storage'



const EditProfile = props => {
  const [imageToUpload, setImageToUpload] = useState(null);
  const [imageFromDB, setImageFromDB] = useState(null);


  useEffect(() => {
    return () => {

    };
  }, [])

  const uploadToStorage = async pathToImageFile => {
    try {
      const response = await fetch(pathToImageFile)

      const blob = await response.blob()

      const userId = await getLocalUserId()

      Storage.put(`profile-${userId}.jpeg`, blob, {
        contentType: 'image/jpeg',
      }).then(data => {
        console.log('success!!!!!!!!');
        // console.log({data})
        Storage.get('walters-profile2.jpeg').then(data => {
          console.log('photo is back!!!')
          // console.log({data})
          setImageFromDB(data);
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




  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* {imageToUpload &&
          <Image source={{ uri: imageToUpload }} style={{ width: 200, height: 200 }} />} */}
      {/* {imageFromDB &&
        <Image source={{ uri: imageFromDB }} style={{ width: 200, height: 200 }} />} */}
      <View style={{ alignSelf: 'center' }}>
        <Text style={styles.name}>Edit Profile</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={async () => {
            // props.setOverlayVisible(false)
            _pickImage(),
            await setLocalUserData().then(() => {
              props.navigation.state.params.handleGetCurrentUserData(),
                props.navigation.navigate('Profile', { result })
            })
          }}>
          <Text style={styles.buttonText}>Edit Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => {
            props.getToEditProfilePage();
            props.setOverlayVisible(false);
          }}>
          <Text style={styles.buttonText}>Edit Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => {
            props.setOverlayVisible(false)
          }}>
          <Text style={styles.buttonText}>Upload Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => {
            props.setOverlayVisible(false)
            props.gotoEditInterestsPage()
          }}>
          <Text style={styles.buttonText}>Add/Change Interests</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Row>
          <Col>
            <View>
              <TouchableOpacity style={styles.buttonContainer}
                onPress={() => {
                  props.setOverlayVisible(false)
                }}>
                <Text style={styles.buttonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </Col>
          <Col>
            <View>
              <TouchableOpacity style={styles.buttonContainer}
                onPress={() => {
                  props.setOverlayVisible(false)
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>

      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    alignSelf: 'center'
  },
  buttonContainer: {
    marginTop: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 30,
    backgroundColor: "#7951A8",
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  inputs: {
  }
});

export default EditProfile;