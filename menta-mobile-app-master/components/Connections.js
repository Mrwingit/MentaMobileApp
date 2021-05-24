import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, ScrollView } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'

import { Button, ThemeProvider, Header, Avatar, ButtonGroup, Badge, Container, ListItem } from 'react-native-elements'


// import { getUser } from '../src/graphql/queries'

// import { getLocalUserId } from '../functions/async-storage'

import { getConnections } from '../functions/connect'



const Connections = props => {
  const [connectionsAsMentee, setConnectionsAsMentee] = useState(null);
  const [connectionsAsMentor, setConnectionsAsMentor] = useState(null);


  useEffect(() => {
    // console.log({props})
    handleGetUserData();
  }, [])

  const handleGetUserData = async () => {
    // const result = await getConnections();
    setConnectionsAsMentee(props.navigation.state.params.connections.connectionsAsMentee)
    setConnectionsAsMentor(props.navigation.state.params.connections.connectionsAsMentor)
  }

  return connectionsAsMentee && connectionsAsMentor && (
    <ScrollView >
     {connectionsAsMentee.map((item, num) => (
      <ListItem
      key={num}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={`${item.education} at ${item.school}`}
      leftAvatar={{ source: { uri: item.photoURL } }}
      bottomDivider
      onPress={() =>  props.navigation.navigate('ProfileView', {userViewing: item, pageRenderedFrom: 'Connections', userType: item.userTypeToCurrent })}
      // rightIcon={
      // <>
      // <Badge value={<Text>sent as {item.userTypeToCurrent}</Text>} />
      // </>}
      // badge={getBadgeValue(item.userTypeToCurrent)}
      chevron
    />
    ))
  }
  {connectionsAsMentor.map((item, num) => (
      <ListItem
      key={num}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={`${item.education} at ${item.school}`}
      leftAvatar={{ source: { uri: item.photoURL } }}
      bottomDivider
      onPress={() =>  props.navigation.navigate('ProfileView', {userViewing: item, pageRenderedFrom: 'Connections', userType: item.userTypeToCurrent })}
      // rightIcon={
      // <>
      // <Badge value={<Text>sent as {item.userTypeToCurrent}</Text>} />
      // </>}
      // badge={getBadgeValue(item.userTypeToCurrent)}
      chevron
    />
    ))
  }
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  page: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default Connections;