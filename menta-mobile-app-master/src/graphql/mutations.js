/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
        message
      }
      nextToken
    }
    requestsAsMentor {
      items {
        id
        sentByUserType
        denied
        message
      }
      nextToken
    }
    requestsSent {
      items {
        id
        sentByUserType
        denied
        message
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
        linkURL
        videoURL
        photoPosted
        createdAt
      }
      nextToken
    }
    postComments {
      items {
        id
        text
        createdAt
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
    likes {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
        message
      }
      nextToken
    }
    requestsAsMentor {
      items {
        id
        sentByUserType
        denied
        message
      }
      nextToken
    }
    requestsSent {
      items {
        id
        sentByUserType
        denied
        message
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
        linkURL
        videoURL
        photoPosted
        createdAt
      }
      nextToken
    }
    postComments {
      items {
        id
        text
        createdAt
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
    likes {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
        message
      }
      nextToken
    }
    requestsAsMentor {
      items {
        id
        sentByUserType
        denied
        message
      }
      nextToken
    }
    requestsSent {
      items {
        id
        sentByUserType
        denied
        message
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
        linkURL
        videoURL
        photoPosted
        createdAt
      }
      nextToken
    }
    postComments {
      items {
        id
        text
        createdAt
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
    likes {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createMatch = `mutation CreateMatch($input: CreateMatchInput!) {
  createMatch(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    deleted
  }
}
`;
export const updateMatch = `mutation UpdateMatch($input: UpdateMatchInput!) {
  updateMatch(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    deleted
  }
}
`;
export const deleteMatch = `mutation DeleteMatch($input: DeleteMatchInput!) {
  deleteMatch(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    deleted
  }
}
`;
export const createRequest = `mutation CreateRequest($input: CreateRequestInput!) {
  createRequest(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    sentByUserType
    denied
    message
  }
}
`;
export const updateRequest = `mutation UpdateRequest($input: UpdateRequestInput!) {
  updateRequest(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    sentByUserType
    denied
    message
  }
}
`;
export const deleteRequest = `mutation DeleteRequest($input: DeleteRequestInput!) {
  deleteRequest(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    sentByUserType
    denied
    message
  }
}
`;
export const createConnection = `mutation CreateConnection($input: CreateConnectionInput!) {
  createConnection(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
  }
}
`;
export const updateConnection = `mutation UpdateConnection($input: UpdateConnectionInput!) {
  updateConnection(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
  }
}
`;
export const deleteConnection = `mutation DeleteConnection($input: DeleteConnectionInput!) {
  deleteConnection(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    postedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    text
    comments {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    linkURL
    videoURL
    photoPosted
    createdAt
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    postedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    text
    comments {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    linkURL
    videoURL
    photoPosted
    createdAt
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    postedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    text
    comments {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
    likes {
      items {
        id
      }
      nextToken
    }
    linkURL
    videoURL
    photoPosted
    createdAt
  }
}
`;
export const createPostComment = `mutation CreatePostComment($input: CreatePostCommentInput!) {
  createPostComment(input: $input) {
    id
    postedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    post {
      id
      postedBy {
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
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      linkURL
      videoURL
      photoPosted
      createdAt
    }
    likes {
      items {
        id
      }
      nextToken
    }
    text
    createdAt
  }
}
`;
export const updatePostComment = `mutation UpdatePostComment($input: UpdatePostCommentInput!) {
  updatePostComment(input: $input) {
    id
    postedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    post {
      id
      postedBy {
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
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      linkURL
      videoURL
      photoPosted
      createdAt
    }
    likes {
      items {
        id
      }
      nextToken
    }
    text
    createdAt
  }
}
`;
export const deletePostComment = `mutation DeletePostComment($input: DeletePostCommentInput!) {
  deletePostComment(input: $input) {
    id
    postedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    post {
      id
      postedBy {
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
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      linkURL
      videoURL
      photoPosted
      createdAt
    }
    likes {
      items {
        id
      }
      nextToken
    }
    text
    createdAt
  }
}
`;
export const createPostLike = `mutation CreatePostLike($input: CreatePostLikeInput!) {
  createPostLike(input: $input) {
    id
    likedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    post {
      id
      postedBy {
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
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      linkURL
      videoURL
      photoPosted
      createdAt
    }
    comment {
      id
      postedBy {
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
      post {
        id
        text
        linkURL
        videoURL
        photoPosted
        createdAt
      }
      likes {
        nextToken
      }
      text
      createdAt
    }
  }
}
`;
export const updatePostLike = `mutation UpdatePostLike($input: UpdatePostLikeInput!) {
  updatePostLike(input: $input) {
    id
    likedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    post {
      id
      postedBy {
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
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      linkURL
      videoURL
      photoPosted
      createdAt
    }
    comment {
      id
      postedBy {
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
      post {
        id
        text
        linkURL
        videoURL
        photoPosted
        createdAt
      }
      likes {
        nextToken
      }
      text
      createdAt
    }
  }
}
`;
export const deletePostLike = `mutation DeletePostLike($input: DeletePostLikeInput!) {
  deletePostLike(input: $input) {
    id
    likedBy {
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
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    post {
      id
      postedBy {
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
      comments {
        nextToken
      }
      likes {
        nextToken
      }
      linkURL
      videoURL
      photoPosted
      createdAt
    }
    comment {
      id
      postedBy {
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
      post {
        id
        text
        linkURL
        videoURL
        photoPosted
        createdAt
      }
      likes {
        nextToken
      }
      text
      createdAt
    }
  }
}
`;
export const createMentorApplication = `mutation CreateMentorApplication($input: CreateMentorApplicationInput!) {
  createMentorApplication(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    text
  }
}
`;
export const updateMentorApplication = `mutation UpdateMentorApplication($input: UpdateMentorApplicationInput!) {
  updateMentorApplication(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    text
  }
}
`;
export const deleteMentorApplication = `mutation DeleteMentorApplication($input: DeleteMentorApplicationInput!) {
  deleteMentorApplication(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    text
  }
}
`;
export const createUserChatroom = `mutation CreateUserChatroom($input: CreateUserChatroomInput!) {
  createUserChatroom(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    chatroom {
      id
      users {
        nextToken
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const updateUserChatroom = `mutation UpdateUserChatroom($input: UpdateUserChatroomInput!) {
  updateUserChatroom(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    chatroom {
      id
      users {
        nextToken
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const deleteUserChatroom = `mutation DeleteUserChatroom($input: DeleteUserChatroomInput!) {
  deleteUserChatroom(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    chatroom {
      id
      users {
        nextToken
      }
      messages {
        nextToken
      }
    }
  }
}
`;
export const createChatroom = `mutation CreateChatroom($input: CreateChatroomInput!) {
  createChatroom(input: $input) {
    id
    users {
      nextToken
    }
    messages {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
  }
}
`;
export const updateChatroom = `mutation UpdateChatroom($input: UpdateChatroomInput!) {
  updateChatroom(input: $input) {
    id
    users {
      nextToken
    }
    messages {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
  }
}
`;
export const deleteChatroom = `mutation DeleteChatroom($input: DeleteChatroomInput!) {
  deleteChatroom(input: $input) {
    id
    users {
      nextToken
    }
    messages {
      items {
        id
        text
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createChatroomMessage = `mutation CreateChatroomMessage($input: CreateChatroomMessageInput!) {
  createChatroomMessage(input: $input) {
    id
    text
    chatroom {
      id
      users {
        nextToken
      }
      messages {
        nextToken
      }
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
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
  }
}
`;
export const updateChatroomMessage = `mutation UpdateChatroomMessage($input: UpdateChatroomMessageInput!) {
  updateChatroomMessage(input: $input) {
    id
    text
    chatroom {
      id
      users {
        nextToken
      }
      messages {
        nextToken
      }
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
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
  }
}
`;
export const deleteChatroomMessage = `mutation DeleteChatroomMessage($input: DeleteChatroomMessageInput!) {
  deleteChatroomMessage(input: $input) {
    id
    text
    chatroom {
      id
      users {
        nextToken
      }
      messages {
        nextToken
      }
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
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
  }
}
`;
export const createNotification = `mutation CreateNotification($input: CreateNotificationInput!) {
  createNotification(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    createdAt
    type
  }
}
`;
export const updateNotification = `mutation UpdateNotification($input: UpdateNotificationInput!) {
  updateNotification(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    createdAt
    type
  }
}
`;
export const deleteNotification = `mutation DeleteNotification($input: DeleteNotificationInput!) {
  deleteNotification(input: $input) {
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
      interests {
        id
        label
      }
      connectionsAsMentee {
        nextToken
      }
      connectionsAsMentor {
        nextToken
      }
      matchesAsMentee {
        nextToken
      }
      matchesAsMentor {
        nextToken
      }
      requestsAsMentee {
        nextToken
      }
      requestsAsMentor {
        nextToken
      }
      requestsSent {
        nextToken
      }
      chatrooms {
        nextToken
      }
      notifications {
        nextToken
      }
      posts {
        nextToken
      }
      postComments {
        nextToken
      }
      mentorApplication {
        id
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
      likes {
        nextToken
      }
    }
    createdAt
    type
  }
}
`;
