import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { secondaryColor } from "../utils/colors";

const InputTask = ({ handleAdd }) => {
  const [textInput, setTextInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setTextInput(val)}
      />
      <TouchableOpacity
        onPress={() => handleAdd(textInput)}
        style={styles.addButton}
      >
        <Text style={styles.textAddButton}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    margin: 40,
    padding: 2,
  },
  addButton: {
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontSize: 20,
    alignSelf: "center",
    backgroundColor: `${secondaryColor}`,
  },
  textAddButton: {
    color: "#fff",
  },
});

export default InputTask;
