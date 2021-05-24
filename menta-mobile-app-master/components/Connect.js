import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Group, FlatList, AsyncStorage, ActivityIndicator, RefreshControl, ScrollView} from 'react-native'
import { Tabs, Tab, Icon, } from 'react-native-elements'
import Amplify, { Auth, Hub, Analytics, API, graphqlOperation, Cache, Storage } from 'aws-amplify';

import { Button, ThemeProvider, Header, Avatar, ButtonGroup, Container, ListItem, Card, Text, Badge } from 'react-native-elements'
import ConnectMatches from './ConnectMatches';
import ProfileView from './ProfileView';
// import { ScrollView } from 'react-native-gesture-handler';

import { onCreateRequest, onCreateConnection } from '../src/graphql/subscriptions'

import { getLocalUserId, getLocalUserData } from '../functions/async-storage'


import { createMatchesFromMentors, getMatchesForMentee, getMatchesForMentor, getRequestsSent, getRequestsRecieved, getConnections } from '../functions/connect'

const Connect = props => {
  const [userData, setUserData] = useState(null)
  const [matchesForMentee, setMatchesForMentee] = useState(null);
  const [matchesForMentor, setMatchesForMentor] = useState(null);
  const [requestsSent, setRequestsSent] = useState(null);
  const [requestsRecieved, setRequestsRecieved] = useState(null);
  const [connections, setConnections] = useState(null);

  const [loadingMatchesForMentee, setLoadingMatchesForMentee] = useState(true);
  const [loadingMatchesForMentor, setLoadingMatchesForMentor] = useState(true);
  const [loadingRequestsSent, setLoadingRequestsSent] = useState(true);
  const [loadingRequestsRecieved, setLoadingRequestsRecieved] = useState(true);
  const [loadingConnections, setLoadingConnections] = useState(true);

  const [refreshing, setRefreshing] = React.useState(false);



  useEffect(() => {
    refreshData()
    handleGetUserData()
    const createNewRequestListener = API.graphql(graphqlOperation(onCreateRequest)).subscribe({
      next: data => {
        refreshData()
      }
    });

    const createNewConnectionListener = API.graphql(graphqlOperation(onCreateConnection)).subscribe({
      next: data => {
        refreshData()
      }
    });
    return () => {
      createNewRequestListener.unsubscribe()
      createNewConnectionListener.unsubscribe()
    };
  }, [])

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
      // resolve(refreshData())
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refreshData()
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const handleGetUserData = async () => {
    const result = await getLocalUserData();
    setUserData(result)
  }

  const refreshData = async () => {
    handleGetMatchesForMentee()
    handleGetMatchesForMentor()
    handleGetRequestsSent()
    handleGetRequestsRecieved()
    handleGetConnections()
  }



  const handleGetMatchesForMentee = async () => {
    setLoadingMatchesForMentee(true)
    await getMatchesForMentee().then((data) => {
      setMatchesForMentee(data)
      setLoadingMatchesForMentee(false)
    });
    // console.log('MATCHES FOR MENTEE', {result})

  }

  const handleGetMatchesForMentor = async () => {
    setLoadingMatchesForMentor(true)
    await getMatchesForMentor().then((data) => {
      setMatchesForMentor(data)
      setLoadingMatchesForMentor(false)

    });
    // console.log('MATCHES FOR MENTOR', {result})
  }

  const handleGetRequestsSent = async () => {
    setLoadingRequestsSent(true)
    await getRequestsSent().then((data) => {
      setRequestsSent(data)
      setLoadingRequestsSent(false)
    });
  }

  const handleGetRequestsRecieved = async () => {
    setLoadingRequestsRecieved(true)
    await getRequestsRecieved().then((data) => {
      setRequestsRecieved(data)
      setLoadingRequestsRecieved(false)
    })
  }

  const handleGetConnections = async () => {
    setLoadingConnections(true)
    await getConnections().then((data) => {
      setConnections(data)
      setLoadingConnections(false)
    });

  }

  //matchesForMentee && matchesForMentor && requestsSent && requestsRecieved && connections &&
  return (
    <>
      <ScrollView 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentConatinerStyle={styles.page}>


        <View style={styles.mainCard}>
          <Card
            title='Find a Mentor'
          // titleStyle={styles.cardTi  tleStyle}
          >

            <Button
              title="Matches"
              style={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={{color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold'}}
              iconRight
              onPress={() => props.navigation.navigate('ConnectMatches', { matches: matchesForMentee, userType: 'mentee', refreshData })}
              // disabled={loadingMatchesForMentee}
              icon={
                (loadingMatchesForMentee ?
                  <ActivityIndicator style={{ marginLeft: 10 }} />
                  : <Badge
                    value={matchesForMentee && matchesForMentee.length}
                    badgeStyle={styles.badgeStyle}
                    textStyle={styles.badgeTextStyle}
                    containerStyle={styles.badgeContainerStyle}
                  />)

              }
            />

          </Card>
          {userData && userData.mentor && (
            <Card title='Find a Mentee'>
              <Button
                title="Mentees Matched With Me"
                titleStyle={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold'
                }}
                style={styles.buttonContainer}
                iconRight
                buttonStyle={styles.buttonStyle}
                // onPress={() => props.navigation.navigate('ConnectMenteeMatches')}
                // onPress={() => createMatchesFromMentors()}
                onPress={() => props.navigation.navigate('ConnectMatches', { matches: matchesForMentor, userType: 'mentor', refreshData })}


                icon={
                  (loadingMatchesForMentor ?
                    <ActivityIndicator style={{ marginLeft: 10 }} />
                    :
                    <Badge
                      value={matchesForMentor && matchesForMentor.length}
                      badgeStyle={styles.badgeStyle}
                      textStyle={styles.badgeTextStyle}
                      containerStyle={styles.badgeContainerStyle}
                    />
                  )
                }
              />

            </Card>

          )}

          <Card>
            <Button
              title="Requests Sent"
              style={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold'
              }}
              onPress={() => props.navigation.navigate('ConnectRequestsSent', { requestsSent, refreshData })}
              icon={
                (loadingRequestsSent ?
                  <ActivityIndicator style={{ marginLeft: 10 }} />
                  :
                  <Badge
                    value={requestsSent && requestsSent.length}
                    badgeStyle={styles.badgeStyle}
                    textStyle={styles.badgeTextStyle}
                    containerStyle={styles.badgeContainerStyle}
                  />
                )
              }
              iconRight
            />
            <Button
              title="Requests Recieved"
              style={styles.buttonContainer}
              iconRight
              titleStyle={{color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold'}}
              buttonStyle={styles.buttonStyle}
              onPress={() => props.navigation.navigate('ConnectRequestsReceived', { requestsRecieved, refreshData })}
              icon={
                (loadingRequestsRecieved ?
                  <ActivityIndicator style={{ marginLeft: 10 }} />
                  :
                  <Badge
                    value={requestsRecieved && requestsRecieved.length}
                    badgeStyle={styles.badgeStyle}
                    textStyle={styles.badgeTextStyle}
                    containerStyle={styles.badgeContainerStyle}
                  />
                )
              }
            />

          </Card>

          <Button
            title="All My Connections"
            style={styles.buttonContainer}
            iconRight
            buttonStyle={styles.buttonOutline}
            titleStyle={styles.buttonOutlineTitle}
            onPress={() => props.navigation.navigate('Connections', { connections })}
            type="clear"
            loading={loadingConnections}
            loadingStyle={{...styles.buttonContainer}}
            loadingProps={{color: '#7951A8'}}
          />

        </View>
      </ScrollView>

    </>)
  // ) : (
  //   <View>
  //     <ActivityIndicator/>
  //     <Text>Matching you with a mentor!</Text>
  //   </View>
  // )
};

const styles = StyleSheet.create({
  buttonGroup: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    bottom: 35,
    flex: 1

  },
  page: {
    // flexDirection: 'column-reverse',
    justifyContent: 'center',
    // flex: 1
  },
  mainCard: {
    paddingTop: 15,
    // flex: 2
  },
  header: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#7951A8',

  },
  buttonContainer: {
    margin: 10,
    // flexDirection: 'row'
  },
  buttonStyle: {
    borderRadius: 30,
    backgroundColor: '#7951A8',
    // alignSelf: 'center'
  },
  buttonOutlineTitle: {
    color: '#7951A8',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonOutline: {
    marginTop: 5,
    height: 45,
    flexDirection: 'row',
    width: 190,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#7951A8",
alignSelf: 'center'
  },
  badgeStyle: {
    backgroundColor: 'white'
  },
  badgeTextStyle: {
    color: '#7951A8',
    fontSize: 14,
    fontWeight: 'bold'
  },
  badgeContainerStyle: {
    alignSelf: 'auto',
    marginLeft: 10
  },
  cardTitleStyle: {
    color: '#7951A8'
  }

});

export default Connect;


// {list.map((l, i) => (
//   <ListItem
//     key={i}
//     leftAvatar={{ source: { uri: l.avatar_url } }}
//     title={l.name}
//     subtitle={l.subtitle}
//     bottomDivider
//   />
// ))}