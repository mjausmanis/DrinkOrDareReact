import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function Options({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Options</Text>
      <Button
        title="Go to Main menu"
        onPress={() => navigation.navigate("MainMenu")}
      />
    </View>
  );
}