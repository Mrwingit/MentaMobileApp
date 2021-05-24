
import React, {useState, useEffect} from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { Bubble } from 'react-native-gifted-chat'
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { formatMessagesForGiftedChat, sendNewMessage } from "../functions/chat";
import {onCreateRequest} from '../src/graphql/subscriptions'
import { getLocalUserId } from "../functions/async-storage";

import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import { getPhotoURL } from "../functions/amplify";





const ChatConversationHooks = props => {
  const [currentUserId, setCurrentUserId] = useState(null)
  const [messages, setMessages] = useState(null)
  // const [messages, setMessages] = useState([
  //   {
  //     _id: 1,
  //     text: "Hi",
  //     createdAt: new Date(),
  //     user: { 
  //       _id: 1,
  //       name: "React Native",
  //       avatar: "https://assets.webiconspng.com/uploads/2017/09/Barack-Obama-PNG-Image-48382-300x300.png"
  //     }
  //   }
  // ])

  useEffect(() => {
    handleSettingMessages()
    handleGetCurrentUserId()
    const createNewMessageListener = API.graphql(graphqlOperation(onCreateChatroomMessage)).subscribe({
      next: data => {
        const newMessage = data.value.data.onCreateChatroomMessage;
        handleSetMessagesAsync(newMessage)
        props.navigation.state.params.refreshPrev();
        props.navigation.state.params.setVisible(true)
      }
    });
    return () => {
      createNewMessageListener.unsubscribe()
    };
  }, [])

  const sendMessage = async (messageData) =>  { 
    const result = await sendNewMessage(messageData[0].text, messageData[0].createdAt, props.navigation.state.params.chatroomId)
    return result
  }

  const handleSetMessagesAsync = async (newMessage) => {

    const photoURL = await getPhotoURL(newMessage.sentFrom.id);
    setMessages(prevMessages => {
      const oldMessages = prevMessages.filter(message => message._id !== newMessage.id && newMessage.chatroom.id === props.navigation.state.params.chatroomId);
          const updatedMessages = [...oldMessages, {
            _id: newMessage.id,
            text: newMessage.text,
            createdAt: newMessage.createdAt,
            user: {
              _id: newMessage.sentFrom.id,
              name: `${newMessage.sentFrom.firstName} ${newMessage.sentFrom.lastName}`,
              avatar: photoURL
            }
          }]
          return updatedMessages.sort((a, b) => (a.createdAt <= b.createdAt) ? 1 : -1);
    })
  }

  const handleGetCurrentUserId = async () => {
    const result = await getLocalUserId()
    setCurrentUserId(result)
  }

  const handleSettingMessages = async () => {
    const result = await formatMessagesForGiftedChat(props.navigation.state.params.messages)
    setMessages(result.sort((a, b) => (a.createdAt <= b.createdAt) ? 1 : -1))
  }




    return currentUserId && messages && (
      <>
      <KeyboardAvoidingView 
      style={{flex: 1}}
      keyboardVerticalOffset={90}>
        <GiftedChat
          messages={messages}
          onSend={m => sendMessage(m)}
          user={{
            _id: currentUserId
          }}
          renderAvatar={() => null}
          showAvatarForEveryMessage={true}
        />
        {/* <KeyboardSpacer he/> */}
        </KeyboardAvoidingView>
      </>
    );
}

export default ChatConversationHooks


export const onCreateChatroomMessage = `subscription OnCreateChatroomMessage {
  onCreateChatroomMessage {
    id
    text
    chatroom {
      id
    }
    createdAt
    sentFrom {
      id
      firstName
      lastName
      prefix
      suffix
      email
      mentor
      admin
      school
      bio
      hometown
      education
      interests {
        id
        label
      }
    }
  }
}
`;