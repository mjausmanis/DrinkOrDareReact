
import React, { useState } from 'react';
import { View, Text, Keyboard, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Toast from "react-native-root-toast";
import MyButton from "../components/MyButton";
import { useTheme } from "@react-navigation/native";

export default function PlayerInput({ navigation }) {
  const { colors } = useTheme();
  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    if (inputs.length < 20) {
      setInputs([...inputs, '']);
    } else {
      let toast = Toast.show("Can't have more than 20 players!", {
          duration: Toast.durations.SHORT,
      });
    }
  }

  function saveNames() {
    var filtered = []; 
    for ( i in inputs) {
      if (inputs[i] != "") {
        filtered.push(inputs[i])
      }
    }
    if (filtered.length > 0) {
      navigation.navigate("QuestionPick", {playerNames: filtered})
    } else {
      let toast = Toast.show("You need to input at least 1 player name!", {
        duration: Toast.durations.SHORT,
      });
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: colors.background
    },
    title: {
      color: colors.text,
      fontSize: 50,
      fontWeight: "bold",
      marginBottom: 50,
      textAlign: 'center'
    },
    scroll: {
      maxHeight: 250 
    },  
    textInput: { minHeight: 35,
        width: 150,
        borderColor: "#504A42", 
        borderWidth: 3, 
        borderRadius: 25, 
        padding: 10, 
        color: colors.text, 
        textAlign: "center"
    },
    roundButton: { 
      alignItems: "center", 
      width: 50, 
      height: 50, 
      borderRadius: 50, 
      backgroundColor: colors.buttonBackground, 
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 5
    },
    plus: {
      color: colors.text, 
      fontSize: 25, 
      fontWeight: "bold", 
    }

  });

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center" }}>
        <Text style={styles.title}>Input player names</Text>
        <ScrollView style={styles.scroll}>
          {inputs.map((input, index) => (
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <TextInput
                key={index}
                value={input}
                onChangeText={text => {
                  const newInputs = [...inputs];
                  newInputs[index] = text;
                  setInputs(newInputs);
                }}
                
                style={styles.textInput}
                placeholderTextColor={colors.text}
                placeholder="Enter name"
                multiline={true}
              /> 
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style = {styles.roundButton}
          onPress = {addInput}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
      <MyButton
        title="Go to QuestionPick"
        onPress={saveNames}
      />
    </View>
  );
}
