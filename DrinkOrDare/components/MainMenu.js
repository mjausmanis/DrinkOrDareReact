import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ThemeProvider from '../Theme/ThemeProvider';
import MyButton from "./MyButton";
import lightTheme from '../Theme/Light';
import darkTheme from '../Theme/Dark';


export default function MainMenu({ navigation }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const currentTheme = theme === 'light' ? lightTheme : darkTheme; 

  return (
    <ThemeProvider value={{ theme: currentTheme, toggleTheme }}>
      <View style={[styles.container, {backgroundColor: currentTheme.backgroundColor}]}>
        <Text style={{color: currentTheme.textColor}}>DrinkOrDare</Text>
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
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  }
});