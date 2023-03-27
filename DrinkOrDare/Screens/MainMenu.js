import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import MyButton from "../components/MyButton";

export default function MainMenu({ navigation }) {

  const { colors } = useTheme();

  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center"
    },
    title: {
      color: colors.text,
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 150
    },
    buttons: {
      width: 50
    }
  });

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Drink Or Dare</Text>
        <MyButton
          title="Play game"
          onPress={() => navigation.navigate("PlayerInput")}
        />
        <MyButton
          title="Options"
          onPress={() => navigation.navigate("Options")}
        />
        <MyButton
          title="Custom questions"
          onPress={() => navigation.navigate("CustomQuestions")}
        />
      </View>
  );
  
}


