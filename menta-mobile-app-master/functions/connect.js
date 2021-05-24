import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import { getUser, listUsers, listRequests } from '../src/graphql/queries'
import { createMatch, createRequest, updateMatch, createConnection, deleteRequest, createUserChatroom, createChatroom } from '../src/graphql/mutations'

import { Promise } from 'bluebird';
import _ from 'lodash';

import { getLocalUserId, getLocalUserData } from './async-storage'
import { getCurrentUserData } from './amplify';



export const createMatchesFromMentors = async () => {

  const resultDynamoDB = await API.graphql(graphqlOperation(listUsers, {
    filter: {
      mentor: { eq: true }
    }, limit: 1000
  }))
    .then((data) => {
      // console.log('data from dynamo: ', { data })
      return data
    })
    .catch((err) => {
      console.log('error from dynamo: ', err)
      return 'no-image'
    })

  const userData = await getLocalUserData();


  Promise.map(resultDynamoDB.data.listUsers.items, async (mentor) => {

    const hasNotMatchedWithMentor = _.filter(userData.matchesAsMentee.items, (item) => item.mentor.id === mentor.id)
    const userIsNotThisMentor = mentor.id != userData.id;

    if (hasNotMatchedWithMentor.length === 0 && userIsNotThisMentor) {
      const input = {
        matchMentorId: mentor.id,
        matchMenteeId: userData.id,
        deleted: false,
      }
      return API.graphql(graphqlOperation(createMatch, { input }))
    }
  }).then(() => {
    console.log("successfully created matches");
  }).catch((err) => {
    console.log('error creating matches: ', err)
  });

  return resultDynamoDB
}

export const getMatchesForMentee = async () => {
  const getUser = `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      matchesAsMentee (filter: { deleted: {eq: false} }) {
        items {
          id
          mentor {
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
            photoLink
            coverLink
            interests {
              id
              label
            }
          }
          mentee {
            id
          }
          deleted
        }
        nextToken
      }
    }
  }
  `;

  const userId = await getLocalUserId();


  const resultDynamoDB = await API.graphql(graphqlOperation(getUser, { id: userId }))
    .then((data) => {
      console.log('successfully queried for mentee\'s matches')
      return data
    })
    .catch((err) => {
      console.log('error in querying mentee\'s matches', err)
      return null
    })


  if (resultDynamoDB) {
    const resultPromise = await Promise.map(resultDynamoDB.data.getUser.matchesAsMentee.items, (match) => {
      if (match.mentee.id === userId && !match.deleted) {
        return getCurrentUserData(match.mentor.id, match.id)
      }
    }).then((data) => {
      console.log("successfully got matches");

      return data
    }).catch((err) => {
      console.log('error fetching matches: ', err)
      return null
    });

    return resultPromise


  } else {
    return null
  }



}


export const getMatchesForMentor = async () => {
  const getUser = `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      matchesAsMentor (filter: { deleted: {eq: false} }) {
        items {
          id
          mentee {
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
            photoLink
            coverLink
            interests {
              id
              label
            }
          }
          mentor {
            id
          }
          deleted
        }
        nextToken
      }
    }
  }
  `;

  const userId = await getLocalUserId();


  const resultDynamoDB = await API.graphql(graphqlOperation(getUser, { id: userId }))
    .then((data) => {
      console.log('successfully queried for mentee\'s matches')
      return data
    })
    .catch((err) => {
      console.log('error in querying mentee\'s matches', err)
      return null
    })


  if (resultDynamoDB) {
    const resultPromise = await Promise.map(resultDynamoDB.data.getUser.matchesAsMentor.items, (match) => {
      if (match.mentor.id === userId && !match.deleted) {
        return getCurrentUserData(match.mentee.id, match.id)
      }
    }).then((data) => {
      console.log("successfully got matches");

      return data
    }).catch((err) => {
      console.log('error fetching matches: ', err)
      return null
    });

    return resultPromise


  } else {
    return null
  }



}

export const sendRequest = async (toUserId, sentByUserType, matchId, message) => {
  const requestSentById = await getLocalUserId();

  var requestMenteeId, requestMentorId;

  if (sentByUserType === 'mentee') {
    requestMenteeId = requestSentById;
    requestMentorId = toUserId;
  } else if (sentByUserType === 'mentor') {
    requestMenteeId = toUserId;
    requestMentorId = requestSentById;
  }
  const inputRequest = {
    id: matchId,
    sentByUserType,
    denied: false,
    requestMenteeId,
    requestMentorId,
    requestSentById,
    message
  }

  const resultRequest = await API.graphql(graphqlOperation(createRequest, { input: inputRequest }))
    .then((data) => {
      console.log('successfully created request')
      return data
    })
    .catch((err) => {
      console.log('error in creating request', err)
      return null
    });

  const inputMatch = {
    id: matchId,
    deleted: true
  }

  const resultMatch = await API.graphql(graphqlOperation(updateMatch, { input: inputMatch }))
    .then((data) => {
      console.log('successfully updated match')
      return data
    })
    .catch((err) => {
      console.log('error in updating match', err)
      return null
    });

  return resultRequest, resultMatch


}

export const getRequestsSent = async () => {

  const listRequests = `query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mentee {
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
          photoLink
          coverLink
          interests {
            id
            label
          }
        }
        mentor {
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
          photoLink
          coverLink
          interests {
            id
            label
          }
        }
        sentBy {
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
          photoLink
          coverLink
          interests {
            id
            label
          }
        }
        sentByUserType
        denied
      }
      nextToken
    }
  }
  `;
  const userId = await getLocalUserId();
  const result = await API.graphql(graphqlOperation(listRequests, {
    filter: {
      denied: { eq: false }
    }, limit: 1000
  }))
    .then((data) => {
      console.log('successfully queried requests')
      return data
    })
    .catch((err) => {
      console.log('error in querying requests', err)
      return null
    });

  // console.log({ result })

  const requestsSent = _.filter(result.data.listRequests.items, (item) => item.sentBy.id === userId)
  // const requestsAsMentor = _.filter(result.data.listRequests.items, (item) => item.mentor === userId)
  // console.log({requestsAsMentee, requestsAsMentor})
  // console.log({ requestsSent })

  if (result) {

    const resultPromise = await Promise.map(requestsSent, (request) => {
      const otherUser = request.mentor.id === userId ? request.mentee.id : request.mentor.id;
      const otherUserType = request.mentor.id === userId ? 'mentee' : 'mentor';
      return getCurrentUserData(otherUser, request.id, otherUserType)
      // if (request.mentee.id === userId) {
      //   return getCurrentUserData(otherUser, request.id, otherUserType)
      // } else if (request.mentor.id === userId) {
      //   return getCurrentUserData(otherUser, request.id, otherUserType)
      // } 
    }).then((data) => {
      console.log("successfully got photos for requests");

      return data
    }).catch((err) => {
      console.log('error fetching photos for requests: ', err)
      return null
    });

    // const resultPromiseMentor = await Promise.map(requestsAsMentor, (request) => {
    //   if (request.mentor.id === userId) {
    //     return getCurrentUserData(request.mentor.id, request.id)
    //   }
    // }).then((data) => {
    //   console.log("successfully got photos for requests");

    //   return data
    // }).catch((err) => {
    //   console.log('error fetching photos for requests: ', err)
    //   return null
    // });


    return resultPromise


  } else {
    return null
  }

  return result.data.listRequests.items
}

export const getConnections = async () => {
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
      connectionsAsMentee {
        items {
          mentor {
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
        nextToken
      }
      connectionsAsMentor {
        items {
          mentee {
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
        nextToken
      }
    }
  }
  `;
  const userId = await getLocalUserId();

  const result = await API.graphql(graphqlOperation(getUser, { id: userId }))
    .then((data) => {
      console.log('successfully queried user for connections')
      return data
    })
    .catch((err) => {
      console.log('error in querying user for connections', err)
      return null
    });

  if (result) {

    const resultPromiseConnectionsAsMentor = await Promise.map(result.data.getUser.connectionsAsMentor.items, (connection) => {
      return getCurrentUserData(connection.mentee.id, '', 'mentee')
    }).then((data) => {
      console.log("successfully got photos for connetions");
      return data
    }).catch((err) => {
      console.log('error fetching photos for connections: ', err)
      return null
    });

    const resultPromiseConnectionsAsMentee = await Promise.map(result.data.getUser.connectionsAsMentee.items, (connection) => {
      return getCurrentUserData(connection.mentor.id, '', 'mentor')
    }).then((data) => {
      console.log("successfully got photos for connetions");
      return data
    }).catch((err) => {
      console.log('error fetching photos for connections: ', err)
      return null
    });

    return { connectionsAsMentor: resultPromiseConnectionsAsMentor, connectionsAsMentee: resultPromiseConnectionsAsMentee }


  } else {
    return null
  }

  // return result.data.getUser

}

export const getRequestsRecieved = async () => {

  const listRequests = `query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mentee {
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
          photoLink
          coverLink
          interests {
            id
            label
          }
        }
        mentor {
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
          photoLink
          coverLink
          interests {
            id
            label
          }
        }
        sentBy {
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
          photoLink
          coverLink
          interests {
            id
            label
          }
        }
        sentByUserType
        denied
        message
      }
      nextToken
    }
  }
  `;
  const userId = await getLocalUserId();
  const result = await API.graphql(graphqlOperation(listRequests, {
    filter: {
      denied: { eq: false }
    }, limit: 1000
  }))
    .then((data) => {
      console.log('successfully queried requests')
      return data
    })
    .catch((err) => {
      console.log('error in querying requests', err)
      return null
    });

  // console.log({ result })

  // const requestsSent = _.filter(result.data.listRequests.items, (item) => item.sentBy.id != userId)
  const requestsRecieved = _.filter(result.data.listRequests.items, (item) => (item.mentor.id === userId || item.mentee.id === userId) && item.sentBy.id != userId)
  // console.log({requestsAsMentee, requestsAsMentor})
  // console.log({ requestsRecieved })

  if (result) {

    const resultPromise = await Promise.map(requestsRecieved, (request) => {
      const otherUser = request.mentor.id === userId ? request.mentee.id : request.mentor.id;
      const otherUserType = request.mentor.id === userId ? 'mentee' : 'mentor';
      return getCurrentUserData(otherUser, request.id, otherUserType, request.message)
      // if (request.mentee.id === userId) {
      //   return getCurrentUserData(otherUser, request.id, otherUserType)
      // } else if (request.mentor.id === userId) {
      //   return getCurrentUserData(otherUser, request.id, otherUserType)
      // } 
    }).then((data) => {
      console.log("successfully got photos for requests");

      return data
    }).catch((err) => {
      console.log('error fetching photos for requests: ', err)
      return null
    });

    // const resultPromiseMentor = await Promise.map(requestsAsMentor, (request) => {
    //   if (request.mentor.id === userId) {
    //     return getCurrentUserData(request.mentor.id, request.id)
    //   }
    // }).then((data) => {
    //   console.log("successfully got photos for requests");

    //   return data
    // }).catch((err) => {
    //   console.log('error fetching photos for requests: ', err)
    //   return null
    // });


    return resultPromise


  } else {
    return null
  }

}

export const addConnection = async (toUserId, sentByUserType, requestId) => {

  const userId = await getLocalUserId();

  var connectionMenteeId, connectionMentorId;

  if (sentByUserType === 'mentor') {
    connectionMenteeId = toUserId;
    connectionMentorId = userId;
  } else {
    connectionMenteeId = userId;
    connectionMentorId = toUserId;
  }

  const input = {
    id: requestId,
    connectionMenteeId,
    connectionMentorId,
  }

  const resultConnection = await API.graphql(graphqlOperation(createConnection, { input }))
    .then((data) => {
      console.log('successfully created connection')

      return data
    })
    .catch((err) => {
      console.log('error in creating connection', err)
      return null
    });

  if (resultConnection) {
    const resultRequest = await API.graphql(graphqlOperation(deleteRequest, { input: { id: requestId } }))
      .then((data) => {
        console.log('successfully deleted request')
        return data
      })
      .catch((err) => {
        console.log('error in deleting request', err)
        return null
      });

    const inputThisUserChatroom = {
      userChatroomUserId: userId,
      userChatroomChatroomId: requestId
    }

    const resultThisUserChatroom = await API.graphql(graphqlOperation(createUserChatroom, { input: inputThisUserChatroom }))
      .then((data) => {
        console.log('successfully created UserChatroom for this user')

        return data
      })
      .catch((err) => {
        console.log('error in creating UserChatroom for this user', err)
        return null
      });

    const inputOtherUserChatroom = {
      userChatroomUserId: toUserId,
      userChatroomChatroomId: requestId
    }

    const resultOtherUserChatroom = await API.graphql(graphqlOperation(createUserChatroom, { input: inputOtherUserChatroom }))
      .then((data) => {
        console.log('successfully created UserChatroom for other user')
        return data
      })
      .catch((err) => {
        console.log('error in creating UserChatroom for other user', err)
        return null
      });

    const inputChatroom = {
      id: requestId
    }

    const resultChatroom = await API.graphql(graphqlOperation(createChatroom, { input: inputChatroom }))
      .then((data) => {
        console.log('successfully created Chatroom')

        return data
      })
      .catch((err) => {
        console.log('error in creating chatroom', err)
        return null
      });

    return resultConnection, resultRequest, resultThisUserChatroom, resultOtherUserChatroom, resultChatroom
  } else {
    return null;
  }









}

