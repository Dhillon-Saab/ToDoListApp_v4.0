import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/ToDoForm';
import TaskList from './components/ToDoList';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState([]);

  const addTask = (text) =>{
    if(text.trim() === '')return;
    for(a in task){
      if(a == text)return;
    }
    setTask((newTask) => { return [{ taskName: text, taskId: Math.random().toString() }, ...newTask] });
  }

  return (
    
    <View style={styles.container}>
      <Header/>
      <TaskList tasks={task} setTask={setTask}/>
      <Form addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
