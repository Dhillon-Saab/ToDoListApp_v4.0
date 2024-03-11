import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const ToDoList = ({tasks, setTask}) => {

  return (
  <View style={styles.taskList}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => 

        <TouchableOpacity onPress={() => {
          setTask((press) => {return press.filter(tasks =>   tasks.taskId != item.taskId)});
        }}>
        <View style={styles.item}>
        <MaterialIcons name='delete' size={20} color='black'/>
        <Text style={styles.text}>{item.taskName}</Text>
          </View>  
        </TouchableOpacity>  
      
        }
        keyExtractor={(item) => item.taskId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    item: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,

    },
    text:{
      marginLeft: 10,
      marginRight: 20,
      fontSize: 15,
      fontWeight: 'bold',
    }
});

export default ToDoList;