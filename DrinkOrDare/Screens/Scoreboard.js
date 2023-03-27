import React, { Component } from "react";
import { View, Text } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme, useRoute } from "@react-navigation/native";

export default function Scoreboard({ navigation }) {
  const { colors } = useTheme();

  const route = useRoute();
  const { playerNames } = route.params;


  function next(){
    navigation.navigate("GameScreen", {playerNames: playerNames})
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{color: colors.text}}>Scoreboard</Text>
      <View style={{flexDirection: 'column'}}>
        {playerNames.map((name, index) => (
          <View style={{flexDirection: 'row'}}>
            <Text key={index}>{name}</Text>
          </View>
        ))}
      </View>
      <MyButton
        title="Continue"
        onPress={next}
      />
    </View>
  );
}