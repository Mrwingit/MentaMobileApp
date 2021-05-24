import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import { Text, View, StyleSheet, AsyncStorage, ScrollView, Alert, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem, SearchBar } from 'react-native-elements'
import { getUser, listUsers, listRequests } from '../src/graphql/queries'
import { updateUser } from '../src/graphql/mutations'

import { getCurrentUserData } from '../functions/amplify';

import { Promise } from 'bluebird'


const ManageAdmins = props => {
  const [users, setUsers] = useState(null);
  const [usersDisplayed, setUsersDisplayed] = useState(null);
  const [searchText, setSearchText] = useState('')
  const [loadingAdminUpdate, setLoadingAdminUpdate] = useState(false)

  useEffect(() => {
    handleGetUsers();
  }, [])

  const handleGetUsers = async () => {

    const resultDynamoDB = await API.graphql(graphqlOperation(listUsers, { limit: 1000 }))
      .then((data) => {
        // console.log('data from dynamo: ', { data })
        return data
      })
      .catch((err) => {
        console.log('error from dynamo: ', err)
        return 'no-image'
      })

    const resultPromise = await Promise.map(resultDynamoDB.data.listUsers.items, async (item) => {
      return getCurrentUserData(item.id, '', '')
    }).then((data) => {
      console.log("successfully got user data");
      return data
    }).catch((err) => {
      console.log('error creating matches: ', err)
      return null
    });
    const resultSort = await sortUsers(resultPromise)
    // return resultDynamoDB
    setUsers(resultSort)
    setUsersDisplayed(resultSort)
  }

  const makeUserAdmin = async (userId, adminValue) => {
    setLoadingAdminUpdate(true)
    const input = {
      id: userId,
      admin: adminValue
    }
    const resultDynamoDB = await API.graphql(graphqlOperation(updateUser, { input }))
      .then((data) => {
        console.log('successfully updated user to admin = ', adminValue)
        handleGetUsers();
        setLoadingAdminUpdate(false)
        return data
      })
      .catch((err) => {
        console.log('error from dynamo: ', err)
        setLoadingAdminUpdate(false)
        return 'no-image'
      })
      setLoadingAdminUpdate(false)

      return resultDynamoDB
  }

  const sortUsers = async (users) => {
    return users.sort((a, b) => {
      // if (a.admin && b.admin) {
      //   return 1
      // } else if (a.admin && !b.admin) {
      //   return -1
      // } else if (!a.admin && b.admin) {
      //   return 1
      // } else {
        return a.lastName <= b.lastName ? -1 : 1
      // }
    })
  }

  const filterUsers = async (searchTerm) => {
    setSearchText(searchTerm)
    const array = await users.filter(o => {
      const string = `${o.firstName} ${o.lastName}`
      return string.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setUsersDisplayed(array)
  }

  const getBadgeValue = (userIsAdmin) => {
    if (userIsAdmin) {
      return { 
        value: `    Remove    `, 
        badgeStyle: { backgroundColor: 'red', borderRadius: 5 }, 
        textStyle: { color: 'white' }, 
        containerStyle: {}, }
    } else {
      return { 
        value: ` Make Admin `, 
        badgeStyle: { backgroundColor: '#7951A8', borderRadius: 5 }, 
        textStyle: { color: 'white' }, 
        containerStyle: {}, }
    }
  } 

  return users && usersDisplayed ? (
    <>
      <View style={styles.searchBarView}>

        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => filterUsers(text)}
          value={searchText}
          lightTheme
          style={styles.searchBar}
          platform='ios'
          containerStyle={styles.searchBar}
        />

      </View>
      
      <ScrollView>
      <KeyboardAvoidingView>
        {usersDisplayed.map((item, num) => (
          <ListItem
            key={num}
            title={`${item.firstName} ${item.lastName}`}
            // subtitle={getSubtitle(item.messages.messages.items).text}
            badge={getBadgeValue(item.admin)}
            leftAvatar={{ source: { uri: item.photoURL, cache: 'default' } }}
            bottomDivider
            subtitleStyle={{ color: 'grey' }}
            // onPress={() => props.setSelectedUser(item)}
            // containerStyle={{ backgroundColor: item.admin ? '#E6E6FA' : 'white' }}
            onPress={() => {
              if (!item.admin) {
              Alert.alert(
                `Confirm User As Admin`,
                `Are you sure you want ${item.firstName} ${item.lastName} to be able to approve new mentors and admins?`,
                [
                  { text: 'Cancel', onPress: () => console.log('cancel pressed') },
                  { text: 'Make Admin', onPress: () => {
                    makeUserAdmin(item.id, true)
                  } },
                ],
                { cancelable: false },
              );
              } else {
                Alert.alert(
                  `Revoke Admin Privledges`,
                  `Are you sure you want revoke the ability of ${item.firstName} ${item.lastName} to be able to approve new mentors and admins?`,
                  [
                    { text: 'Cancle', onPress: () => console.log('cancel pressed') },
                    { text: 'Revoke', onPress: () => {
                      makeUserAdmin(item.id, false)
                    } },
                  ],
                  { cancelable: false },
                );
              }
            }
            }
          // chevron
          />
        ))}

</KeyboardAvoidingView>
      </ScrollView>
     
    </>
  ) :
    <View style={{ margin: 'auto' }}>
      <ActivityIndicator size='large' color='#7951A8' style={{ paddingTop: 350 }} />
      {/* <Text>Loading Chats</Text> */}
    </View>
};

const styles = StyleSheet.create({
  page: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'

  }, searchBar: {
    backgroundColor: 'white',
    margin: 10,
  },
});

export default ManageAdmins;