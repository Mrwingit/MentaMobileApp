
import React from "react";
    import { GiftedChat } from "react-native-gifted-chat";
    import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
    import { View, Platform } from 'react-native';
    import KeyboardSpacer from 'react-native-keyboard-spacer';
    import { Bubble } from 'react-native-gifted-chat'

    const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/5271d795-76ad-4224-b645-a8bb3740c90f/token';
    const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:5271d795-76ad-4224-b645-a8bb3740c90f';
    const CHATKIT_ROOM_ID = '010ec723-919c-4688-8ec6-6ac5bd6b3376';
    const CHATKIT_USER_NAME = 'Group1';
   
      


    export default class MyChat extends React.Component {

      state = {
        messages: []
      };

      componentDidMount() {
        const tokenProvider = new TokenProvider({
          url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
        });
    
        const chatManager = new ChatManager({
          instanceLocator: CHATKIT_INSTANCE_LOCATOR,
          userId: CHATKIT_USER_NAME,
          tokenProvider: tokenProvider,
          
        });
    
        chatManager
          .connect()
          .then(currentUser => {
            this.currentUser = currentUser;
            this.currentUser.subscribeToRoom({
              roomId: CHATKIT_ROOM_ID,
              hooks: {
                onMessage: this.onReceive,
              },
            });
          })
          .catch(err => {
            console.log(err);
          });

          this.setState({
            messages: [
              {
                _id: 1,
                text: "Hi",
                createdAt: new Date(),
                user: {
                  _id: 1,
                  name: "React Native",
                  avatar: "https://assets.webiconspng.com/uploads/2017/09/Barack-Obama-PNG-Image-48382-300x300.png"
                }
              }
            ]
          });
        
      }

      onReceive = data => {
        const { id, senderId, text, createdAt } = data;
        const incomingMessage = {
          _id: id,
          text: text,
          createdAt: new Date(createdAt),
          user: {
            _id: senderId,
            name: senderId,
            avatar:
              'https://assets.webiconspng.com/uploads/2017/09/Barack-Obama-PNG-Image-48382-300x300.png',
          },
        };
    
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, incomingMessage),
        }));
      };

      onSend = (messages = []) => {
        messages.forEach(message => {
          this.currentUser
            .sendMessage({
              text: message.text,
              roomId: CHATKIT_ROOM_ID,
            })
            .then(() => {})
            .catch(err => {
              console.log(err);
            });
        });
      };

      renderBubble (props) {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#B399DD'
              }
            }}
          />
        )
      }
        

      

      render() {
        return (
          <>
          <View style={{flex: 1}}>
          {/* <View> */}
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: CHATKIT_USER_NAME
              }}
              renderBubble={this.renderBubble}
            />
            <KeyboardSpacer />
            </View>
          </>
        );
      }
    }