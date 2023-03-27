import React, { Component } from "react";
import { View, Text } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme } from "@react-navigation/native";

export default function Scoreboard({ navigation }) {
  const { colors } = useTheme();

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