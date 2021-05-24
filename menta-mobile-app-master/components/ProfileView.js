import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'


const ProfileView = props => {
  
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setUserData(props.navigation.state.params.userData)
  })

  return userData && (
    <>
      {/* <Button
        onPress={() => {
          props.setSelectedUser(null)
        }}
        icon={{
          name: "arrow-back",
          size: 15,
          color: "black"
        }}
      /> */}

      <View style={styles.page}>

        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              userData.avatar_url,
          }}
        />

        <Text>{userData.name}</Text>
        
      </View>

    </>
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

export default ProfileView;