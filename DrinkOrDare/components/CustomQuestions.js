import React, { Component, useState, useEffect } from "react";
import { Button, View, Text, TextInput, Keyboard } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORED_DARES_KEY = "storedDares";

export default function CustomQuestions({ navigation }) {
  const [newDare, setNewDare] = useState("");
  const [dares, setDares] = useState([]);

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
        "For a monthly subscription of 15.99$, you can save an unlimited amount of dares!"
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Custom Questions</Text>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={setNewDare}
          value={newDare}
          placeholder="Enter a new dare"
        />
        <Button title="Save Dare" onPress={handleSaveDare} />
      </View>
      {dares.length > 0 && (
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Saved Dares:</Text>
          {dares.map((dare, index) => (
            <Text key={index}>{dare}</Text>
          ))}
        </View>
      )}
      <Button title="Delete Dares" onPress={handleDeleteDares} />
    </View>
  );
}
