import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme, useRoute } from "@react-navigation/native";

export default function Scoreboard({ navigation, props}) {
  const { colors } = useTheme();

  const route = useRoute();
  const { playerNames, playerScores} = route.params;


  function next(){
    navigation.navigate("GameScreen", {playerNames: playerNames})
  }

  const styles = StyleSheet.create({
    title: {
      color: colors.text,
      fontSize: 50,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: 'center'
    },
    scoreBoardText: {
      fontSize: 25
    }
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Scoreboard</Text>
      <View style={{flexDirection: 'column', marginBottom: 20}}>
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