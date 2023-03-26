import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native"
import { StyleSheet, Button, View, Text } from "react-native";

export default function GameScreen({ navigation }) {
  const route = useRoute();
  const { selectedTypes, selectedRatings } = route.params
  const apiEnds = [ 'v1/truth', 'api/dare', 'api/wyr', 'api/nhie', 'api/paranoia', 'custom']
  const ratings = ['pg', 'pg13', 'r']

  const [currentQuestion, setCurrentQuestion] = useState("");

  useEffect(() => {
    generateQuestion();
  }, []);


  function generateQuestion() {
    selectedEnds = []
    chosenRatings = []
    endValue = 0
    ratingValue = 0

    for (i in apiEnds) {
      if (selectedTypes[i] == true) {
        selectedEnds.push(apiEnds[i])
      }
    }
    for (i in ratings) {
      if (selectedRatings[i] == true) {
        chosenRatings.push(ratings[i])
      }
    }
    endValue = Math.trunc(Math.random() * selectedEnds.length)
    ratingValue = Math.trunc(Math.random() * chosenRatings.length)

    if (selectedEnds[endValue] == 'custom') {
      //take from custom questions
      setCurrentQuestion('Custom question')
    } else {
      console.log(`https://api.truthordarebot.xyz/${selectedEnds[endValue]}?rating=${chosenRatings[ratingValue]}`)
      fetch(`https://api.truthordarebot.xyz/${selectedEnds[endValue]}?rating=${chosenRatings[ratingValue]}`)
        .then(response => response.json())
        .then(data => {
          setCurrentQuestion(data.question);
        });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.playerCard}>
        <Text style={styles.player}>Player 1</Text>
      </View>
      <View style={styles.questionCard}>
        <Text>{currentQuestion}</Text>
      </View>
      <Button
        title="Generate Question"
        onPress={() => generateQuestion()}
      />
      <Button
        title="Go to Scoreboard"
        onPress={() => navigation.navigate("Scoreboard")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop: 100,
      alignItems: "center",
      justifyContent: "center",
  },
  playerCard: {
    backgroundColor: 'gray',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30
  },
  player: {
    fontSize: 50
  },
  questionCard: {
    height: 300,
    backgroundColor: 'gray'
  }
  });