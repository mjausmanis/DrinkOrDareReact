import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function QuestionPick({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Choose the questions</Text>
      <Button
        title="Go to GameScreen"
        onPress={() => navigation.navigate("GameScreen")}
      />
    </View>
  );
}