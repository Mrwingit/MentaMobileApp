import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
// import { Tabs, Tab, Icon } from 'react-native-elements'
// import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'
// import { Container, Text } from 'native-base';
// import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


const TabBar = props => {



  return (
    <View style={styles.page}>
      <Container >
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTab}>
            <Button 
              onPress={() => props.updateCurrentPageHandeler('connect')}
              active={props.currentPage === 'connect'}
              vertical
            >
              <Icon name="person-add" />
              <Text>Connect</Text>
            </Button>
            <Button 
              vertical
              onPress={() => props.updateCurrentPageHandeler('chat')}
              active={props.currentPage === 'chat'}
            >
              <Icon name="chatboxes" />
              <Text>Chat</Text>
            </Button>
            <Button 
              vertical 
              onPress={() => props.updateCurrentPageHandeler('feed')}
              active={props.currentPage === 'feed'}
              >
              <Icon active name="list" />
              <Text>Feed</Text>
            </Button>
            <Button 
            vertical
            onPress={() => props.updateCurrentPageHandeler('profile')}
              active={props.currentPage === 'profile'}
            >
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>  
      </View>
      )

};

const styles = StyleSheet.create({

  footerTab: {
      paddingTop: 0

  },
  footer: {
    // margin: 'auto',
    // textAlign: 'center',
    // paddingTop: 50,
    // justifyContent: 'center', 
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    // flex: 1,

    // height: '10%',
    // width: '100%',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    bottom: 0,
    // justifyContent: 'flex-end',
    // display: 'flex'


    // backgroundColor:'transparent'
    // bottom:0
    position: 'absolute',
    



  }, 
  page: {
    flex: 1,
    // alignItems: 'center',

    // paddingTop: -30,
  justifyContent: 'flex-end',
  // marginBottom: 36
  }
});

export default TabBar;