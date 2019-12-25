import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Shawn";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React native</Text>
      <Text style={styles.subStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
