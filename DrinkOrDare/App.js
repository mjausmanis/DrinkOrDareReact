import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenu from "./Screens/MainMenu";
import Options from "./Screens/Options";
import PlayerInput from "./Screens/PlayerInput";
import QuestionPick from "./Screens/QuestionPick";
import CustomQuestions from "./Screens/CustomQuestions";
import GameScreen from "./Screens/GameScreen";
import Scoreboard from "./Screens/Scoreboard";
import { lightTheme, darkTheme } from "./Theme/Themes";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import {View, StyleSheet, Text, Image} from "react-native";

const StartupScreen = ({ navigation }) => {
  useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/beerburp.mp3")
      );
      await sound.playAsync();
      setTimeout(() => {
        navigation.navigate("MainMenu");
      }, 2000);
    }
    playSound();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Title_light.png')} style={styles.image} resizeMode="contain"/>
    </View>
  );
};

const Stack = createNativeStackNavigator();
export const ThemeContext = React.createContext();
export default function App() {  
  const [theme, setTheme] = useState('Light');
  const themeData = { theme, setTheme };
  const [sound, setSound] = useState();
  
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/music.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  async function stopSound() {
    await sound.stopAsync();
  }
  useEffect(() => {
    playSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);
  

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme == 'Light' ? lightTheme : darkTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="StartupScreen" component={StartupScreen} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Options">
        {(props) => <Options {...props} sound={sound} stopSound={stopSound} />}
      </Stack.Screen>
          <Stack.Screen name="PlayerInput" component={PlayerInput} />
          <Stack.Screen name="QuestionPick" component={QuestionPick} />
          <Stack.Screen name="CustomQuestions" component={CustomQuestions} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="Scoreboard" component={Scoreboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  image: {
    maxWidth: 300
  }
});