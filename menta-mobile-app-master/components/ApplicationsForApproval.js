import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem } from 'react-native-elements'


const ApplicationsForApproval = props => {
  // const [selectedTab, setSelectedTab] = useState('profile');

  useEffect(() => {
    console.log(props.navigation.state.params.post.user.name)
    // console.log(props.navigation.state.params)
  })

  // const signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Auth');
  // };

  

  return (
    <View style={styles.page}>
      {/* <Avatar 
        rounded
        size="xlarge"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      /> */}
      <ListItem
      key={0}
      title={props.navigation.state.params.post.user.name}
      subtitle={props.navigation.state.params.post.text}
      leftAvatar={{ source: { uri: props.navigation.state.params.post.user.avatar_url } }}
      bottomDivider
      // onPress={() => props.setSelectedUser(item)}
    />
{
props.navigation.state.params.post.comments.map((item, num) => (
      <ListItem
      key={num}
      title={item.user.name}
      subtitle={item.text}
      leftAvatar={{ source: { uri: item.user.avatar_url } }}
      bottomDivider
      // onPress={() => props.setSelectedUser(item)}
    />
    ))
      
}
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    // margin: 'auto',
    // textAlign: 'center',
    // paddingTop: 50,
    // justifyContent: 'center', 
    // alignItems: 'center'
  }
});

export default ApplicationsForApproval;