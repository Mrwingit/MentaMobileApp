import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Group, FlatList } from 'react-native'
import { Tabs, Tab, Icon, } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ButtonGroup, Container, ListItem } from 'react-native-elements'

import { listUsers } from '../src/graphql/queries'
import { getMatchesForMentee } from '../functions/connect';




const ConnectMatches = props => {

  const [matches, setMatches] = useState(null)

  useEffect(() => {
    handleGetMatches()
    // return () => {
    //   cleanup
    // };
  }, [])

  const handleGetMatches = async () => {
    // const result = await getMatchesForMentee();
    const result = props.navigation.state.params.matches
    setMatches(result);
  }


  const keyExtractor = (item, index) => index.toString()

  // const renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.name}
  //     subtitle={item.subtitle}
  //     leftAvatar={{ source: { uri: item.avatar_url } }}
  //     bottomDivider
  //     // onPress={() => props.setSelectedUser(item)}
  //     onPress={() =>  props.navigation.navigate('ProfileView')}
  //     chevron
  //   />
  // )
 
  return matches && (
    <>

      <View >
        {/* <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        /> */}
        {
    matches.map((item, num) => (
      <ListItem
      key={num}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={`${item.education} at ${item.school}`}
      leftAvatar={{ source: { uri: item.photoURL } }}
      bottomDivider
      // onPress={() => props.setSelectedUser(item)}
      onPress={() =>  props.navigation.navigate('ProfileView', {userViewing: item, pageRenderedFrom: 'ConnectMatches'})}
      chevron
    />
    ))
  }
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

export default ConnectMatches;
