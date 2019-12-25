import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend#1", age: 20 },
    { name: "friend#2", age: 30 },
    { name: "friend#3", age: 16 },
    { name: "friend#4", age: 11 },
    { name: "friend#5", age: 10 },
    { name: "friend#6", age: 65 },
    { name: "friend#7", age: 43 },
    { name: "friend#8", age: 23 },
    { name: "friend#9", age: 12 }
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={({ name }) => name}
      renderItem={({ item: { name, age } }) => (
        <Text style={styles.textStyle}>
          {name} - Age {age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
