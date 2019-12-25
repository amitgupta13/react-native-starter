import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(0);
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={value => setName(value)}
        onSubmitEditing={() => {
          if (name.length < 5) {
            setError(1);
          } else if (name.length >= 5) {
            setError(2);
          }
        }}
        placeholder="Nameh"
      />
      <Text>
        {error === 1 ? "Inappropriate text" : error === 2 ? name : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
