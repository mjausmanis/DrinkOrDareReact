import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import MyButton from "../components/MyButton";

export default function MainMenu({ navigation }) {

  const { colors } = useTheme();

  return (
      <View style={[styles.container]}>
        <Text style={{color: colors.text}}>DrinkOrDare</Text>
        <MyButton
          title="Go to Player Input"
          onPress={() => navigation.navigate("PlayerInput")}
        />
        <MyButton
          title="Go to Options"
          onPress={() => navigation.navigate("Options")}
        />
        <MyButton
          title="Go to CustomQuestions"
          onPress={() => navigation.navigate("CustomQuestions")}
        />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  }
});
