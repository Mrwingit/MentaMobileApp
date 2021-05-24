import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Alert, Keyboard, TouchableWithoutFeedback, ScrollView, WebView, Linking } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, Input, Image, SocialIcon, Card, ListItem } from 'react-native-elements'
import { createMentorApplication } from '../src/graphql/mutations'
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { uploadFeedPhotoToStorage, addNewPost, addNewComment } from '../functions/post'
import { set } from 'date-fns/esm';

const uuidv4 = require('uuid/v4');
import YouTube from 'react-native-youtube';

import LinkPreview from 'link-preview-js';


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const FeedCommentPost = props => {

  const [inputText, setInputText] = useState('');

  const [thisPostId, setThisPostId] = useState(null)
  // const [photoUploaded, setPhotoUploaded] = useState(false)

  const [loadingUploadPhoto, setLoadingUploadPhoto] = useState(false)


  const [showLinkInput, setShowLinkInput] = useState(false)
  const [linkURL, setLinkURL] = useState(null)

  const [linkPreview, setLinkPreview] = useState(null)

  const [photoUploaded, setPhotoUploaded] = useState(null)

  const handleAddNewComment = async () => {
    const result = await addNewComment(inputText, props.navigation.state.params.postId) 
      .then((data) => {
        props.navigation.navigate('FeedComment')
        return data
      })
      .catch((err) => {
        console.log('error in result', error)
      })
    return result
  }

  //(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?


  const handleUpdateInputText = (text) => {
    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    var regex = new RegExp(expression);
    var found = text.match(regex);
    if (found) {
      setLinkURL(found[0])
      console.log('link found!', found[0])
      getIt()
    }
    setInputText(text)
  }

  const getIt = async () => {
    const it = await LinkPreview.getPreview(linkURL)
      .then(data => data);
    console.log(it)
    setLinkPreview(it)
    return it.image
  }

  const handleLinking = async (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
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
      // setImageToUpload(result.uri);
      return result.uri
    }
  };

  return (
    <DismissKeyboard>
      <ScrollView style={styles.page}>
        <View>
          {/* <Text style={styles.titleStyle}>
            What's on your Mind?
                    </Text> */}
        </View>

        <View>
          <Input

            inputContainerStyle={{ margin: 20 }}
            label={'What\'s on your mind?'}
            // style={styles.textInputStyle}
            // placeholder='Body'
            multiline
            onChangeText={(text) => handleUpdateInputText(text)}

          />
        </View>




        <View>


          {linkPreview && (
            <>
            <Card
            title={'Link For Post'}
            
            image={{uri: linkPreview.images[0] || linkPreview.favicons[0]}}
            imageStyle={{width: 300, height: 175}}>
              <ListItem
              title={linkPreview.title}
              subtitle={linkPreview.siteName}
              subtitleStyle={{color: 'grey'}}
              rightIcon={
                <Icon
                  type='ionicon'
                  name={linkPreview.mediaType === 'video' ? 'logo-youtube' : 'ios-link'}
                  size={24}
                  color='#7951A8'
                  containerStyle={{ marginRight: 15 }}
                  onPress={() => handleLinking(linkURL)}
                />
              }
              />
              </Card>
            </>
          )
          }




          {/* {photoUploaded ? (
            <>
              <View style={{ alignContent: 'center' }}>
              <Card
            title={'Your Photo'}
            // subtitle={linkPreview.siteName}
            image={{uri: photoUploaded}}
            imageStyle={{width: 300, height: 175}}>
              
              </Card>
              
                <Button
                  onPress={() => handleUploadPhoto()}
                  title="Photo Uploaded"
                  buttonStyle={{ margin: 10 }}
                  // disabled={usernameText === '' || passwordText === ''}
                  loading={loadingUploadPhoto}
                  loadingStyle={{ paddingLeft: 17, paddingRight: 17 }}
                  type='clear'
                  titleStyle={{ color: '#7951A8', }}
                />
              </View>
            </>
          ) : (
              <Button
                onPress={() => handleUploadPhoto()}
                title="Upload Photo"
                buttonStyle={{ margin: 10 }}
                // disabled={usernameText === '' || passwordText === ''}
                loading={loadingUploadPhoto}
                loadingStyle={{ paddingLeft: 17, paddingRight: 17 }}
                type='clear'
                titleStyle={{ color: '#7951A8', }}

              />
            )
          } */}







        </View>

        <Button

          onPress={() => handleAddNewComment()}
          title="Post Comment"
          buttonStyle={{ backgroundColor: '#7951A8', margin: 10 }}

        />
      </ScrollView>
    </DismissKeyboard>

  )

};

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    flex: 1
  },

  subtitle: {
    textAlign: 'center',
    color: 'gray',
    paddingBottom: 10
  },

  textInputStyle: {
    // width: '80%',
    // height: 150,
    borderColor: '#7951A8',
    borderWidth: 1,
    // alignSelf: 'center',
    fontSize: 18,

  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'gray',
    alignSelf: 'center',
    paddingBottom: 20
  }
});

export default FeedCommentPost;