import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function Scoreboard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Scoreboard</Text>
      <Button
        title="Go to MainMenu"
        onPress={() => navigation.navigate("MainMenu")}
      />
    </View>
  );
}