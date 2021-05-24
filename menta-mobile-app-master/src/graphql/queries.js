/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getMatch = `query GetMatch($id: ID!) {
  getMatch(id: $id) {
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
export const listMatchs = `query ListMatchs(
  $filter: ModelMatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      deleted
    }
    nextToken
  }
}
`;
export const getRequest = `query GetRequest($id: ID!) {
  getRequest(id: $id) {
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
export const listRequests = `query ListRequests(
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
      }
      sentByUserType
      denied
      message
    }
    nextToken
  }
}
`;
export const getConnection = `query GetConnection($id: ID!) {
  getConnection(id: $id) {
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
export const listConnections = `query ListConnections(
  $filter: ModelConnectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
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
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPostComment = `query GetPostComment($id: ID!) {
  getPostComment(id: $id) {
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
export const listPostComments = `query ListPostComments(
  $filter: ModelPostCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPostLike = `query GetPostLike($id: ID!) {
  getPostLike(id: $id) {
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
export const listPostLikes = `query ListPostLikes(
  $filter: ModelPostLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      comment {
        id
        text
        createdAt
      }
    }
    nextToken
  }
}
`;
export const getMentorApplication = `query GetMentorApplication($id: ID!) {
  getMentorApplication(id: $id) {
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
export const listMentorApplications = `query ListMentorApplications(
  $filter: ModelMentorApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listMentorApplications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getUserChatroom = `query GetUserChatroom($id: ID!) {
  getUserChatroom(id: $id) {
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
export const listUserChatrooms = `query ListUserChatrooms(
  $filter: ModelUserChatroomFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      chatroom {
        id
      }
    }
    nextToken
  }
}
`;
export const getChatroom = `query GetChatroom($id: ID!) {
  getChatroom(id: $id) {
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
export const listChatrooms = `query ListChatrooms(
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
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getChatroomMessage = `query GetChatroomMessage($id: ID!) {
  getChatroomMessage(id: $id) {
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
export const listChatroomMessages = `query ListChatroomMessages(
  $filter: ModelChatroomMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatroomMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        photoLink
        coverLink
      }
    }
    nextToken
  }
}
`;
export const getNotification = `query GetNotification($id: ID!) {
  getNotification(id: $id) {
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
export const listNotifications = `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      type
    }
    nextToken
  }
}
`;
