import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSrc={require("../../assets/beach.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSrc={require("../../assets/forest.jpg")}
        score={7}
      />
      <ImageDetail
        title="Swamp"
        imageSrc={require("../../assets/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
