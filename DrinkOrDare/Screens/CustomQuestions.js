import React, {useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from "../components/MyButton";
import { useTheme } from "@react-navigation/native";


const STORED_DARES_KEY = "storedDares";

export default function CustomQuestions({ navigation }) {
  const [newDare, setNewDare] = useState("");
  const [dares, setDares] = useState([]);
  const { colors } = useTheme();
  
  useEffect(() => {
    loadDares();
  }, []);

  async function loadDares() {
    try {
      const storedDares = await AsyncStorage.getItem(STORED_DARES_KEY);
      if (storedDares !== null) {
        setDares(JSON.parse(storedDares));
      }
    } catch (error) {
      console.error("Failed to load saved dares:", error);
    }
  }

  async function handleSaveDare() {
    if (newDare.trim() === "") {
      return;
    }

    if (dares.length >= 2) {
      alert(
        "For a monthly subscription of 420$, you can save an unlimited amount of dares!"
      );
      return;
    }

    const updatedDares = [...dares, newDare];
    setDares(updatedDares);
    setNewDare("");
    Keyboard.dismiss();

    try {
      await AsyncStorage.setItem(STORED_DARES_KEY, JSON.stringify(updatedDares));
    } catch (error) {
      console.error("Failed to save dare:", error);
    }
  }

  async function handleDeleteDares() {
    setDares([]);
    try {
      await AsyncStorage.removeItem(STORED_DARES_KEY);
    } catch (error) {
      console.error("Failed to delete saved dares:", error);
    }
  }

  return (
    <View style={[styles.container]}>
      <View style={[styles.container]}>
        <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" }}>Custom Questions</Text>
        <View style={{ marginBottom: 20, marginTop: 50 }}>
          <TextInput
            style={{ minHeight: 35, width: 150, borderColor: "#504A42", borderWidth: 3, borderRadius: 25, padding: 10, color: colors.text, textAlign: "center"}}
            onChangeText={setNewDare}
            value={newDare}
            placeholderTextColor= {colors.text}
            placeholder="Enter a dare here"
            multiline={true}
          />
        </View>
        
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <MyButton title="Save Dare" onPress={handleSaveDare} />
          <MyButton title="Delete dares" onPress={handleDeleteDares}/>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        {dares.length > 0 && (
          <View>
            <Text style={{color: colors.text, fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Saved Dares:</Text>
            {dares.map((dare, index) => (
              <Text style={{ color: colors.text }} key={index}>
                {dare}
              </Text>
            ))}
          </View>
        )}
      </View>
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

