import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
// import { Tabs, Tab, Icon } from 'react-native-elements'
import { ThemeProvider, Header, Avatar, Badge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-navigation';

import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';


import Chats from './Chats'
import ChatConversation from './ChatConversation'
import ChatConversationHooks from './ChatConversationHooks'
import ManageAdmins from './ManageAdmins'
import Connect from './Connect'
import ConnectMatches from './ConnectMatches'
import ConnectRequestsReceived from './ConnectRequestsReceived'
import ConnectRequestsSent from './ConnectRequestsSent'
import ConnectMenteeMatches from './ConnectMenteeMatches'
import Feed from './Feed'
import Profile from './Profile'
import Menu from './Menu'
import Settings from './Settings'
import SubmitMentorApp from './SubmitMentorApp'
import ApproveMentors from './ApproveMentors'
import ApproveMentorsProfile from './ApproveMentorsProfile'
import ProfileViewApproveMentors from './ProfileViewApproveMentors'

import Connections from './Connections'
import ProfileView3 from './ProfileView3'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignUpConfirm from './SignUpConfirm'
import ForgotPassword from './ForgotPassword'
import UserRegistration from './UserRegistration'
import RegistrationFiles from './RegistrationFiles'
import RegistrationInterests from './RegistrationInterests'
import AuthLoading from './AuthLoading'
import Notifications from './Notifications'
import FeedComment from './FeedComment'
import PostFeed from './PostFeed2'
import FeedCommentPost from './FeedCommentPost'
import UpdateRegistration from './UpdateRegistration'
import UpdateInterests from './UpdateInterests'
import LottieTest from './LottieTest'
import Resume from './Resume'
import SubmitRequest from './SubmitRequest'









const ConnectStack = createStackNavigator({
  Connect: {
    screen: Connect,
    navigationOptions: ({ navigation }) => ({
      title: 'Connect',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
      // headerRight: (
      //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      //     <Item 
      //       buttonStyle={{color: 'white'}} 
      //       title="search" 
      //       ButtonElement={<Badge 
      //         value="33" 
      //         textStyle={{color: '#7951A8'}} 
      //         badgeStyle={{backgroundColor: '#fff'}}
      //         containerStyle={{marginRight: 10}} />} 
      //       onPress={()=> console.log('press')} 
      //       container
      //       />            
      //   </HeaderButtons>
      // ),
    })
  },
  ProfileView: {
    screen: ProfileView3,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  ConnectMatches: {
    screen: ConnectMatches,
    navigationOptions: {
      title: 'Matches',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  ConnectRequestsReceived: {
    screen: ConnectRequestsReceived,
    navigationOptions: {
      title: 'Requests Received',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  SubmitRequest: {
    screen: SubmitRequest,
    navigationOptions: ({navigation}) => ({
      title: `Send Request to ${navigation.state.params.firstName}`,
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  ConnectRequestsSent: {
    screen: ConnectRequestsSent,
    navigationOptions: {
      title: 'Requests Sent',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  ConnectMenteeMatches: {
    screen: ConnectMenteeMatches,
    navigationOptions: {
      title: 'Mentee Matches',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  Connections: {
    screen: Connections,
    navigationOptions: ({ navigation }) => ({
      title: 'Connections',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
});

const ChatsStack = createStackNavigator({
  Chats: {
    screen: Chats,
    navigationOptions: {
      title: 'Chats',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  ChatConversation: {
    screen: ChatConversation,
    navigationOptions: {
      title: 'Conversation',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  ChatConversationHooks: {
    screen: ChatConversationHooks,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
      // headerRight: (
      //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      //     <Item 
      //       buttonStyle={{color: 'white'}} 
      //       title="search" 
      //       ButtonElement={
      //         <Avatar 
      //         rounded
      //         size="small"
      //         source={{
      //           uri:
      //             'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      //         }}
      //       />
      //       } 
      //       onPress={()=> console.log('press')} 
      //       container
      //       />            
      //   </HeaderButtons>
      // ),
      headerRight: (
        <View style={{ marginRight: 10, marginBottom: 10 }}>
          <Avatar
            rounded
            size="small"
            source={{
              uri:
                navigation.state.params.photoURL,
            }}

          />
        </View>

      )
      // headerTitle: (
      //   <View>
      //   <Avatar 
      //         rounded
      //         size="xsmall"
      //         source={{
      //           uri:
      //             'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      //         }}
      //       />
      //       <Text>Ian Andrepont</Text>
      //       </View>
      // )
    })
  }
});

const NotificationsStack = createStackNavigator({
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  }
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      title: 'Feed',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerRight: (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            buttonStyle={{ color: 'white', paddingRight: 15 }}
            title="search"
            ButtonElement={<Icon
              name='add'
              // type='font-awesome'
              style={{ color: 'white', paddingRight: 15 }}
              color='white' />

            }
            onPress={() => navigation.navigate('PostFeed')}
            container
          />
        </HeaderButtons>
      ),
      headerTintColor: '#fff',
    })
  },
  FeedComment: {
    screen: FeedComment,
    navigationOptions: ({ navigation }) => ({
      title: 'Comment',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
      headerRight: (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            buttonStyle={{ color: 'white', paddingRight: 15 }}
            title="search"
            ButtonElement={<Icon
              name='add'
              // type='font-awesome'
              style={{ color: 'white', paddingRight: 15 }}
              color='white' />

            }
            onPress={() => navigation.navigate('FeedCommentPost', {postId: navigation.state.params.postId})}
            container
          />
        </HeaderButtons>
      )
    })
  },
  PostFeed: {
    screen: PostFeed,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  FeedCommentPost: {
    screen: FeedCommentPost,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },

});

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);

const MenuStack = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      title: 'Menu',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  ProfileViewApproveMentors: {
    screen: ProfileViewApproveMentors,
    navigationOptions: ({ navigation }) => ({
      title: 'Approve Mentor',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  SubmitMentorApp: {
    screen: SubmitMentorApp,
    navigationOptions: ({ navigation }) => ({
      title: 'Submit Application',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  // SubmitMentorApp: {
  //   screen: SubmitMentorApp,
  //   navigationOptions: ({ navigation }) => ({
  //     title: 'Submit Application',
  //     headerStyle: {
  //       backgroundColor: '#7951A8',
  //     },
  //     headerTintColor: '#fff',
  //   })
  // },
  ApproveMentors: {
    screen: ApproveMentors,
    navigationOptions: ({ navigation }) => ({
      title: 'Approve Mentors',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
      // headerRight: (
      //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      //     <Item
      //       buttonStyle={{ color: 'white' }}
      //       title="search"
      //       ButtonElement={<Badge
      //         value="33"
      //         textStyle={{ color: '#7951A8' }}
      //         badgeStyle={{ backgroundColor: '#fff' }}
      //         containerStyle={{ marginRight: 10 }} />}
      //       onPress={() => console.log('press')}
      //       container
      //     />
      //   </HeaderButtons>
      // ),
      drawerPosition: 'right'
    })
  },
  ApproveMentorsProfile: {
    screen: ApproveMentorsProfile,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  ManageAdmins: {
    screen: ManageAdmins,
    navigationOptions: ({ navigation }) => ({
      title: 'Manage Admins',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  Lottie: {
    screen: LottieTest,
    navigationOptions: ({ navigation }) => ({
      title: 'Lottie',
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  UpdateRegistration: {
    screen: UpdateRegistration,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Profile Info',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  UpdateInterests: {
    screen: UpdateInterests,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Interest',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  RegistrationInterests2: {
    screen: RegistrationInterests,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Interest',
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
  Resume: {
    screen: Resume,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Resume`,
      headerTitleStyle: {fontWeight: 'bold'},
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    })
  },
});


const TabNavigator = createBottomTabNavigator({
  Connect: ConnectStack,
  Chats: ChatsStack,
  Feed: FeedStack,
  // Notifications: NotificationsStack,
  Menu: MenuStack
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Connect') {
          iconName = `md-person-add`;

          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = ConnectIconWithBadge;
        } else if (routeName === 'Chats') {
          iconName = `ios-chatboxes`;
        } else if (routeName === 'Feed') {
          iconName = `ios-paper`;
        } else if (routeName === 'Menu') {
          iconName = `ios-menu`;
        } else if (routeName === 'Notifications') {
          iconName = `ios-notifications`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
        // return <Icon name={iconName} color={tintColor} />;

      },
    }),
    tabBarOptions: {
      activeTintColor: '#7951A8',
      inactiveTintColor: 'gray',
      // showLabel: false,
      showIcon: true
    },
  });


const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }

  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  SignUpConfirm: {
    screen: SignUpConfirm,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  UserRegistration: {
    screen: UserRegistration,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  RegistrationFiles: {
    screen: RegistrationFiles,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
  RegistrationInterests: {
    screen: RegistrationInterests,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#7951A8',
      },
      headerTintColor: '#fff',
    }
  },
});




// export default createAppContainer(TabNavigator);
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: TabNavigator,
      Auth: AuthStack
    }, {
    initialRouteName: 'AuthLoading'
  }
  )
);
