import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function PlayerInput({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Input player names</Text>
      <Button
        title="Go to QuestionPick"
        onPress={() => navigation.navigate("QuestionPick")}
      />
    </View>
  );
}