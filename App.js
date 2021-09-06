import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import InputTask from "./components/InputITask";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const handleDelete = (key) => {
    setTodos((newTodo) => {
      return newTodo.filter((todo) => todo.key != key);
    });
  };

  const handleAdd = (text) => {
    setTodos((newTodo) => {
      return [{ text: text, key: Math.random().toString() }, ...newTodo];
    });
  };

  return (
    <View style={styles.container}>
      {/* color :  */}
      <Header />
      <View className="content">
        <InputTask handleAdd={handleAdd} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(task) => task.key}
            renderItem={(task) => (
              <TodoItem task={task} handleDelete={handleDelete} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 30,
    fontSize: 18,
  },
});
