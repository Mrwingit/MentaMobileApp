import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem } from 'react-native-elements'

import { listMentorApplications } from '../src/graphql/queries'
import { updateUser, deleteMentorApplication } from '../src/graphql/mutations'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { getCurrentUserData, getPhotoURL } from '../functions/amplify';


import { Promise } from 'bluebird'


const ApproveMentors = props => {

  const [potentialMentors, setPotentialMentors] = useState(null);

  useEffect(() => {
    getPotentialMentors();

  }, [])

  const getPotentialMentors = async () => {
    const result = await API.graphql(graphqlOperation(listMentorApplications, { limit: 1000 }))
      .then((data) => {
        console.log('Mentors gathered: ', { data })
        return data
      })
      .catch((err) => {
        console.log('error in sending message', err)
        return null
      })

      const promiseResult = await Promise.map(result.data.listMentorApplications.items, async (item) => {
        return getCurrentUserData(item.user.id, item.id, '', item.text)
      }).then((data) => {
        console.log("successfully got user data");
        return data
      }).catch((err) => {
        console.log('error creating matches: ', err)
        return null
      });


    setPotentialMentors(promiseResult)
    // console.log('is this null2?: ', {promiseResult})
  }


  return potentialMentors ? (
    potentialMentors.map((item, num) => (
      <ListItem
        key={num}
        title={`${item.firstName} ${item.lastName}`}
        subtitle={item.school}
        leftAvatar={{ source: { uri: item.photoURL } }}
        bottomDivider
        onPress={() => props.navigation.navigate('ProfileViewApproveMentors', { userData: item })}
        chevron
      />
    ))
  ) :
  <View style={{ margin: 'auto' }}>
    <ActivityIndicator style={{ paddingTop: 200 }} />
    {/* <Text>Loading Chats</Text> */}
  </View>
};

const styles = StyleSheet.create({
  page: {
    // margin: 'auto',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default ApproveMentors;