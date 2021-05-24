// import { Text, View, StyleSheet, Alert } from 'react-native'
// import { Tabs, Tab, Icon } from 'react-native-elements'
// import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'
// import { Ionicons } from '@expo/vector-icons'

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
import { Overlay, Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TagSelect } from 'react-native-tag-select';
import { Button, ThemeProvider, Header, Avatar, ButtonGroup, Badge, Container, ListItem } from 'react-native-elements'


// import { getCurrentUserData } from '../functions/amplify'
import { getLocalUserData } from '../functions/async-storage'

import ProfileViewActionButton from './ProfileViewActionButton'

// const handleGetViewingUserData = async () => {
//   const userId = await getLocalUserId();
//   console.log({userId})
//   const result = await getViewingUserData(userId)
//   .then(data => {
//     return data
//   })
//   .catch(err => {
//     return err
//   });
//   console.log('this is it!', {result})
//   return result
//   // setViewingUserData(result)
// }

// const viewingUserDataGlobal = getLocalUserData();


// const handleGetViewingUserData = async () => {
//   console.log('here we go again... ', result)
//   setViewingUserData(result)
// }

const Profile = props => {
  // var interestsArray = ["Python", "Calculus", "C#", "Neural Networks", "Java", "Programming"];

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [tabsDisplayed, setTabsDisplayed] = useState(null);

  const [viewingUserData, setViewingUserData] = useState(null)

  useEffect(() => {
    handleGetViewingUserData()
    return () => {

    };
  }, [])

  const goBack = async () => {
    props.navigation.navigate('Connect')
  }

  const handleGetViewingUserData = async () => {
    const result = props.navigation.state.params.userViewing
    setViewingUserData(result)
    setTabsDisplayed(result.interests)
  }

  const getToEditProfilePage = () => { props.navigation.navigate('UpdateRegistration', { viewingUserData, handleGetViewingUserData }) };

  


  return viewingUserData && (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.fox8live.com/resizer/iZozOIGRkpUD8QE9lWu6Yr0Rxgc=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/MH6PAX5KJNFQDI5R6FLZYLWNAM.jpg' }}
          style={{ width: 450, height: 200 }}
        />
      </View>
      <Image style={styles.avatar} source={{ uri: viewingUserData.photoURL }} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              {viewingUserData.mentor && <Badge value={<Text>Mentor</Text>} />}
              <Text style={styles.name}>{viewingUserData.firstName} {viewingUserData.lastName}</Text>
              <Text style={styles.info}>{viewingUserData.education} at {viewingUserData.school}</Text>
              <Text style={styles.description}>{viewingUserData.bio}</Text>
              
              <ProfileViewActionButton 
              actionType={'positive'} 
              pageRenderedFrom={props.navigation.state.params.pageRenderedFrom}
              userType={props.navigation.state.params.userType}
              viewingUserData={viewingUserData}
              goBack={() => goBack()}
              />
              <ProfileViewActionButton 
              actionType={'negative'} 
              userType={props.navigation.state.params.userType}
              pageRenderedFrom={props.navigation.state.params.pageRenderedFrom}
              viewingUserData={viewingUserData}
              goBack={() => goBack()}/>
            </View>
          </View>
          <View>
            <Text style={styles.interestsTitle}>              Interests               </Text>
            {/* <View
              style={{
                borderBottomColor: 'purple',
                borderBottomWidth: 1
              }}
            /> */}
          </View>
        </View>
        <Overlay
          height={410}
          isVisible={overlayVisible}

        >
          <EditProfile getToEditProfilePage={getToEditProfilePage} setOverlayVisible={setOverlayVisible} />

        </Overlay>
      </View>
      <View style={{ marginLeft: 25, paddingTop: 10, borderTopColor: 'purple', borderTopWidth: 1, marginRight: 25 }}>
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
    fontWeight: '600',
    alignSelf: 'center'
  },
  body: {
    marginTop: 30,
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
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    paddingTop: 10
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 5
  },
  buttonContainer: {
    marginTop: 5,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  interestList: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00BFFF",
    margin: 5
  }
});

export default Profile;






