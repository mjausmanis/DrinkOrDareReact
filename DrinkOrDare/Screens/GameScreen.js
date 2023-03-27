import React, { useState, useEffect, useContext } from "react";
import { useRoute, useTheme } from "@react-navigation/native"
import { StyleSheet, View, Text, Image } from "react-native";
import MyButton from "../components/MyButton";
import TruthImage from "../assets/Truth.png";
import DareImage from "../assets/Dare.png";
import WyrImage from "../assets/WYR.png";
import NeverImage from "../assets/Never.png";
import ParanoiaImage from "../assets/Paranoia.png";
import CustomImage from "../assets/Custom.png";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomQuestions from './CustomQuestions';


export default function GameScreen({ navigation }) {

  const { colors } = useTheme();

  const route = useRoute();
  const { selectedTypes, selectedRatings } = route.params;
  const apiEnds = [ 'v1/truth', 'api/dare', 'api/wyr', 'api/nhie', 'api/paranoia', 'custom'];
  const ratings = ['pg', 'pg13', 'r'];
  
  const Images = {
    TRUTH: TruthImage,
    DARE: DareImage,
    WYR: WyrImage,
    NHIE: NeverImage,
    PARANOIA: ParanoiaImage,
    Custom: CustomImage
  }
  const borderColors = {
    TRUTH: '#7ED957',
    DARE: '#BB2222',
    WYR: '#5E17EB',
    NHIE: '#FF914D',
    PARANOIA: '#004AAD',
    Custom: '#E4C336'
  }

  const [currentImage, setCurrentImage] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");

  useEffect(() => {
    generateQuestion();
    setCurrentImage(CustomImage);
  }, []);


  async function generateQuestion() {
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
      const storedDares = await AsyncStorage.getItem("storedDares");
      if (storedDares !== null) {
        const customQuestions = JSON.parse(storedDares);
        const randomIndex = Math.floor(Math.random() * customQuestions.length);
        setCurrentQuestion(customQuestions[randomIndex]);
        setCurrentImage(Images['Custom'])
        setCurrentColor(borderColors['Custom'])
      } else {
        setCurrentQuestion('No custom questions available')
      }
    } else {
      fetch(`https://api.truthordarebot.xyz/${selectedEnds[endValue]}?rating=${chosenRatings[ratingValue]}`)
        .then(response => response.json())
        .then(data => {
          setCurrentQuestion(data.question);
          setCurrentImage(Images[data.type])
          setCurrentColor(borderColors[data.type])
          console.log(data.type)
        });
    }
  }

  const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    playerCard: {
      backgroundColor: colors.buttonBackground,
      paddingLeft: 30,
      paddingRight: 30,
      marginBottom: 30,
      borderRadius: 20
    },
    player: {
      color: colors.text,
      fontSize: 50
    },
    cardBorder: {
      height: 300,
      width: 300,
      marginBottom: 30,
      borderRadius: 30,
      borderColor: colors.buttonBackground,
      borderWidth: 10
    },
    questionCard: {
      height: 280,
      backgroundColor: colors.buttonBackground,
      width: 280,
      borderRadius: 20,
      borderColor: currentColor,
      borderWidth: 10,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      padding: 40,
      justifyContent: 'center',
    },
    questionIcon:{
      position: 'absolute',
      top: 10, 
      right: 10,
      width: 50,
      height: 50
    },
    question: {
      color: colors.text,
      textAlign: 'center',
      fontSize: 20
    },
    buttons: {
      flexDirection: 'row'
    }
    });

  return (
    <View style={styles.container}>
      <View style={styles.playerCard}>
        <Text style={styles.player}>Player 1</Text>
      </View>
      <View style={styles.cardBorder}>
        <View style={styles.questionCard}>
          <Image style={styles.questionIcon} source={currentImage}></Image>
          <Text style={styles.question}>{currentQuestion}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <MyButton
          title="Generate Question"
          onPress={() => generateQuestion()}
        />
        <MyButton
          title="Go to Scoreboard"
          onPress={() => navigation.navigate("Scoreboard")}
        />
      </View>
    </View>
  );
}
