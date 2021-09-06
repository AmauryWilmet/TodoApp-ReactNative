import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const TodoItem = ({ task, handleDelete }) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(task.item.key)}>
      <Text style={styles.textTask}>{task.item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textTask: {
    borderStyle: "dotted",
    padding: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default TodoItem;
