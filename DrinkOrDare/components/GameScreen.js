import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function GameScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>GameScreen</Text>
      <Button
        title="Go to Scoreboard"
        onPress={() => navigation.navigate("Scoreboard")}
      />
    </View>
  );
}