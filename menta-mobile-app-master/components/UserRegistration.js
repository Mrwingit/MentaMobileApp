import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, TextInput } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';
import { Button, ThemeProvider, Header, Avatar, Input } from 'react-native-elements'
import { createUser, updateUser } from '../src/graphql/mutations'

import { getLocalUserId } from '../functions/async-storage'


import InterestPicker from './InterestPicker'


const UserRegistraiton = props => {
  const [localUserId, setLocalUserId] = useState('');

  const [firstName, setFirstName] = useState('Joe');
  const [lastName, setLastName] = useState('Burreaux');
  const [hometown, setHometown] = useState('Athens, Ohio');
  const [school, setSchool] = useState('LSU');
  const [bio, setBio] = useState('I am an American football player who plays for LSU Tigers football as a quarterback. I started my career by joining The Ohio State Buckeyes for 3 years and was provided redshirt as a true freshman in the 2015.');
  const [education, setEducation] = useState('Senior');

  useEffect(() => {
    getUserId();
  })

  const getUserId = async () => {
    const result = await getLocalUserId();
    setLocalUserId(result)
  }
 
  const handleRegisterUser = async () => {

    const input = {
      id: localUserId,
      firstName,
      lastName,
      school,
      email: props.navigation.state.params.email,
      admin: false,
      mentor: false,
      bio,
      education,
      hometown
    }

    console.log('test input:', {input})

    const result = await API.graphql(graphqlOperation(createUser, { input: input }))
      .then((data) => {
        console.log('USER CREATED:', data)
        return data
      })
      .catch((err) => {
        console.log('Error in creating user: ', err)
        return null
      })

    props.navigation.navigate('RegistrationInterests', {createUser: result.data.createUser})
  }



  return (
    <View style={styles.page}>
      
      <Text style={styles.titleForInputs}>First Name</Text>
      <Input
        onChangeText={(value) => setFirstName(value)}
        value={firstName}
        // ref={username}
        // autoCapitalize='none'
        inputContainerStyle={styles.inputs}

      />
      <Text style={styles.titleForInputs}>Last Name</Text>
      <Input
        onChangeText={(value) => setLastName(value)}
        value={lastName}
        // ref={username}
        // autoCapitalize='none'
        inputContainerStyle={styles.inputs}

      />
      <Text style={styles.titleForInputs}>Hometown</Text>
      <Input
        onChangeText={(value) => setHometown(value)}
        value={hometown}
        // ref={username}
        // autoCapitalize='none'
        inputContainerStyle={styles.inputs}

      />
<Text style={styles.titleForInputs}>School</Text>
      <Input
        onChangeText={(value) => setSchool(value)}
        value={school}
        // ref={username}
        // autoCapitalize='none'
        inputContainerStyle={styles.inputs}

      />
<Text style={styles.titleForInputs}>Level of Education or Position at University</Text>
      <Input
        onChangeText={(value) => setEducation(value)}
        value={education}
        // ref={username}
        // autoCapitalize='none'
        inputContainerStyle={styles.inputs}

      />
<Text style={styles.titleForInputs}>Bio</Text>
      <Input
        onChangeText={(value) => setBio(value)}
        value={bio}
        // ref={password}
        // autoCapitalize='none'
        // secureTextEntry={true}
        inputContainerStyle={styles.inputs}
        multiline
      />

      <Button
        title="Next Step"
        buttonStyle={{
          marginTop: 5,
          height: 45,
          flexDirection: 'row',
          width: 120,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 10,
          borderRadius: 30,
          backgroundColor: "#7951A8",
          marginLeft: 10,
          marginRight: 10,
        }}
        titleStyle={{
          color: 'white',
          fontSize: 15,
          fontWeight: 'bold'
        }}
        onPress={() => handleRegisterUser()}
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
  interestPicker: {
    justifyContent: 'flex-end',
    width: '90%',
    // height: 300,
    margin: 20,
  },
  titleForInputs: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10
  },
});

export default UserRegistraiton;