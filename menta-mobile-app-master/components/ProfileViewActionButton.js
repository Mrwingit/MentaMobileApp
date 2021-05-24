import React, { Component, useState, useEffect } from 'react';

import { Button, ThemeProvider, Header, Avatar, ButtonGroup, Container, ListItem, Card, Text, Badge } from 'react-native-elements'
import { updateUser } from '../src/graphql/mutations'


import { sendRequest, addConnection } from '../functions/connect'

const ActionButton = props => {
  
  const [viewingUserData, setViewingUserData] = useState(null)

  const [actionData, setActionData] = useState({})

  const [loadingPositiveButton, setLoadingPostiveButton] = useState(false)

  useEffect(() => {
    handleSetActionText()
    handleGetViewingUserData()
return () => {

};
    
  }, [])

  const makeUserMentor = async () => {
    // setLoadingAdminUpdate(true)

    const input = {
      id: viewingUserData.id,
      mentor: true
    }

    const resultDynamoDB = await API.graphql(graphqlOperation(updateUser, { input }))
      .then((data) => {
        return data
      })
      .catch((err) => {
        return 'no-image'
      })

      return resultDynamoDB
  }

  const deleteMentorApplication = () => {

  }


  const handleGetViewingUserData = async () => {
    const result = props.viewingUserData
    console.log('here we go again... ', result)
    setViewingUserData(result)
    setTabsDisplayed(result.interests)
  }

  const actionFunction = async () => {
    if (props.actionType === 'positive') {
      if (props.pageRenderedFrom === 'ConnectMatches') {
        // sendRequest(props.viewingUserData.id, props.userType, props.viewingUserData.actionId).then(() =>{
        //   props.goBack()
        // })
        // props.openOverlay()
        props.gotoSubmitRequest()
      } else if (props.pageRenderedFrom === 'ConnectMenteeMatches') {
        // console.log('function to send do action')
        // sendRequest(props.viewingUserData.id, props.userType, props.viewingUserData.actionId).then(() =>{
        //   props.goBack()
        // })
        // props.openOverlay()
      } else if (props.pageRenderedFrom === 'ConnectRequestsRecieved') {
        // console.log('aaayyyyyeeee: ',props.viewingUserData.id, props.userType, props.viewingUserData.actionId)
        setLoadingPostiveButton(true)
        addConnection(props.viewingUserData.id, props.userType, props.viewingUserData.actionId).then(() =>{
          setLoadingPostiveButton(false)
          // Alert.alert('Congrats!',
          //   'Time to get to know your new connection!',
          //   [
          //       {
          //           text: 'OK', onPress: () => props.goBack()
          //       }
          //   ])
          props.goBack()
        })
      } else if (props.pageRenderedFrom === 'ConnectRequestsSent') {
        console.log('function to send do action')
      } else if (props.pageRenderedFrom === 'Connections') {
        props.gotoChat()

      } else if (props.pageRenderedFrom === 'ApproveMentors') {
        setLoadingPostiveButton(true)
        console.log('we out here')
        await makeUserMentor().then(() =>{
          setLoadingPostiveButton(false)
          props.goBack()
        })
      }
    } else {
      if (props.pageRenderedFrom === 'ConnectMatches') {
        console.log('function to send do action')
      } else if (props.pageRenderedFrom === 'ConnectMenteeMatches') {
        console.log('function to send do action')
      } else if (props.pageRenderedFrom === 'ConnectRequestsRecieved') {
        console.log('function to send do action')
      } else if (props.pageRenderedFrom === 'ConnectRequestsSent') {
        console.log('function to send do action')
      } else if (props.pageRenderedFrom === 'ApproveMentors') {
        console.log('function to send do action')

      }
    }
    
  }

  const handleSetActionText = (name) => {
    if (props.actionType === 'positive') {
      if (props.pageRenderedFrom === 'ConnectMatches') {
        setActionData({
          text: `Send Request`,
          disabled: false,
          color: 'blue',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'ConnectMenteeMatches') {
        setActionData({
          text: 'Send Request',
          disabled: false,
          color: 'blue',
          icon: ''
        })      
      } else if (props.pageRenderedFrom === 'ConnectRequestsRecieved') {
        setActionData({
          text: 'Accept Request',
          disabled: false,
          color: 'green',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'ConnectRequestsSent') {
        setActionData({
          text: 'Waiting...',
          disabled: true,
          color: 'grey',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'Connections') {
        setActionData({
          text: 'Chat',
          disabled: false,
          color: 'green',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'ApproveMentors') {
        setActionData({
          text: 'Approve',
          disabled: false,
          color: 'green',
          icon: ''
        })
      }
    } else {
      if (props.pageRenderedFrom === 'ConnectMatches') {
        setActionData({
          text: 'Delete Match',
          disabled: false,
          color: 'red',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'ConnectMenteeMatches') {
        setActionData({
          text: 'Delete Match',
          disabled: false,
          color: 'red',
          icon: ''
        })      
      } else if (props.pageRenderedFrom === 'ConnectRequestsRecieved') {
        setActionData({
          text: 'Delete Request',
          disabled: false,
          color: 'red',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'ConnectRequestsSent') {
        setActionData({
          text: 'Delete Request',
          disabled: false,
          color: 'red',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'Connections') {
        setActionData({
          text: 'Delete Connection',
          disabled: false,
          color: 'red',
          icon: ''
        })
      } else if (props.pageRenderedFrom === 'ApproveMentors') {
        setActionData({
          text: 'Deny',
          disabled: false,
          color: 'red',
          icon: ''
        })
      }
    }
  }

  
  return viewingUserData && props.actionType === 'positive' ? (
    <>
    <Button
    title={actionData.text}
    disabled={actionData.disabled}
    buttonStyle={{marginTop: 5,
      height: 45,
      flexDirection: 'row',
      width: 170,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 30,
      backgroundColor: "green",
      marginLeft: 10,
      marginRight: 10,}}
      titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 15}}
    onPress={() => actionFunction(viewingUserData.firstName)}
    loading={loadingPositiveButton}
    loadingStyle={{marginTop: 5,
      height: 45,
      flexDirection: 'row',
      width: 170,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 30,
      backgroundColor: "green",
      marginLeft: 10,
      marginRight: 10,
    }}
    loadingProps={{color: 'white'}}
    />
    </>

  ) : viewingUserData && (
    <>
    <Button
    title={actionData.text}
    disabled={actionData.disabled}
    buttonStyle={{marginTop: 5,
      height: 45,
      flexDirection: 'row',
      width: 170,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 30,
      backgroundColor: "white",
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 3,
      borderColor: "red",
    }}
    titleStyle={{color: 'red', fontWeight: 'bold', fontSize: 15}}
    onPress={() => actionFunction(viewingUserData.firstName)}
    />
    </>
  )
}

export default ActionButton