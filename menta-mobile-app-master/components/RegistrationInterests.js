import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { Text, View, StyleSheet, AsyncStorage, TextInput, SafeAreaView, ScrollView, Alert } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, Input, SearchBar } from 'react-native-elements'

import InterestPicker from './InterestPicker'

import { TagSelect } from 'react-native-tag-select';

import { createUser, updateUser } from '../src/graphql/mutations'

import { INTERESTS_LIST, getInterestsFromObject, getObjectFromInterests } from '../functions/interests'

import { getLocalUserId } from '../functions/async-storage'

import _ from 'lodash'


const RegistraitonInterests = props => {
  const [searchText, setSearchText] = useState('');
  const [tabsDisplayed, setTabsDisplayed] = useState(INTERESTS_LIST)
  const [taggedObject, setTaggedObject] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])

  const filterByValue = (array, string) => {
    return array.filter(o => Object.values(o)[1].toLowerCase().includes(string.toLowerCase()))
  }

  const handleSearchTabs = (text) => {
    setSearchText(text)
    setTabsDisplayed(filterByValue(INTERESTS_LIST, text))
    console.log(taggedObject.state.value)
  }

  const handleSetSelectedTags = (item) => {
    const alreadySelected = selectedTags.findIndex((value) => value.id === item.id)
    console.log(alreadySelected)
    if (alreadySelected != -1) {
      setSelectedTags(selectedTags.filter((value) => value.id != item.id))
    } else {
      setSelectedTags([item, ...selectedTags])
    }
    console.log('check here', { selectedTags })
  }

  const handlePressNextStep = async () => {
    console.log('press')
    console.log({ selectedTags })
    await uploadInterests(selectedTags).then(() => {
      props.navigation.navigate('RegistrationFiles')
    })

  }

  const uploadInterests = async (selectedTags) => {
    const userId = await getLocalUserId();
    const input = {
      id: userId,
      interests: selectedTags
    }
    const result = await API.graphql(graphqlOperation(updateUser, { input: input }))
      .then((data) => {
        console.log('USER UPDATED:', data)
        return data
      })
      .catch((err) => {
        console.log('Error in UPDATING user: ', err)
        return null
      })
    return result
  }

  // const tester = async () => {
  //   const result1 = await getInterestsFromObject(selectedTags);
  //   // const result2 = 
  //   console.log({result1})
  // }

  return (
    <View style={styles.page}>
      <View style={styles.searchBarView}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => handleSearchTabs(text)}
          value={searchText}
          lightTheme
          style={styles.searchBar}
          platform='ios'
          containerStyle={styles.searchBar}
        />

      </View>

      <View style={styles.scrollView}>
        <ScrollView style={styles.tagView}>
          <TagSelect
            data={tabsDisplayed}
            max={10}
            ref={(tag) => setTaggedObject(tag)}
            onMaxError={() => {
              // Alert.alert('Ops', 'Max reached');
            }}
            onItemPress={(item) => handleSetSelectedTags(item)}
            itemLabelStyleSelected={styles.labelSelected}
            itemStyleSelected={styles.itemSelected}
          />
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        {/* <Button
          title="Tester"
          type="outline"
          buttonStyle={styles.nextButton}
          titleStyle={styles.nextButtonTitle}
          onPress={() => tester()}
          // onPress={handlePress}
          /> */}
        <Button
          title="Next Step"
          type="outline"
          buttonStyle={{
            marginTop: 5,
            height: 45,
            flexDirection: 'row',
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            alignSelf: 'center',
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
          onPress={() => {
            if (_.size(selectedTags) === 0) {
              // Works on both Android and iOS
              Alert.alert(
                'No interests selected',
                'please select at least one interest',
                [
                  { text: 'OK', onPress: () => console.log('OK pressed') },
                  // {
                  //   text: 'Cancel',
                  //   onPress: () => console.log('Cancel Pressed'),
                  //   style: 'cancel',
                  // },
                  // { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
              );
            } else {
              handlePressNextStep()
            }
          }}
          // onPress={handlePress}
          />
      </View>



    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    flex: 1
  },
  searchBar: {
    backgroundColor: 'white',
    margin: 10,
  },
  searchBarView: {
  },
  scrollView: {
    margin: 'auto',
    textAlign: 'center',
    width: '90%',
    margin: 20,
    marginTop: 0,
    maxHeight: 600,
    minHeight: 600
  },
  labelSelected: {
    backgroundColor: '#7951A8'
  },
  itemSelected: {
    backgroundColor: '#7951A8',
    borderColor: '#7951A8',
  },
  nextButton: {
    borderColor: '#7951A8',
    alignSelf: 'center',
    // position: 'absolute',
    bottom: 35,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  nextButtonTitle: {
    color: '#7951A8',
  }
});

export default RegistraitonInterests;