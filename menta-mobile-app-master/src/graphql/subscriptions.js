/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateMatch = `subscription OnCreateMatch {
  onCreateMatch {
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
export const onUpdateMatch = `subscription OnUpdateMatch {
  onUpdateMatch {
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
export const onDeleteMatch = `subscription OnDeleteMatch {
  onDeleteMatch {
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
export const onCreateRequest = `subscription OnCreateRequest {
  onCreateRequest {
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
export const onUpdateRequest = `subscription OnUpdateRequest {
  onUpdateRequest {
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
export const onDeleteRequest = `subscription OnDeleteRequest {
  onDeleteRequest {
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
export const onCreateConnection = `subscription OnCreateConnection {
  onCreateConnection {
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
export const onUpdateConnection = `subscription OnUpdateConnection {
  onUpdateConnection {
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
export const onDeleteConnection = `subscription OnDeleteConnection {
  onDeleteConnection {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreatePostComment = `subscription OnCreatePostComment {
  onCreatePostComment {
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
export const onUpdatePostComment = `subscription OnUpdatePostComment {
  onUpdatePostComment {
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
export const onDeletePostComment = `subscription OnDeletePostComment {
  onDeletePostComment {
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
export const onCreatePostLike = `subscription OnCreatePostLike {
  onCreatePostLike {
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
export const onUpdatePostLike = `subscription OnUpdatePostLike {
  onUpdatePostLike {
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
export const onDeletePostLike = `subscription OnDeletePostLike {
  onDeletePostLike {
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
export const onCreateMentorApplication = `subscription OnCreateMentorApplication {
  onCreateMentorApplication {
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
export const onUpdateMentorApplication = `subscription OnUpdateMentorApplication {
  onUpdateMentorApplication {
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
export const onDeleteMentorApplication = `subscription OnDeleteMentorApplication {
  onDeleteMentorApplication {
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
export const onCreateUserChatroom = `subscription OnCreateUserChatroom {
  onCreateUserChatroom {
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
export const onUpdateUserChatroom = `subscription OnUpdateUserChatroom {
  onUpdateUserChatroom {
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
export const onDeleteUserChatroom = `subscription OnDeleteUserChatroom {
  onDeleteUserChatroom {
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
export const onCreateChatroom = `subscription OnCreateChatroom {
  onCreateChatroom {
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
export const onUpdateChatroom = `subscription OnUpdateChatroom {
  onUpdateChatroom {
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
export const onDeleteChatroom = `subscription OnDeleteChatroom {
  onDeleteChatroom {
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
export const onCreateChatroomMessage = `subscription OnCreateChatroomMessage {
  onCreateChatroomMessage {
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
export const onUpdateChatroomMessage = `subscription OnUpdateChatroomMessage {
  onUpdateChatroomMessage {
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
export const onDeleteChatroomMessage = `subscription OnDeleteChatroomMessage {
  onDeleteChatroomMessage {
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
export const onCreateNotification = `subscription OnCreateNotification {
  onCreateNotification {
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
export const onUpdateNotification = `subscription OnUpdateNotification {
  onUpdateNotification {
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
export const onDeleteNotification = `subscription OnDeleteNotification {
  onDeleteNotification {
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
