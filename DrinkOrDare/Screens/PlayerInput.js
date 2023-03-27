import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme } from "@react-navigation/native";

export default function PlayerInput({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{color: colors.text}}>Input player names</Text>
      <MyButton
        title="Go to QuestionPick"
        onPress={() => navigation.navigate("QuestionPick")}
      />
    </View>
  );
}