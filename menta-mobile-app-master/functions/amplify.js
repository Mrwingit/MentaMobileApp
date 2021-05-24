import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import {  listUsers } from '../src/graphql/queries'
import { createMatch } from '../src/graphql/mutations'
import {CacheManager} from "react-native-expo-image-cache";


import { Promise } from 'bluebird';



export const checkCognitoUser = async () => {
  const result = await Auth.currentAuthenticatedUser()
    .then((data) => {
      return data
    }).catch((err) => {
      console.log(err)
      return null
    })
  return result;
}

export const getCurrentUserData = async (userId, actionId, userTypeToCurrent, otherVar) => {



  const resultDynamoDB = await API.graphql(graphqlOperation(getUser, { id: userId }))
    .then((data) => {
      // console.log('data from dynamo: ', {data})
      return data
    })
    .catch((err) => {
      console.log('error from dynamo: ', err)
      return 'no-image'
    })

  const resultS3 = await getPhotoURL(userId)

  var data = resultDynamoDB.data.getUser

  // console.log('here', {...data, photoURL: resultS3 })

  return { 
    ...data,
    actionId: actionId ? actionId: '', 
    userTypeToCurrent: userTypeToCurrent ? userTypeToCurrent : '',
    otherVar: otherVar ? otherVar : '',
    photoURL: resultS3
   }
}

export const listOtherUsers = async () => {

}

export const getPhotoURL = async (userId) => {
  const resultS3 = await Storage.get(`profile-${userId}.jpeg`)
  .then(data => {
    return data;
  })
  .catch((err) => {
    console.log('error from S3: ', err)
    return null
  });

  const path = await CacheManager.get(resultS3).getPath();

  return path
}

export const getFeedPhotoURL = async (userId) => {
  const resultS3 = await Storage.get(`feed-${userId}.jpeg`)
  .then(data => {
    return data;
  })
  .catch((err) => {
    console.log('error from S3: ', err)
    return null
  });

  const path = await CacheManager.get(resultS3).getPath();

  return path
}



export const getOtherUsersData = async () => {
  console.log('i do not work yet...')
}

export const getOtherUsersImageURLs = async () => {
  console.log('i do not work yet...')
}

export const getUser = `query GetUser($id: ID!) {
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
        id
      }
      nextToken
    }
    connectionsAsMentor {
      items {
        id
      }
      nextToken
    }
    matchesAsMentee {
      items {
        id
        mentor {
          id
        }
        mentee {
          id
        }
        deleted
      }
      nextToken
    }
    matchesAsMentor {
      items {
        id
        deleted
      }
      nextToken
    }
    requestsAsMentee {
      items {
        id
        sentByUserType
        denied
      }
      nextToken
    }
    requestsAsMentor {
      items {
        id
        sentByUserType
        denied
      }
      nextToken
    }
    requestsSent {
      items {
        id
        sentByUserType
        denied
      }
      nextToken
    }
    chatrooms {
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
    mentorApplication {
      id
      user {
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
      }
      text
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
