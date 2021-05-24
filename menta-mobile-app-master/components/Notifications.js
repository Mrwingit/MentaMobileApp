import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'


const Profile = props => {
  // const [selectedTab, setSelectedTab] = useState('profile');

  useEffect(() => {
    console.log({props})
    
  })

  // const signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Auth');
  // };

  

  return (
    <View style={styles.page}>
      <Avatar 
        rounded
        size="xlarge"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
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

  }
});

export default Profile;