import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem, Card, } from 'react-native-elements'
import { CacheManager } from "react-native-expo-image-cache";
import { Promise } from 'bluebird';
import { Image } from 'react-native';

import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import { FlatList } from 'react-native-gesture-handler';

import { format, isAfter, endOfDay, formatDistanceToNow } from 'date-fns'

import { onCreateRequest, onCreateConnection, onCreatePostComment } from '../src/graphql/subscriptions'

import { getLocalUserId, getLocalUserData } from '../functions/async-storage'


const FeedComment = props => {
  // const [selectedTab, setSelectedTab] = useState('profile');

  const [comments, setComments] = useState(null)

  const [refreshing, setRefreshing] = React.useState(false);
  const [userData, setUserData] = useState(null)

  const [likedComments, setLikedComments] = useState([])

  useEffect(() => {
    // console.log(props.navigation.state.params.post.user.name)
    // console.log(props.navigation.state.params)
    handleSetComments()

    handleGetThisUserData()

  }, [])

  useEffect(() => {
    // console.log(props.navigation.state.params.post.user.name)
    // console.log(props.navigation.state.params)
    const createNewCommentListener = API.graphql(graphqlOperation(onCreatePostComment)).subscribe({
      next: newComment => {
        console.log(newComment.value.data.onCreatePostComment)
        console.log('updating!!!')
        newComment.value.data.onCreatePostComment['createdAt'] = new Date()
        newComment.value.data.onCreatePostComment.postedBy['firstName'] = userData.firstName
        newComment.value.data.onCreatePostComment.postedBy['lastName'] = userData.lastName


        handleSetComments(newComment.value.data.onCreatePostComment)

        // handleGettingThisUsersChatrooms()
      }
    });


    return () => {
      createNewCommentListener.unsubscribe()
    }
  })

  const handleGetThisUserData = async () => {
    const result = await getLocalUserData()
    console.log(result)
    setUserData(result)
  }

  const getCommentProfileImages = async (newComment) => {
    // console.log('aayyeee2: ', props.navigation.state.params.comments)
    const array = newComment ? [...props.navigation.state.params.comments, newComment] : props.navigation.state.params.comments
    const returnPromise = await Promise.map(array, async (item) => {
      const result = await Storage.get(`profile-${item.postedBy.id}.jpeg`).then(async data => {
        const path = await CacheManager.get(data).getPath();
        console.log({ path })
        return path
      });
      return { ...item, photoURL: result }
    })

    return returnPromise

  }


  const getFormattedDate = (date) => {
    return `${formatDistanceToNow(new Date(date), new Date())} ago`

  }

  const updateLikedComments = (commentId) => {
    setLikedComments((prevComments) => {
      return [
        ...prevComments,
        commentId
      ]
    })
  }

  const handleRemoveComments = (commentId) => {
    setLikedComments((prevComments) => {
      return prevComments.filter((id) => id !== commentId)
    })
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    handleSetComments().then(() => setRefreshing(false));

  }, [refreshing]);

  const handleSortComments = async (comments) => {
    const result = await comments.sort((a, b) => {
      return a.createdAt <= b.createdAt ? 1 : -1
    })
    return result
  }

  const handleSetComments = async (newComment) => {
    const result = await getCommentProfileImages(newComment)
    // console.log({result})
    const resultSorted = await handleSortComments(result)
    setComments(resultSorted.length > 0 ? result : [])
  }

  // const signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Auth');
  // };



  return comments ? (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentConatinerStyle={styles.page}>
      {
        comments.map((item, num) => (
          <Card key={num}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', flex: 1 }}>
              <View style={{ alignSelf: 'flex-start', flex: 1 }}>
                <Image style={styles.avatar} source={{ uri: item.photoURL }} />
              </View>
              <View style={{ alignSelf: 'flex-start', flex: 4, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.postedBy.firstName} {item.postedBy.lastName}</Text>
                  <Text style={{ color: 'grey' }}> {getFormattedDate(item.createdAt)} </Text>
                </View>
                <View>
                  <Text style={{ marginTop: 5 }}>
                    {item.text}
                  </Text>
                </View>
              </View>
              <View style={{ alignSelf: 'flex-end', flex: 1 }}>
                <Icon
                  name={likedComments.includes(item.id) ? 'md-heart' : 'md-heart-empty'}
                  type='ionicon'
                  color='#7951A8'
                  onPress={() => {
                    if(likedComments.includes(item.id)){
                      handleRemoveComments(item.id)

                    } else {
                      updateLikedComments(item.id)

                    }
                  }
                  } />
              </View>
            </View>
          </Card>

        ))

      }
    </ScrollView>
  ) :
    <View style={{ margin: 'auto' }}>
      <ActivityIndicator size='large' color='#7951A8' style={{ paddingTop: 350 }} />
      {/* <Text>Loading Chats</Text> */}
    </View>
};

const styles = StyleSheet.create({
  page: {
    // margin: 'auto',
    // textAlign: 'center',
    // paddingTop: 50,
    // justifyContent: 'center', 
    // alignItems: 'center'
  },
  root: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  }, 
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "white",
    marginBottom: 13,
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default FeedComment;