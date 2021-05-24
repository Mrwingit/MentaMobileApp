import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, ListView } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem } from 'react-native-elements'
import { List } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { getLocalUserData } from '../functions/async-storage'


const Menu = props => {
  // const [selectedTab, setSelectedTab] = useState('profile');

  // useEffect(() => {
  //   // console.log({props})

  // })

  // const signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Auth');
  // };

  const [currentUserData, setCurrentUserData] = useState(null)

  useEffect(() => {
    handleGetCurrentUserData()
    return () => {
      
    };
  }, [])

  const handleGetCurrentUserData = async () => {
    const result = await getLocalUserData();
    console.log('here we go again... ', result)
    setCurrentUserData(result)
  }




  return currentUserData && (
    <View style={styles.page2}>
      {/* <Avatar 
        rounded
        size="xlarge"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      /> */}


      <ListItem
        title='Profile'
        subtitle='View Your Profile'
        // leftIcon={'ios-person'}
        bottomDivider
        leftAvatar={{ source: { uri: currentUserData.photoURL } }}
        // badge={{ value: 33, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        onPress={() => props.navigation.navigate('Profile')}
        chevron
      />

{/* <ListItem
        title='Connections'
        // subtitle='View Your Profile'
        leftIcon={{name: 'people', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        badge={{ value: 5, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        onPress={() => props.navigation.navigate('Connections')}
        chevron
      /> */}
{!currentUserData.mentor && (
<ListItem
        title='Submit Mentor Application'
        // subtitle='View Your Profile'
        leftIcon={{name: 'school', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        // badge={{ value: 33, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        onPress={() => props.navigation.navigate('SubmitMentorApp')}
        chevron
      />
      )}
{currentUserData.admin && (

<ListItem
        title='Approve Mentor Applications'
        // subtitle='View Your Profile'
        leftIcon={{name: 'check', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        // badge={{ value: 33, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        onPress={() => props.navigation.navigate('ApproveMentors')}
        chevron
      />
      )}

<ListItem
        title='Settings'
        // subtitle='View Your Profile'
        leftIcon={{name: 'settings', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        // badge={{ value: 5, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        // onPress={() => props.navigation.navigate('Settings')}
        // onPress={() => props.navigation.navigate('RegistrationInterests')}
        // onPress={() => props.navigation.navigate('RegistrationInterests')}

        chevron
      />
{currentUserData.admin && (

<ListItem
        title='Manage Admins'
        // subtitle='View Your Profile'
        leftIcon={{name: 'star', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        // badge={{ value: 5, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        onPress={() => props.navigation.navigate('ManageAdmins')}
        chevron
      />
      )}
{/* 
<ListItem
        title='Lottie Test'
        // subtitle='View Your Profile'
        leftIcon={{name: 'arrow-forward', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        // badge={{ value: 33, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        // onPress={() => handleSelectUser(item)}
        // chevron
        onPress={async () => {
          await AsyncStorage.clear();
          props.navigation.navigate('Lottie');
        }}
      /> */}



<ListItem
        title='Sign Out'
        // subtitle='View Your Profile'
        leftIcon={{name: 'arrow-forward', iconStyle: {color: '#7951A8'}}}
        bottomDivider
        // leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
        // badge={{ value: 33, badgeStyle: { backgroundColor: '#7951A8' }, textStyle: { color: 'white' }, containerStyle: {}, }}
        // onPress={() => handleSelectUser(item)}
        // chevron
        onPress={async () => {
          await AsyncStorage.clear();
          props.navigation.navigate('Auth');
        }}
      />

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
  },
  // page2: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  flex: 1
  // }
});

export default Menu;