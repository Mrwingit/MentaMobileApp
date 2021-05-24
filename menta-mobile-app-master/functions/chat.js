import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import { getUser, listUsers, listRequests } from '../src/graphql/queries'
import { createMatch, createRequest, updateMatch, createConnection, createChatroomMessage } from '../src/graphql/mutations'

import { Promise } from 'bluebird';
import _ from 'lodash';

import { getLocalUserId, getLocalUserData } from './async-storage'
import { getCurrentUserData, getPhotoURL } from './amplify';

export const getThisUsersChatrooms = async () => {
  // const getUser = `query GetUser($id: ID!) {
  //   getUser(id: $id) {
  //     id
  //     firstName
  //     lastName
  //     prefix
  //     suffix
  //     email
  //     mentor
  //     admin
  //     school
  //     bio
  //     hometown
  //     education
  //     interests {
  //       id
  //       label
  //     }
  //     chatrooms {
  //       items {
  //         user {
  //           id
  //         }
  //         chatroom {
  //           id
  //           users {
  //             nextToken
  //           }
  //           messages {
  //             items {
  //               id
  //               text
  //               createdAt
  //             }
  //             nextToken
  //           }
  //         }
  //       }
  //       nextToken
  //     }
  //     notifications {
  //       items {
  //         id
  //         createdAt
  //         type
  //       }
  //       nextToken
  //     }
  //     posts {
  //       items {
  //         id
  //         text
  //       }
  //       nextToken
  //     }
  //     photoLink
  //     photoS3Object {
  //       bucket
  //       region
  //       key
  //     }
  //     coverLink
  //     coverS3Object {
  //       bucket
  //       region
  //       key
  //     }
  //   }
  // }
  // `;

  const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
    chatrooms {
      items {
        user {
          id
        }
        chatroom {
          id
          users {
            items {
              user {
                id
              }
            }
            nextToken
          }
          messages {
            items {
              id
              text
              createdAt
              sentFrom {
                id
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
    notifications {
      items {
        id
        createdAt
        type
      }
      nextToken
    }
    posts {
      items {
        id
        text
      }
      nextToken
    }
    photoLink
    photoS3Object {
      bucket
      region
      key
    }
    coverLink
    coverS3Object {
      bucket
      region
      key
    }
  }
}
`;
  const userId = await getLocalUserId();

  const result = await API.graphql(graphqlOperation(getUser, { id: userId }))
    .then((data) => {
      console.log('successfully queried this user for chatrooms')
      return data
    })
    .catch((err) => {
      console.log('error in querying this user for chatrooms', err)
      return null
    });

  // console.log('THIS IS IT:', result.data.getUser.chatrooms.items)

  const resultPromiseOtherUserData = await Promise.map(result.data.getUser.chatrooms.items, (item) => {
    // const messages = chatroom.messages.items;
    const users = item.chatroom.users.items;
    var otherUser;
    if (users[0].user.id === userId) {
      otherUser = users[1].user.id
    } else {
      otherUser = users[0].user.id
    }

    return getCurrentUserData(otherUser, item.chatroom.id, '')
  }).then((data) => {
    console.log("successfully got photos for other chat users");
    return data
  }).catch((err) => {
    console.log('error fetching photos for other chat users: ', err)
    return null
  });

  // console.log('ayyyyeeeee:', resultPromiseOtherUserData)

  const resultPromiseMain = await Promise.map(resultPromiseOtherUserData, async (item) => {
    // const messages = chatroom.messages.items;
    const result = await getThisChatroomsMessages(item.actionId);
    // console.log('BOOM! ', result)
    return { ...item, messages: result }
  }).then((data) => {
    console.log("successfully got messages for chatroom");
    return data
  }).catch((err) => {
    console.log('error getting messages for chatroom', err)
    return null
  });


  return resultPromiseMain


  // if (result.data && resultPromiseOtherUserData.data) {
  // } else {
  //   return null
  // }




}

export const formatMessagesForGiftedChat = async (messages) => {
  var counter = 1;
  // console.log({ messages })

  const resultPromise = await Promise.map(messages, async (item) => {

    // const photoURL = await getPhotoURL(item.sentFrom.id);

    // console.log('ayyyeeee:', { item })
    return {
      _id: item.id,
      text: item.text,
      createdAt: item.createdAt,
      user: {
        _id: item.sentFrom.id,
        name: `${item.sentFrom.firstName} ${item.sentFrom.lastName}`,
        // avatar: photoURL
      }
    }
  }).then((data) => {
    console.log("successfully formatting messages for chatroom");
    return data
  }).catch((err) => {
    console.log('error formatting messages for chatroom', err)
    return null
  });

  return resultPromise
}

export const getThisChatroomsMessages = async (chatroomId) => {
  const getChatroom = `query ListChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        users {
          nextToken
        }
        messages(limit: $limit, nextToken: $nextToken) {
          items {
            id
            text
            sentFrom {
              id
              firstName
              lastName
            }
            createdAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
  `;

  const result = await API.graphql(graphqlOperation(getChatroom, { filter: { id : {eq: chatroomId }} , limit: 1000 }))
    .then((data) => {
      console.log('successfully got chatroom data')
      return data
    })
    .catch((err) => {
      console.log('error in querying this user for chatrooms', err)
      return null
    });

    return result.data.listChatrooms.items[0]

  
}


export const sendNewMessage = async (text, createdAt, chatroomMessageChatroomId) => {

  const chatroomMessageSentFromId = await getLocalUserId();

  const input = {
    text,
    createdAt,
    chatroomMessageChatroomId,
    chatroomMessageSentFromId,
  }

  // console.log(input)

  const result = await API.graphql(graphqlOperation(createChatroomMessage, { input }))
    .then((data) => {
      console.log('successfully sent message')
      return data
    })
    .catch((err) => {
      console.log('error in sending message', err)
      return null
    });

    return result



}