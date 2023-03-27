import React from "react";
import { View, Text, Switch } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../App";
import MyButton from "../components/MyButton";

export default function Options({ navigation }) {

  const { colors } = useTheme();

  const { setTheme, theme } = React.useContext(ThemeContext)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{color: colors.text}}>Options</Text>
      <MyButton 
      title="Switch theme"
        onPress= {() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}
      />
      <MyButton
        title="Go to Main menu"
        onPress={() => navigation.navigate("MainMenu")}
      />
    </View>
  );
}