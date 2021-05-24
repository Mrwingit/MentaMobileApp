import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage, Text } from 'react-native'
// import { Tabs, Tab, Icon } from 'react-native-elements'
import { ThemeProvider, Header, Avatar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

import { DrawerItems,createDrawerNavigator } from 'react-navigation-drawer';
import {  SafeAreaView } from 'react-navigation';

const OptionsDrawer = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Text
        onPress={async () => {
          await AsyncStorage.clear();
          props.navigation.navigate('Auth');
        }}
      >Sign Out</Text>
    </SafeAreaView>
  </ScrollView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default OptionsDrawer;