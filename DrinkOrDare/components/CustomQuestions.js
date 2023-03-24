import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function CustomQuestions({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Custom Questions</Text>
      <Button
        title="Go to MainMenu"
        onPress={() => navigation.navigate("MainMenu")}
      />
    </View>
  );
}