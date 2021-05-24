import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView, ActivityIndicator, Linking, RefreshControl, } from 'react-native'
import { Tabs, Tab, Icon, SearchBar } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem, Card, Divider, Badge } from 'react-native-elements'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { IconButton, Colors } from 'react-native-paper';
import { button } from '@aws-amplify/ui';
import Lottie from './Lottie'

import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { getPhotoURL, getFeedPhotoURL, getCurrentUserData } from '../functions/amplify';

import { format, isAfter, endOfDay, formatDistanceToNow } from 'date-fns'

import { onCreateRequest, onCreateConnection, onCreatePost } from '../src/graphql/subscriptions'

import LinkPreview from 'link-preview-js';
import { getFeedPosts, addNewLike, getUserLikesArray } from '../functions/post'
import { getLocalUserId, getLocalUserData } from '../functions/async-storage'


// let grabity = require("grabity");


const Feed = props => {
  // state = {
  //   firstQuery: '',
  // };

  const [count, setCount] = useState(0);
  const [imagePreview, setImagePreview] = useState(null)

  const [loadingFeed, setLoadingFeed] = useState(true)
  const [usersLikedPosts, setUsersLikedPosts] = useState([])

  const [feedPosts, setFeedPosts] = useState(null)

  const [postsWithNewLike, setPostsWithNewLike] = useState([])
  const [postsWithNewDislike, setPostsWithNewDislike] = useState([])
  const [userData, setUserData] = useState(null)


  // const BadgedIcon = withBadge(1)(Icon)

  useEffect(() => {
    // getIt()
    handleGetUserLikesArray()
    handleGetFeedPosts()
    // if (props.navigation.state.params && props.navigation.state.params.newLocalPost) {
    //   handleAddLocalPost(props.navigation.state.params.newLocalPost)
    // }
    handleGetThisUserData()


    // return () => {
    //   cleanup
    // };
  }, [])


  const handleGetThisUserData = async () => {
    const resultUserId = await getLocalUserId()
    const result = await getCurrentUserData(resultUserId)
    // console.log('AHHHHHHHHHHH, ', result)
    setUserData(result)
  }

  useEffect(() => {
    // console.log(props.navigation.state.params.post.user.name)
    // console.log(props.navigation.state.params)
    const createNewPostListener = API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: async newComment => {
        console.log(newComment.value.data.onCreatePost)
        console.log('updating!!!', userData)
        newComment.value.data.onCreatePost['createdAt'] = new Date()
        newComment.value.data.onCreatePost.postedBy['firstName'] = userData.firstName
        newComment.value.data.onCreatePost.postedBy['lastName'] = userData.lastName
        newComment.value.data.onCreatePost['profileImage'] = userData.photoURL


        console.log('eep', newComment.value.data.onCreatePost)

        // handleSetPosts(newComment.value.data.onCreatePost)

        // const profileImage = await getPhotoURL(userData)

        if(item.photoPosted || item.linkURL !== 'no link') {
          const resultSorted = await handleSortFeedPosts([...feedPosts, newComment.value.data.onCreatePost])
          // console.log('HERE WE GOOOO!!! : ', resultSorted)
          setFeedPosts(resultSorted)
        }

        

        // handleGettingThisUsersChatrooms()
      }
    });

    return () => {
      // createNewPostListener.unsubscribe()
    }
  })



  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    handleGetFeedPosts().then(() => setRefreshing(false));
  }, [refreshing]);

  const [addedPosts, setAddedPost] = useState([])

//   const handleAddLocalPost = async (post) => {
//     setFeedPosts(async (prevPosts) => {

//       const updatedPosts = await handleSortFeedPosts([
//         post,
//         ...prevPosts
//       ])

//       return updatedPosts
//     })
// console.log('feed posts updated', feedPosts)  }

  const handleLikePost = async (postId) => {
    if (!usersLikedPosts.includes(postId)) {
      handleAddUsersLikedPosts(postId)
      const result = await addNewLike(postId)
      return result
    }

  }

  const handleAddUsersLikedPosts = async (postId) => {
    setUsersLikedPosts((prevPosts) => {
      return [
        ...prevPosts,
        postId
      ]
    })
  }

  const handleRemoveLike = (commentId) => {
    setUsersLikedPosts((prevComments) => {
      return prevComments.filter((id) => id !== commentId)
    })
  }


  const handleRemoveUsersLikedPosts = async (postId) => {
    setUsersLikedPosts((prevPosts) => {
      return [
        ...prevPosts,
        postId
      ]
    })
  }

  const handleGetUserLikesArray = async () => {
    const result = await getUserLikesArray();
    setUsersLikedPosts(result)
    return result
  }

  const handleLinking = async (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  }

  const handleSortFeedPosts = async (posts) => {
    const result = await posts.sort((a, b) => {
      return a.createdAt <= b.createdAt ? 1 : -1
    })
    return result
  }

  const handleGetFeedPosts = async () => {
    // const likes = await handleGetUserLikesArray()
    
    try {

    const result2 = await getFeedPosts()
      .then((data) => {
        console.log('the data', data)
        return data
      })
      .catch((err) => {
        console.log('ERROR,', err)
        return null
      })

      const resultSorted = await handleSortFeedPosts(result2)
    // console.log('HERE WE GOOOO!!! : ', resultSorted)
    setFeedPosts(resultSorted)
      return resultSorted


    } catch (err) {
      console.log(err)
    }
    
  }

//   const getLikedPosts = async () => {
//     const likes = await handleGetUserLikesArray()
// setUsersLikedPosts(likes)
//   }

  const getFormattedDate = (date) => {
    return `${formatDistanceToNow(new Date(date), new Date())} ago`

  }


  const handleRemoveLink = (text) => {
    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    var regex = new RegExp(expression);
    // var found = text.match(regex);
    return text.replace(regex, '')

  }


  // keyExtractor = (item, index) => index.toString()
 
  // renderItem = ({ item }) => (

  // )
  return feedPosts && usersLikedPosts ? (
    <ScrollView 
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    contentConatinerStyle={styles.page}>
      {feedPosts.map((item, num) => (
        <Card key={num}
        // image={item.imageURL ? { uri: item.imageURL } : item.linkPreview ? { uri: item.linkPreview.images[0] } : null}
        // imageStyle={item.imageURL || item.linkPreview && { width: 300, height: 180 }}
        // featuredTitle={imagePreview && 'Video From Youtube'}
        >
          <ListItem
            title={`${item.postedBy.firstName} ${item.postedBy.lastName}`}
            subtitle={getFormattedDate(item.createdAt)}
            leftAvatar={{ source: { uri: item.profileImage } }}
            subtitleStyle={{ color: 'grey' }}
            rightIcon={
              <View style={{ flexDirection: 'row' }}>


                <Icon
                  name={usersLikedPosts.includes(item.id) ? 'md-heart' : 'md-heart-empty'}
                  type='ionicon'
                  color='#7951A8'
                  onPress={() => {
                    if(usersLikedPosts.includes(item.id)) {
                      handleRemoveLike(item.id)
                    } else {
                      handleLikePost(item.id)
                    }
                    }} />
              </View>
            } />


          <Text style={{ marginBottom: 10, padding: 10 }}>
            {handleRemoveLink(item.text)}
          </Text>
          {/* <Divider /> */}

          {item.imageURL && (
            <>
              {/* <Card
            // title={'External Link'}
            
            image={{uri: item.imageURL}}
            imageStyle={{width: 300, height: 190}}>
              
              </Card> */}
              <Image
                source={{ uri: item.imageURL }}
                style={{ width: '100%', height: 200 }}
              />
            </>
          )
          }

          {item.linkPreview && (
            <>
              <Card
                // title={'External Link'}

                image={{ uri: item.linkPreview.images[0] || item.linkPreview.favicons[0] }}
                imageStyle={{ width: 300, height: 175 }}>
                <ListItem
                  title={item.linkPreview.title}
                  subtitle={item.linkPreview.siteName}
                  subtitleStyle={{ color: 'grey' }}
                  rightIcon={
                    <Icon
                      type='ionicon'
                      name={item.linkPreview.mediaType === 'video' || item.linkPreview.siteName === 'YouTube' ? 'logo-youtube' : 'ios-link'}
                      size={24}
                      color='#7951A8'
                      containerStyle={{ marginRight: 15 }}
                      onPress={() => handleLinking(item.linkURL)}
                    />
                  }
                />
              </Card>
            </>
          )
          }



          {/* <View style={styles.buttons}> */}

          <Button
            onPress={() =>{ 
              console.log('press')
              // await AsyncStorage.setItem('CurrentCommentId', id);
              // console.log('ayyee:', item.comments.items)
              if(item.comments) {
                props.navigation.navigate('FeedComment', { postId: item.id, comments: item.comments.items, usersLikedPosts })
              }
            }}
            title="See Comments"
            type="clear"
            titleStyle={{ color: 'white',
            fontSize: 15,
            fontWeight: 'bold' }}
            buttonStyle={{ marginTop: 5,
              height: 45,
              flexDirection: 'row',
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              alignSelf: 'center',
              marginBottom: 10,
              borderRadius: 30,
              backgroundColor: "#7951A8",
              marginLeft: 10,
              marginRight: 10,}}
            icon={
              
              <Badge value={item.comments ? item.comments.items.length : 0}
                badgeStyle={{ backgroundColor: 'white', marginLeft: 7 }}
                textStyle={{ color: '#7951A8', fontWeight: 'bold' }}

              />


            }
            iconRight={true}
          />



          {/* </View> */}




        </Card>))}

    </ScrollView>

  ) 
  :
    // <View style={{ margin: 'auto' }}>
    //   <ActivityIndicator size='large' color='#7951A8' style={{ paddingTop: 350 }} />
    // </View>

    <Lottie/>

};




const styles = StyleSheet.create({
  // page: {
  //   padding: 10,
  //   backgroundColor: 'green',
  //   height: 50,
  //   width: 200

  // },
  buttons: {
    alignContent: 'center'
  },
});

export default Feed;












// onPress={() => props.navigation.navigate('PostFeed')}