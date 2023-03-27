
import React, { useState } from 'react';
import { View, Text, Keyboard, TextInput, StyleSheet, ScrollView } from "react-native";
import MyButton from "../components/MyButton";
import { useTheme } from "@react-navigation/native";

export default function PlayerInput({ navigation }) {
  const { colors } = useTheme();
  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    setInputs([...inputs, '']);
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
      fontSize: 30,
      fontWeight: "bold"
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
        textAlign: "center"}

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
        <MyButton
          title="Add field"
          onPress = {addInput}>
        </MyButton>
        </View>
      <MyButton
        title="Go to QuestionPick"
        onPress={() => navigation.navigate("QuestionPick")}
      />
      <MyButton
        title= "Back to start"
        onPress={() => navigation.navigate("MainMenu")}
      />
      </View>
  );
}
