import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../App";
import MyButton from "../components/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundImages from "../components/BackgroundImages";

export default function Options(props) {
  const [musicOn, setMusicOn] = useState(true);
  const [isMusicButtonOn, setIsMusicButtonOn] = useState(true);
  const { colors } = useTheme();

  const { setTheme, theme } = React.useContext(ThemeContext)


  useEffect(() => {
    const loadMusicState = async () => {
      try {
        const musicState = await AsyncStorage.getItem("musicState");
        if (musicState !== null) {
          setMusicOn(JSON.parse(musicState));
          if (JSON.parse(musicState)) {
            props.sound.replayAsync();
            setIsMusicButtonOn(true);
          } else {
            props.stopSound();
            setIsMusicButtonOn(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadMusicState();
  }, []);
  

  const toggleMusic = async () => {
    if (musicOn) {
      props.stopSound();
      setIsMusicButtonOn(false);
    } else {
      props.sound.replayAsync();
      setIsMusicButtonOn(true);
    }
    setMusicOn(!musicOn);
    try {
      await AsyncStorage.setItem("musicState", JSON.stringify(!musicOn));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BackgroundImages />
      <Text style={{color: colors.text, fontSize: 50, fontWeight: "bold", marginBottom: 50}}>Options</Text>
      <MyButton 
        title="Switch theme"
        onPress={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}
      />
      <MyButton
        title={isMusicButtonOn ? "Music On" : "Music Off"}
        onPress={toggleMusic}
      />
      <MyButton
        title="Go to Main menu"
        onPress={() => props.navigation.navigate("MainMenu")}
      />
    </View>
  );
}
