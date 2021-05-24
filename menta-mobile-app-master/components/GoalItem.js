import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {




  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.goal.id)}
      activeOpacity={0.8}
    >
    <View style={styles.listItem} >
      <Text >{props.goal.value}</Text>
    </View>
    </TouchableOpacity>
  )

};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;