import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    },
    boardScroll: {
      maxHeight: 200
    },
    playerLine: {
      minWidth: 220,
      flexDirection: 'row',
      borderBottomWidth: 1,
      margin: 5,
      borderColor: colors.text
    },
    name: {
      fontSize: 17,
      marginLeft: 5
    },
    score: {
      fontSize: 17,
      marginLeft: 'auto',
      marginRight: 5
    }
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Scoreboard</Text>
      <ScrollView style={styles.boardScroll}>
        <View style={{flexDirection: 'column', marginBottom: 20}}>
          {playerNames.map((name, index) => (
            <View style={styles.playerLine}>
              <Text style={styles.name} key={index}>{name}</Text>
              <Text style ={styles.score}>{playerScores[index]}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <MyButton
        title="Return to the game"
        onPress={next}
      />
    </View>
  );
}