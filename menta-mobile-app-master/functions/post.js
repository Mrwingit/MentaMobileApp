import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';
import { getUser, listUsers, listRequests, listPosts } from '../src/graphql/queries'
import { createMatch, createRequest, updateMatch, createConnection, createChatroomMessage } from '../src/graphql/mutations'
import { CacheManager } from "react-native-expo-image-cache";

import { Promise } from 'bluebird';
import _ from 'lodash';

import { getLocalUserId, getLocalUserData } from './async-storage'
import { getCurrentUserData, getPhotoURL, getFeedPhotoURL } from './amplify';

import LinkPreview from 'link-preview-js';



export const likePost = async () => {

}

export const likeComment = async () => {

}

export const addNewPost = async (text, photoPosted, linkURL, postId) => {
  const createPost = `mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      postedBy {
        id
      }
      text
      linkURL
      videoURL
      photoPosted
    }
  }
  `;

  const userId = await getLocalUserId();

  const input = {
    id: postId,
    postPostedById: userId,
    text,
    photoPosted,
    linkURL: linkURL ? linkURL : 'no link'
  }

  // if (linkURL) {
  //   input = { ...input, linkURL }
  // }

  console.log({ input })

  const result = await API.graphql(graphqlOperation(createPost, { input }))
    .then((data) => {
      console.log('addNewPost: successfully added post ', postId)
      return data
    })
    .catch((err) => {
      console.log('addNewPost: error adding post ', postId, err)
      return null
    });

  return result;


}

export const addNewComment = async (text, postCommentPostId) => {
  const createPostComment = `mutation CreatePostComment($input: CreatePostCommentInput!) {
    createPostComment(input: $input) {
      id
      postedBy {
        id
      }
      text
      post {
        id
      }
    }
  }
  `;

  const userId = await getLocalUserId();

  const input = {
    postCommentPostedById: userId,
    text,
    postCommentPostId
  }

  // if (linkURL) {
  //   input = { ...input, linkURL }
  // }

  console.log({ input })

  const result = await API.graphql(graphqlOperation(createPostComment, { input }))
    .then((data) => {
      console.log('addNewComment: successfully added new comment for post', postCommentPostId)
      return data
    })
    .catch((err) => {
      console.log('addNewPost: error adding post comment for post', postCommentPostId, err)
      return null
    });

  return result;


}

export const addNewLike = async (postLikePostId, postLikeCommentId) => {
  const createPostLike = `mutation CreatePostLike($input: CreatePostLikeInput!) {
    createPostLike(input: $input) {
      id
      likedBy {
        id
      }
      post {
        id
      }
      comment {
        id
      }
    }
  }
  `;

  const userId = await getLocalUserId();


  const input = {
    postLikeLikedById: userId,
    postLikePostId,
    postLikeCommentId
  }

  const result = await API.graphql(graphqlOperation(createPostLike, { input }))
    .then((data) => {
      console.log('addNewLike: successfully added like to post or comment', postLikePostId || postLikeCommentId)
      return data
    })
    .catch((err) => {
      console.log('addNewLike: error liking post or comment', postLikePostId || postLikeCommentId, err)
      return null
    });

    return result


}

export const removeLike = async (postLikePostId, postLikeCommentId) => {
  const deletePostLike = `mutation DeletePostLike($input: CreatePostLikeInput!) {
    createPostLike(input: $input) {
      id
      likedBy {
        id
      }
      post {
        id
      }
      comment {
        id
      }
    }
  }
  `;

  const userId = await getLocalUserId();


  const input = {
    postLikeLikedById: userId,
    postLikePostId,
    postLikeCommentId
  }

  const result = await API.graphql(graphqlOperation(createPostLike, { input }))
    .then((data) => {
      console.log('addNewLike: successfully added like to post or comment', postLikePostId || postLikeCommentId)
      return data
    })
    .catch((err) => {
      console.log('addNewLike: error liking post or comment', postLikePostId || postLikeCommentId, err)
      return null
    });

    return result


}

export const getUserLikesArray = async () => {
  const getUser = `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      likes {
        items {
          id
          post {
            id
          }
          comment {
            id
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
      console.log('gerUserLikesArray: successfully got user likes', data)
      return data
    })
    .catch((err) => {
      console.log('gerUserLikesArray: error getting user likes', err)
      return null
    });

    const returnPromise = await Promise.map(result.data.getUser.likes.items, async (item) => {
      return item.post ? item.post.id : item.comment.id;
  })
    return returnPromise
}

export const addPostPhoto = async () => {

}

export const uploadFeedPhotoToStorage = async (pathToImageFile, postId) => {
  try {
    const response = await fetch(pathToImageFile)

    const blob = await response.blob()

    // const userId = await getLocalUserId()

    const result = await Storage.put(`feed-${postId}.jpeg`, blob, {
      contentType: 'image/jpeg',
    }).then(async data => {
      // console.log('success!!!!!!!!');
      console.log({ data })
      const result = await Storage.get(`feed-${postId}.jpeg`).then(async data => {
        const path = await CacheManager.get(data).getPath();
        console.log({ path })
        return path
      });

      return result
    })

    return result
  } catch (err) {
    console.log(err)
  }
}

export const getFeedPosts = async () => {
  console.log('were here')

  const userId = await getLocalUserId();
console.log('were here')

  const result = await API.graphql(graphqlOperation(getUserPosts, { id: userId }))
    .then((data) => {
      console.log('getFeedPosts: successfully queried user\'s feed posts')
      return data
    })
    .catch((err) => {
      console.log('getFeedPosts: error querying user\'s feed posts ->', err)
      return null
    });

  const userPosts = result.data.getUser.posts.items.length > 0 ? result.data.getUser.posts.items : null;

  const userMentorPosts = await Promise.map(result.data.getUser.connectionsAsMentor.items, async (item) => {
      return item.mentee.posts.items.length > 0 ? item.mentee.posts.items : null;
    
  })

  const userMenteePosts = await Promise.map(result.data.getUser.connectionsAsMentee.items, async (item) => {
    return item.mentor.posts.items.length > 0 ? item.mentor.posts.items : null;

  })

  const p1 = [].concat(...userMenteePosts).filter((e) => e)
  const p2 = [].concat(...userMentorPosts).filter((e) => e)

  const postsArray = await _.union(userPosts, p1, p2)
  

  const postsArrayWithProfileImages = await Promise.map(postsArray, async (item) => {
    const profileImage = await getPhotoURL(item.postedBy.id)
    console.log('i am here 1')

    const imageURL = item.photoPosted ? await getFeedPhotoURL(item.id) : null;
    console.log('i am here 2')

    const linkPreview = item.linkURL !== 'no link' ? await LinkPreview.getPreview(item.linkURL).then(data => data) : null
    console.log('i am here 3')
    return { ...item, imageURL, profileImage, linkPreview }
  })

  return postsArrayWithProfileImages


}


const getUserPosts = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    connectionsAsMentee {
      items {
        id
        mentor {
          id
          firstName
          lastName
          posts {
            items {
              id
              postedBy {
                id
                firstName
                lastName
              }
              comments {
                items {
                  id
                  createdAt
                  postedBy {
                    id
                    firstName
                    lastName
                  }
                  post {
                    id
                  }
                  likes{
                    items {
                      id
                    }
                    nextToken
                  }
                  text
                }
                nextToken
              }
              likes{
                items {
                  id
                }
                nextToken
              }
              createdAt
              text
              linkURL
              videoURL
              photoPosted
            }
            nextToken
          }
        }
      }
      nextToken
    }
    connectionsAsMentor {
      items {
        id
        mentee {
          id
          firstName
          lastName
          posts {
            items {
              id
              postedBy {
                id
                firstName
                lastName
              }
              comments {
                items {
                  id
                  createdAt
                  postedBy {
                    id
                    firstName
                    lastName
                  }
                  post {
                    id
                  }
                  likes{
                    items {
                      id
                    }
                    nextToken
                  }
                  text
                }
                nextToken
              }
              likes{
                items {
                  id
                }
                nextToken
              }
              createdAt
              text
              linkURL
              videoURL
              photoPosted
            }
            nextToken
          }
        }
      }
      nextToken
    }
    posts {
      items {
        id
        comments {
          items {
            id
            createdAt
            postedBy {
              id
              firstName
              lastName
            }
            post {
              id
            }
            likes{
              items {
                id
              }
              nextToken
            }
            text
          }
          nextToken
        }
        likes{
          items {
            id
          }
          nextToken
        }
        postedBy {
          id
          firstName
          lastName
        }
        createdAt
        text
        linkURL
        videoURL
        photoPosted
      }
      nextToken
    }
  }
}
`;

