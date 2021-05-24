import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AsyncStorage, ScrollView } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar, Text, Image, ListItem } from 'react-native-elements'


const ResumeModal = props => {
  // const [selectedTab, setSelectedTab] = useState('profile');

  useEffect(() => {
    console.log({props})
    
  })

  // const signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Auth');
  // };

  

  return (
    <ScrollView contantContainerStyle={styles.page}>
      {/* <Avatar 
        rounded
        size="xlarge"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      /> */}
      <View style={styles.text}>

<Text h2>{props.navigation.state.params.fullname}</Text>
{/* <Image
  source={require('../assets/Resume.png')}
  // style={{ width: 200, height: 200 }}
/> */}
<Text> </Text>

<Text h4 h4Style={{marginBottom: 7}}>Education</Text>
<Text>Bachelor of Science, Computer Science </Text>
<Text>Bachelor of Science, Entrepreneurship</Text>
<Text> </Text>
<Text h4 h4Style={{marginBottom: 7}}>Skills</Text>
<Text>I have held various leadership positions in many different environments throughout my life and I possess strong written and verbal communication skills. I have real world experience with Agile and Scrum methodology as well as architecting scalable software systems from the ground up. I have used GitHub extensively for version control and to build continuous integration-into various projects. Technologically, I am very proficient in Python, JavaScript and Node.js. I also have vast experience with AWS. Especially AWS Lambda, AWS SAM, EC2, API Gateway, AWS Amplify and DynamoDB, as well familiarity with many other AWS services. I also have experience with Java, C#, C, GraphQL, SQL, mySQL, MongoDB and server-less architecture. </Text>
<Text h4 h4Style={{marginTop: 10}}>Experience</Text>


</View>
<View>
<ListItem
title={'Teaching Assistant / Student Researcher'}
subtitle={'Digital Data Streams (DDS) Lab at LSU'}
subtitleStyle={{color: 'grey'}}
rightSubtitle={'Jan \'18 - Pres.'}
/>
<ListItem
title={'Software Engineer Intern'}
subtitle={'Tplus Research Center '}
subtitleStyle={{color: 'grey'}}
rightSubtitle={'Jan \'19 - Aug \'19'}
/>
<ListItem
title={'IT Intern'}
subtitle={'Chevron'}
subtitleStyle={{color: 'grey'}}
rightSubtitle={'Jan \'18 - Aug \'18'}
/>
</View>

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  page: {
    margin: 20,
    textAlign: 'center',
    paddingTop: 50,
    justifyContent: 'center', 
    alignItems: 'center'

  },
  text: {
    margin: 20,
    textAlign: 'center',
    alignItems: 'center'

  }
});

export default ResumeModal;