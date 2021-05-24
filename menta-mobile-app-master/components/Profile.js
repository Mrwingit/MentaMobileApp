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
  Alert, RefreshControl, ScrollView
} from 'react-native';
import EditProfile from './EditProfile';
import { Overlay, Divider, Badge, Icon } from 'react-native-elements';
// import { ScrollView } from 'react-native-gesture-handler';
import { TagSelect } from 'react-native-tag-select';

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

  const [currentUserData, setCurrentUserData] = useState(null)
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    handleGetCurrentUserData()
    return () => {

    };
  }, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    handleGetCurrentUserData().then(() => setRefreshing(false));
  }, [refreshing]);



  const handleGetCurrentUserData = async () => {
    const result = await getLocalUserData();
    console.log('here we go again... ', result)
    setCurrentUserData(result)
    setTabsDisplayed(result.interests)
    return result
  }

  const getToEditProfilePage = () => { props.navigation.navigate('UpdateRegistration', { currentUserData, handleGetCurrentUserData }) };



  return currentUserData && (
    <ScrollView 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentConatinerStyle={styles.page}>
      <View style={styles.header}>
        <Image
          // source={{ uri: 'https://www.fox8live.com/resizer/iZozOIGRkpUD8QE9lWu6Yr0Rxgc=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/MH6PAX5KJNFQDI5R6FLZYLWNAM.jpg' }}
          source={{uri: 'https://www.lsu.edu/_resources/ldp/images/.private_ldp/a93313/production/master/8926b973-06a4-491d-9c34-b76ec46ec839.jpg'}}
          style={{ width: 450, height: 200 }}
        />
      </View>
      <Image style={styles.avatar} source={{ uri: currentUserData.photoURL }} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.SidebySide}>
            <Text style={styles.name}>{currentUserData.firstName} {currentUserData.lastName}</Text>
            {currentUserData.mentor && <Image
              source={require('../assets/verifiedMentor.png')}
              style={{ width: 24, height: 24, alignSelf: 'center', marginLeft: 7 }}
            />}
          </View>
          <Text style={styles.info}>{currentUserData.education} at {currentUserData.school}</Text>
          <Text style={styles.description}>{currentUserData.bio}</Text>
          <View style={styles.SidebySide}>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => {
                setOverlayVisible(true)

                console.log(currentUserData.photoURL)
              }}>
              <Text style={styles.textInButton}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2}
              onPress={() => {
                props.navigation.navigate('Resume', {name: `${currentUserData.firstName}`, fullname: `${currentUserData.firstName} ${currentUserData.lastName}`})
                // Alert.alert(
                //   'Resume',
                //   `View your resume?`,
                //   [
                //     { text: 'No', onPress: () => console.warn('NO Pressed'), style: 'cancel' },
                //     { text: 'Yes', onPress: () => console.warn('Resume Downloading') },
                //   ]
                // );
              }}>
              <Text style={styles.textInButton2}>View Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.interestsTitle}>Interests</Text>
      </View>
      <Overlay
        height={410}
        isVisible={overlayVisible}
        borderRadius={30}
      >
        <EditProfile getToEditProfilePage={getToEditProfilePage} setOverlayVisible={setOverlayVisible} gotoEditInterestsPage={() => props.navigation.navigate('UpdateInterests')} />

      </Overlay>
      <View style={{ marginLeft: 25, paddingTop: 5}}>
        {/* style={{ marginLeft: 25, paddingTop: 10, borderTopColor: '#7951A8', borderTopWidth: 1, marginRight: 25 }}> */}
        <TagSelect
          data={tabsDisplayed}
          max={10}
        />
      </View>
    </ScrollView>
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
    color: "#7951A8",
    marginTop: 7,
    fontWeight: "600",
    paddingTop: 5,
    paddingBottom: 5,
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
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 5,
    height: 45,
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: 5,
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
    justifyContent: 'space-around',
    marginTop: 10,
  }
});

export default Profile;






