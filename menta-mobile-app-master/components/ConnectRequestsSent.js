import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Group, FlatList } from 'react-native'
import { Tabs, Tab, Icon, } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ButtonGroup, Badge, Container, ListItem } from 'react-native-elements'


const ConnectRequestsSent = props => {

  const [requests, setRequests] = useState(null)

  useEffect(() => {
    handleGetRequests()
    // return () => {
    //   cleanup
    // };
  }, [])

  const handleGetRequests = async () => {
    // const result = await getMatchesForMentee();
    const result = props.navigation.state.params.requestsSent
    setRequests(result);
  }

  const getBadgeValue = (userType) => {
    if (userType === 'mentor') {
      return { 
        value: `sent as mentee`, 
        badgeStyle: { backgroundColor: '#7951A8', borderRadius: 5 }, 
        textStyle: { color: 'white' }, 
        containerStyle: {}, }
    } else {
      return { 
        value: `sent as mentor`, 
        badgeStyle: { backgroundColor: '#7AEB7A', borderRadius: 5 }, 
        textStyle: { color: 'white' }, 
        containerStyle: {}, }
    }
  } 

  return requests && (
    <>

      <View >
        {/* <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        /> */}
        {
    requests.map((item, num) => (
      <ListItem
      key={num}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={`${item.education} at ${item.school}`}
      leftAvatar={{ source: { uri: item.photoURL } }}
      bottomDivider
      onPress={() =>  props.navigation.navigate('ProfileView', {userViewing: item, pageRenderedFrom: 'ConnectRequestsSent', userType: item.userTypeToCurrent })}
      // rightIcon={
      // <>
      // <Badge value={<Text>sent as {item.userTypeToCurrent}</Text>} />
      // </>}
      badge={getBadgeValue(item.userTypeToCurrent)}
      chevron
    />
    ))
  }

{/* {
    requests.asMentee.map((item, num) => (
      <ListItem
      key={num}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={`${item.education} at ${item.school}`}
      leftAvatar={{ source: { uri: item.photoURL } }}
      bottomDivider
      onPress={() => props.setSelectedUser(item)}
      chevron
    />
    ))
  } */}
      </View>


    </>
  )
};

const styles = StyleSheet.create({
  buttonGroup: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    bottom: 35,
    flex: 1

  },
  page: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  }
});

export default ConnectRequestsSent;
