import React, { Component } from "react";
import { View, Text } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme, useRoute } from "@react-navigation/native";

export default function Scoreboard({ navigation, props}) {
  const { colors } = useTheme();

  const route = useRoute();
  const { playerNames, playerScores} = route.params;


  function next(){
    navigation.navigate("GameScreen", {playerNames: playerNames})
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{color: colors.text}}>Scoreboard</Text>
      <View style={{flexDirection: 'column'}}>
        {playerNames.map((name, index) => (
          <View style={{flexDirection: 'row'}}>
            <Text key={index}>{name} - </Text>
            <Text>{playerScores[index]}</Text>
          </View>

        ))}
      </View>
      <MyButton
        title="Return to the game"
        onPress={next}
      />
    </View>
  );
}