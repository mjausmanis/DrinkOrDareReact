import React, { Component } from "react";
import { View, Text } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme, useRoute } from "@react-navigation/native";

export default function Scoreboard({ navigation }) {
  const { colors } = useTheme();

  const route = useRoute();
  const { playerNames } = route.params;
  console.log(playerNames)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{color: colors.text}}>Scoreboard</Text>
      <MyButton
        title="Go to MainMenu"
        onPress={() => navigation.navigate("MainMenu")}
      />
    </View>
  );
}