import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { primaryColor } from "../utils/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo-App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: `${primaryColor}`,
    alignSelf: "stretch",
    height: 110,
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 19,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Header;
