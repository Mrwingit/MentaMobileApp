import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Image } from 'react-native-elements'

// const MentaLogo = () => {
//   return (
//     <Image 
//         source={
//           require('../assets/menta.png')
//         }
//         style={{ width: 125, height: 30 }}
//       />
//   )
// }

const MenuBar = props => {
  // const [selectedTab, setSelectedTab] = useState('profile');


  return (
    <View>
      {props.currentPage == 'profile' ? (
        <Header backgroundColor={'#7951A8'}
        rightComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: props.currentPage, style: { color: '#fff', fontSize: 25 } }}
        // leftComponent={<MentaLogo/>}
      />
      ) : (
        <Header
          backgroundColor={'#7951A8'}
          centerComponent={{ text: props.currentPage, style: { color: '#fff', fontSize: 25} }}
        />
      )}
      
    </View>
  )};

export default MenuBar;