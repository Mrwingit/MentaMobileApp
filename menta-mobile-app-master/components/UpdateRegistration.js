import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, TextInput, Alert } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache } from 'aws-amplify';
import { Button, ThemeProvider, Header, Avatar, Input } from 'react-native-elements'
import { createUser, updateUser } from '../src/graphql/mutations'

import { getLocalUserId, setLocalUserData } from '../functions/async-storage'


import InterestPicker from './InterestPicker'
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const UserRegistraiton = props => {
  const [localUserId, setLocalUserId] = useState('');

  const [firstName, setFirstName] = useState(props.navigation.state.params.currentUserData.firstName);
  const [lastName, setLastName] = useState(props.navigation.state.params.currentUserData.lastName);
  const [hometown, setHometown] = useState(props.navigation.state.params.currentUserData.hometown);
  const [school, setSchool] = useState(props.navigation.state.params.currentUserData.school);
  const [bio, setBio] = useState(props.navigation.state.params.currentUserData.bio);
  const [education, setEducation] = useState(props.navigation.state.params.currentUserData.education);

  const [formCheckecOnce, setFormCheckedOnce] = useState(false)

  useEffect(() => {
    getUserId();
  })

  const getUserId = async () => {
    const result = await getLocalUserId();
    setLocalUserId(result)
  }


  const handleUpdateUser = async () => {

    const input = {
      id: localUserId,
      firstName,
      lastName,
      school,
      // email: props.navigation.state.params.email,
      // admin: false,
      // mentor: false,
      bio,
      education,
      hometown
    }

    console.log('test input:', { input })

    const result = await API.graphql(graphqlOperation(updateUser, { input: input }))
      .then((data) => {
        console.log('USER UPDATED:', data)
        return data
      })
      .catch((err) => {
        console.log('Error in updating user: ', err)
        return null
      })

    await setLocalUserData().then(() => {
      props.navigation.state.params.handleGetCurrentUserData(),
        props.navigation.navigate('Profile', { result })
    })
  }

  const checkValidation = () => {
    if (firstName.length === 0 || lastName.length === 0 || hometown.length === 0 || school.length === 0 || education.length === 0 || bio.length === 0) {
      setFormCheckedOnce(true)
      return false
    } else {
      return true
    }
  }



  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: 'white' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
    >
      <ScrollView contentContainerStyle={styles.page}>

        <Text style={styles.titleForInputs}>First Name</Text>
        <Input
          onChangeText={(value) => setFirstName(value)}
          value={firstName}
          // ref={username}
          placeholder='First Name'
          // autoCapitalize='none'
          inputContainerStyle={styles.inputs}
          errorMessage={(firstName.length === 0 && formCheckecOnce) ? '* First Name is Required' : ''}
        />
        <Text style={styles.titleForInputs}>Last Name</Text>
        <Input
          onChangeText={(value) => setLastName(value)}
          value={lastName}
          // ref={username}
          placeholder='Last Name'
          // autoCapitalize='none'
          inputContainerStyle={styles.inputs}
          errorMessage={(lastName.length === 0 && formCheckecOnce) ? '* Last Name is Required' : ''}


        />
        <Text style={styles.titleForInputs}>Hometown</Text>
        <Input
          onChangeText={(value) => setHometown(value)}
          value={hometown}
          // ref={username}
          placeholder='Hometown'
          // autoCapitalize='none'
          inputContainerStyle={styles.inputs}
          errorMessage={(hometown.length === 0 && formCheckecOnce) ? '* Hometown is Required' : ''}

        />
        <Text style={styles.titleForInputs}>School</Text>
        <Input
          onChangeText={(value) => setSchool(value)}
          value={school}
          // ref={username}
          placeholder='School'
          // autoCapitalize='none'
          inputContainerStyle={styles.inputs}
          errorMessage={(school.length === 0 && formCheckecOnce) ? '* School is Required' : ''}

        />
        <Text style={styles.titleForInputs}>Education Level</Text>
        <Input
          onChangeText={(value) => setEducation(value)}
          value={education}
          // ref={username}
          placeholder='Highest Level of Educaiton'
          // autoCapitalize='none'
          inputContainerStyle={styles.inputs}
          errorMessage={(education.length === 0 && formCheckecOnce) ? ' * Education Level is Required' : ''}

        />
        <Text style={styles.titleForInputs}>Bio</Text>
        <Input
          onChangeText={(value) => setBio(value)}
          value={bio}
          // ref={password}
          placeholder='Bio'
          // autoCapitalize='none'
          // secureTextEntry={true}
          inputContainerStyle={styles.inputs}
          multiline
          errorMessage={(bio.length === 0 && formCheckecOnce) ? '* Bio is Required' : ''}

        />

        <Button
          style={{ marginTop: 10 }}
          title="Save"
          onPress={() => {
            if (checkValidation()) {
              handleUpdateUser()

            } else {
              Alert.alert(
                'Missing Information',
                'Please make sure all fields are filled out.',
                [
                  { text: 'OK', onPress: () => console.log('OK pressed') },
                ],
                { cancelable: false },
              );
            }

          }
          }
        />


      </ScrollView>
    </KeyboardAwareScrollView>
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
  }
});

export default UserRegistraiton;