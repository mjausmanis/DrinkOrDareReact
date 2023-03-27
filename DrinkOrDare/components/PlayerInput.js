import React, { useState } from 'react';
import { Button, View, Text, Keyboard, TextInput, StyleSheet, TouchableOpacity } from "react-native";
 


export default function PlayerInput({ navigation }) {

  const [inputs, setInputs] = useState(['']);

  const addInput = () => {
    setInputs([...inputs, '']);
  }



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor: "#292623" }}>
      <View style={{marginTop: 150,  marginBottom: 20, alignItems: "center" }}>
        <Text style={{ color: "#FFEBA4", fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" }}>Input player names</Text>

  
        <View >
          <TextInput
           
          />
  
        </View >
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
          
          style={{ minHeight: 35, width: 150, borderColor: "#504A42", borderWidth: 3, borderRadius: 25, padding: 10, color: "#FFEBA4", textAlign: "center"}}
          placeholderTextColor="#FFEBA4"
          placeholder="enter name"
          multiline={true}
        /> 
        </View>
      ))}
        <TouchableOpacity
          style = {{ flex: 1, alignItems: "center" }}
          onPress = {addInput}>
          <Text style={{color: "#FFEBA4", fontSize: 16, fontWeight: "bold", marginTop: 10 }}>Add fiel</Text>
        </TouchableOpacity>
        </View>
      <Button
        title="Go to QuestionPick"
        onPress={() => navigation.navigate("QuestionPick")}
      />
      <Button
        title= "Back to start"
        onPress={() => navigation.navigate("MainMenu")}
      />
      </View>
  );
}
