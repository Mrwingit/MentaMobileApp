import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, SearchBar } from 'react-native-elements'

import { TagSelect } from 'react-native-tag-select';

const data = [
  { id: 1, label: 'Money' },
  { id: 2, label: 'Credit card ' },
  { id: 3, label: 'Debit card ' },
  { id: 4, label: 'Online payment ' },
  { id: 5, label: 'Bitcoin ' },
  { id: 6, label: 'Money' },
  { id: 7, label: 'Credit card ' },
  { id: 8, label: 'Debit card ' },
  { id: 9, label: 'Online payment ' },
  { id: 10, label: 'Bitcoin ' },
  { id: 11, label: 'Money' },
  { id: 12, label: 'Credit card ' },
  { id: 13, label: 'Debit card ' },
  { id: 14, label: 'Online payment ' },
  { id: 15, label: 'Bitcoin ' },
  { id: 16, label: 'Money' },
  { id: 17, label: 'Credit card ' },
  { id: 18, label: 'Debit card ' },
  { id: 19, label: 'Online payment ' },
  { id: 20, label: 'Bitcoin ' },
  { id: 21, label: 'Money' },
  { id: 22, label: 'Credit card ' },
  { id: 23, label: 'Debit card ' },
  { id: 24, label: 'Online payment ' },
  { id: 25, label: 'Bitcoin ' },
  { id: 26, label: 'Money' },
  { id: 27, label: 'Credit card ' },
  { id: 28, label: 'Debit card ' },
  { id: 29, label: 'Online payment ' },
  { id: 30, label: 'Bitcoin ' },
  { id: 31, label: 'Money' },
  { id: 32, label: 'Credit card ' },
  { id: 33, label: 'Debit card ' },
  { id: 34, label: 'Online payment ' },
  { id: 35, label: 'Bitcoin ' },
  { id: 36, label: 'Money' },
  { id: 37, label: 'Credit card ' },
  { id: 38, label: 'Debit card ' },
  { id: 39, label: 'Online payment ' },
  { id: 40, label: 'Bitcoin ' },
  { id: 41, label: 'Money' },
  { id: 42, label: 'Credit card ' },
  { id: 43, label: 'Debit card ' },
  { id: 44, label: 'Online payment ' },
  { id: 45, label: 'Bitcoin ' },
  { id: 46, label: 'Money' },
  { id: 47, label: 'Credit card ' },
  { id: 48, label: 'Debit card ' },
  { id: 49, label: 'Online payment ' },
  { id: 50, label: 'Bitcoin ' },
];

// const taggedObject = null;


const Profile = props => {
  const [searchText, setSearchText] = useState('');
  const [tabsDisplayed, setTabsDisplayed] = useState(data)
  const [taggedObject, setTaggedObject] = useState(null)
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    // console.log({ props })

  })

  // const signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Auth');
  // };

  const filterByValue = (array, string) => {
    return array.filter(o => Object.values(o)[1].toLowerCase().includes(string.toLowerCase()))
  }

  const handleSearchTabs = (text) => {
    setSearchText(text)
    setTabsDisplayed(filterByValue(data, text))
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
    console.log({selectedTags})
  }



  return (
    <SafeAreaView style={styles.page}>


      {/* <ScrollView style={styles.selectedView}>

<TagSelect
          data={selectedTags}
          // platform='ios'
          max={10}
          // ref={(tag) => {
          //   this.tag = tag;
          // }}
          // ref={(tag) => tag}
          ref={(tag) =>  taggedObject}
          onMaxError={() => {
            // Alert.alert('Ops', 'Max reached');
          }}
          // itemLabelStyleSelected={styles.labelSelected}
          // itemStyleSelected={styles.itemSelected}

          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          
        />
      </ScrollView> */}

      <SearchBar
        placeholder="Type Here..."
        onChangeText={(text) => handleSearchTabs(text)}
        value={searchText}
        lightTheme
        style={styles.searchBar}
        platform='ios'
        containerStyle={{backgroundColor: 'white'}}

      />

      <ScrollView style={styles.tagView}>
        <TagSelect
          data={tabsDisplayed}
          // platform='ios'
          max={10}
          // ref={(tag) => {
          //   this.tag = tag;
          // }}
          // ref={(tag) => tag}
          ref={(tag) =>  setTaggedObject(tag)}
          onMaxError={() => {
            // Alert.alert('Ops', 'Max reached');
          }}
          onItemPress={(item) => handleSetSelectedTags(item)}
          itemLabelStyleSelected={styles.labelSelected}
          itemStyleSelected={styles.itemSelected}

        />

      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  page: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    // justifyContent: 'center', 
    // alignItems: 'center'


  },
  searchBar: {
    paddingBottom: 30
  },
  tagView: {
    // height: 250
  },
  labelSelected: {
    backgroundColor: '#7951A8'
  },
  itemSelected: {
    backgroundColor: '#7951A8',
    borderColor: '#7951A8',
  }
  
});

export default Profile;