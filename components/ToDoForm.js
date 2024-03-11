import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import {React, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

const ToDoForm = ({addTask }) => {

  const [text, setText] = useState('');

  return (
    <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Add a task..."
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity onPress={()=>{addTask(text) & setText('')}}>
            <Ionicons name="add-circle" size={40} color="#3CB371" />
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 50,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: '80%',
      },
});

export default ToDoForm;