import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, ScrollView, RefreshControl } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, ListItem } from 'react-native-elements'
import { getThisUsersChatrooms } from '../functions/chat';
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { format, isAfter, endOfDay } from 'date-fns'
import Lottie from './Lottie'


import { onCreateRequest, onCreateConnection, onCreateChatroomMessage } from '../src/graphql/subscriptions'

const Chats = props => {
  const [chatrooms, setChatrooms] = useState(null);
  const [visible, setVisible] = useState(true)

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    // console.log({props})
    handleGettingThisUsersChatrooms()
    // handleGetInitialChats()
    var createNewConnectionListener, createNewMessageListener;

    const fl = props.navigation.addListener('didFocus', () => {
      handleGettingThisUsersChatrooms()
      createNewConnectionListener = API.graphql(graphqlOperation(onCreateConnection)).subscribe({
        next: data => {
          handleGettingThisUsersChatrooms()
        }
      });

      createNewMessageListener = API.graphql(graphqlOperation(onCreateChatroomMessage)).subscribe({
        next: newMessage => {
          console.log('updating!!!')
          handleGettingThisUsersChatrooms()
        }
      });
    });



    return () => {
      // createNewConnectionListener.unsubscribe()
      // createNewMessageListener.unsubscribe()

      fl.remove()
    };
  }, [])

  const handleGetInitialChats = async () => {
    const result2 = await AsyncStorage.get('InitaialChat');
    console.log(result2)
    setChatrooms(JSON.parse(result2))
  }

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
      // resolve(refreshData())
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    handleGettingThisUsersChatrooms().then(() => {
      setRefreshing(false)
    })
    // wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  const sortChatrooms = async (chatrooms) => {
    const result = await chatrooms.sort((a, b) => {
      var aItems = a.messages.messages.items
      var bItems = b.messages.messages.items
      // console.log({bItems})
      aItems = aItems.sort((c, d) => {
        return (c.createdAt <= d.createdAt) ? 1 : -1
      })
      bItems = bItems.sort((c, d) => {
        return (c.createdAt <= d.createdAt) ? 1 : -1
      })
      if (aItems.length === 0 && bItems.length !== 0) {
        return 1
      } else if (aItems.length !== 0 && bItems.length === 0) {
        return -1
      } else if (aItems.length === 0 && bItems.length === 0) {
        return 1
      } else {
        console.log('items A: ', aItems[0].text, '<=', bItems[0].text)

        return aItems[0].createdAt <= bItems[0].createdAt ? 1 : -1
      }
    })
    return result;
  }


  const handleGettingThisUsersChatrooms = async () => {
    const result = await getThisUsersChatrooms();
    // console.log('CHATS: ', {result})
    const sortResult = await sortChatrooms(result)
    setChatrooms(sortResult)
    return sortResult
  }

  const getSubtitle = (messages) => {
    if (messages.length > 0) {
      const orderedMessages = messages.sort((a, b) => (a.createdAt <= b.createdAt) ? 1 : -1)
      const date = new Date(orderedMessages[0].createdAt)
      console.log('broooo', isAfter(new Date(), endOfDay(date)))
      const formattedDate = (isAfter(new Date(), endOfDay(date))) ? format(date, 'P') : format(date, 'p')

      console.log({ formattedDate })
      const text = orderedMessages[0].text
      return { text, date: formattedDate }
    } else {
      return { text: 'No Messages', createdAt: '' }
    }
  };

  



  return chatrooms ? (
    <ScrollView 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentConatinerStyle={styles.page}>
    {chatrooms.map((item, num) => (
      <ListItem
        key={num}
        title={`${item.firstName} ${item.lastName}`}
        subtitle={getSubtitle(item.messages.messages.items).text}
        rightSubtitle={getSubtitle(item.messages.messages.items).date}
        leftAvatar={{ source: { uri: item.photoURL, cache: 'default' }}}
        bottomDivider
        subtitleStyle={{ color: 'grey' }}
        // onPress={() => props.setSelectedUser(item)}
        onPress={() => {
          setVisible(false)
            props.navigation.navigate('ChatConversationHooks', {
              messages: item.messages.messages.items,
              chatroomId: item.actionId,
              title: `${item.firstName} ${item.lastName}`,
              setVisible, refreshPrev: () => handleGettingThisUsersChatrooms(),
              photoURL: item.photoURL
            })
        }
        }
        chevron
      />
    ))}
    </ScrollView>
  ) :
    // <View style={{ margin: 'auto' }}>
    //   <ActivityIndicator size='large' color='#7951A8' style={{ paddingTop: 350 }} />
    // </View>
    <Lottie/>

};

const styles = StyleSheet.create({
  page: {
    // margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default Chats;