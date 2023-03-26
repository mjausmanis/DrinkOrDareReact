import React from "react";
import { Button, View, Text } from "react-native";

export default function MainMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>DrinkOrDare</Text>
      <Button
        title="Go to Player Input"
        onPress={() => navigation.navigate("PlayerInput")}
      />
      <Button
        title="Go to Options"
        onPress={() => navigation.navigate("Options")}
      />
      <Button
        title="Go to CustomQuestions"
        onPress={() => navigation.navigate("CustomQuestions")}
      />
    </View>
  );
}