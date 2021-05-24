import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'
import { Button, ThemeProvider, Header, Avatar } from 'react-native-elements'
import { createMentorApplication } from '../src/graphql/mutations'


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const PostFeed = props => {

        const [outputText, setInputText] = useState('');

        const handlereturn = async () => {
            props.navigation.navigate('Feed')
        }

        const handleYes = () => {
            Alert.alert('Posted!',
            '',
            [
                {
                    text: 'Ok', onPress: () => handlereturn()
                }
            ])
        }

        const handleNo = () => {
            console.log('Not yet Pressed')
        }

        return (
            <DismissKeyboard>
            <View style={styles.page}>
                <View>
                    <Text style={styles.titleStyle}>
                        What's on your Mind?
                    </Text>
                </View>

                <View>
                <TextInput
                        style={{width: '80%',
                        height: 50,
                        borderColor: 'purple',
                        borderWidth: 1,
                        alignSelf: 'center',
                        fontSize: 18,}}
                        placeholder='Hobbies'
                        multiline 
                        onChangeText={(text) => setInputText(text)}
                    />
                    <TextInput
                    

                        style={styles.textInputStyle}
                        placeholder='Body'
                        multiline 
                        onChangeText={(text) => setInputText(text)}

                    />
                </View>
                    <View>
        <Button
            onPress= {() => Alert.alert(
                'Post your feed?',
                '',
                [
                    {
                        text: 'No',
                        onPress: () => handleNo(),
                        style: 'cancel',
                    },
                    {
                        text: 'Yes',
                        onPress: () => handleYes(),
                    }
                ],
                    { cancelable: false },
            )}
          title="Post"
          buttonStyle={{         
            paddingTop: 10,
            width: '20%',
            alignSelf: 'center',
            backgroundColor: '#7951A8', 
            margin: 10 }}

        />

                </View>
            </View>
        </DismissKeyboard>
            
    )

};

const styles = StyleSheet.create({
    page: {
        paddingTop: 50,
        flex: 1
    },

    subtitle: {
        textAlign: 'center',
        color: 'gray',
        paddingBottom: 10
    },

    textInputStyle: {
        width: '80%',
        height: 150,
        borderColor: '#7951A8',
        borderWidth: 1,
        alignSelf: 'center',
        fontSize: 18,
        
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'gray',
        alignSelf: 'center',
        paddingBottom: 20
    }
});

export default PostFeed;