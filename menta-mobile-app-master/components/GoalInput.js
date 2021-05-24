import React, {useState} from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="ADD" onPress={props.addGoalHandler.bind(this, enteredGoal)} />
    </View>
  )

};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  }
});

export default GoalInput;