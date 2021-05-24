// import { Text, View, StyleSheet, Alert } from 'react-native'
// import { Tabs, Tab, Icon } from 'react-native-elements'
// import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'
// import { Ionicons } from '@expo/vector-icons'
import { Row, Col } from 'native-base';
import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import EditProfile from './EditProfile';
import { Overlay, Divider, Badge, Icon, TextInput, Button, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TagSelect } from 'react-native-tag-select';
import ProfileViewActionButton from './ProfileViewActionButton'

import { getCurrentUserData } from '../functions/amplify'
import { getLocalUserData } from '../functions/async-storage'

// const handleGetCurrentUserData = async () => {
//   const userId = await getLocalUserId();
//   console.log({userId})
//   const result = await getCurrentUserData(userId)
//   .then(data => {
//     return data
//   })
//   .catch(err => {
//     return err
//   });
//   console.log('this is it!', {result})
//   return result
//   // setCurrentUserData(result)
// }

const currentUserDataGlobal = getLocalUserData();


// const handleGetCurrentUserData = async () => {
//   console.log('here we go again... ', result)
//   setCurrentUserData(result)
// }

const Profile = props => {
  var interestsArray = ["Python", "Calculus", "C#", "Neural Networks", "Java", "Programming"];

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [tabsDisplayed, setTabsDisplayed] = useState(interestsArray);

  const [viewingUserData, setViewingUserData] = useState(null)
  const [textBox, setTextBox] = useState('');

  useEffect(() => {
    handleGetViewingUserData()
    return () => {

    };
  }, [])

  const handleGetViewingUserData = async () => {
    const result = props.navigation.state.params.userData
    // console.log('here we go again... ', result)
    setViewingUserData(result)
    setTabsDisplayed(result.interests)
  }

  // const getToEditProfilePage = () => { props.navigation.navigate('UpdateRegistration', { currentUserData, handleGetCurrentUserData }) };

  const goBack = async () => {
    props.navigation.navigate('ApproveMentors', {deletedUser: viewingUserData.id, deletedActionId: viewingUserData.actionId})
  }

  return viewingUserData && (
    <>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://www.lsu.edu/_resources/ldp/images/.private_ldp/a93313/production/master/8926b973-06a4-491d-9c34-b76ec46ec839.jpg' }}
            style={{ width: 450, height: 200 }}
          />
        </View>
        <Image style={styles.avatar} source={{ uri: viewingUserData.photoURL }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <View style={styles.SidebySide}>
              <Text style={styles.name}>{viewingUserData.firstName} {viewingUserData.lastName}</Text>
              {viewingUserData.mentor && <Image
                source={require('../assets/verifiedMentor.png')}
                style={{ width: 24, height: 24, alignSelf: 'center', marginLeft: 7 }}
              />}
            </View>
            <Text style={styles.info}>{viewingUserData.education} at {viewingUserData.school}</Text>
            <Text style={styles.description}>{viewingUserData.bio}</Text>
            <View style={styles.SidebySide}>
              <ProfileViewActionButton
                actionType={'positive'}
                pageRenderedFrom={'ApproveMentors'}
                // userType={props.navigation.state.params.userType}
                viewingUserData={viewingUserData}
                goBack={() => goBack()}
                gotoChat={() => props.navigation.navigate('Chats')}
                // gotoSubmitRequest={() => props.navigation.navigate('SubmitRequest', {
                //   userId: viewingUserData.id, 
                //   userType: props.navigation.state.params.userType, 
                //   actionId: viewingUserData.actionId,
                //   firstName: viewingUserData.firstName
                //  })}
              />
              <ProfileViewActionButton
                actionType={'negative'}
                // userType={props.navigation.state.params.userType}
                pageRenderedFrom={'ApproveMentors'}
                viewingUserData={viewingUserData}
                goBack={() => goBack()}
                gotoChat={() => props.navigation.navigate('Chats')}

              />
              
            </View>
                          

            <View> 
              <Card
              title={'Application'}
              titleStyle={{color: "#7951A8",}}
              containerStyle={{backgroundColor: '#f2eef6', borderRadius: 30}}
              >
            <Text style={styles.description}>{viewingUserData.otherVar}</Text>
            </Card>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.interestsTitle}>Interests</Text>
        </View>
        {/* <View style={{ marginLeft: 25, paddingTop: 10, borderTopColor: 'purple', borderTopWidth: 1, marginRight: 25 }}> */}
        <View style={{ marginLeft: 25, paddingTop: 10}}>

          <TagSelect
            data={tabsDisplayed}
            max={10}
          />
        </View>
      </ScrollView>
      {/* {
        overlayVisible && (
          <Overlay
            isVisible
            onBackdropPress={() => setOverlayVisible(false)}
          >
            <View>
              <TextInput
                // style={styles.textInputStyle}
                // multiline={true}
                // onChangeText={(text) => setTextBox(text)}
                disableFullscreenUI={false}
              />
            </View>
          </Overlay>
        )
      } */}
    </>
  );
}



const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#00BFFF",
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
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600'
  },
  body: {
    marginTop: 60,
  },
  bodyContent: {
    alignItems: 'center'
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  interestsTitle: {
    fontSize: 25,
    // color: "#696969",
    color: "#7951A8",
    marginTop: 7,
    fontWeight: "600",
    paddingTop: 5,
    alignSelf: 'center'
  },
  info: {
    fontSize: 16,
    color: "#7951A8",
    marginTop: 5,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 5,
    height: 45,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#7951A8",
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer2: {
    marginTop: 5,
    height: 45,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#7951A8",
  },
  interestList: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00BFFF",
    margin: 5
  },
  textInButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textInButton2: {
    color: '#7951A8',
    fontSize: 15,
    fontWeight: 'bold'
  },
  SidebySide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textInputStyle: {
    width: '80%',
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default Profile;






