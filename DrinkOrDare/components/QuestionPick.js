import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { StyleSheet, Button, View, Text } from "react-native";

export default function QuestionPick({ navigation }) {

    const [physIsChecked, physSetChecked] = useState(false);
    const [trivIsChecked, trivSetChecked] = useState(false);
    const [trueIsChecked, trueSetChecked] = useState(false);
    const [dareIsChecked, dareSetChecked] = useState(false);
    const [spiIsChecked, spiSetChecked] = useState(false);
    const [custIsChecked, custSetChecked] = useState(false);

    function buttonPress() {
        //Question setup
        navigation.navigate("GameScreen")
    }
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Choose the questions</Text>
        <View style={styles.checkBoxBox}>
            <View style={styles.checkBoxLine}>
                <Checkbox style={styles.checkbox} value={physIsChecked} onValueChange={physSetChecked}/>
                <Text style={styles.checkBoxLabel}>Physical challenges</Text>
            </View>
            <View style={styles.checkBoxLine}>
                <Checkbox style={styles.checkbox} value={trivIsChecked} onValueChange={trivSetChecked} />
                <Text style={styles.checkBoxLabel}>Trivia questions</Text>
            </View>
            <View style={styles.checkBoxLine}>
                <Checkbox style={styles.checkbox} value={trueIsChecked} onValueChange={trueSetChecked} />
                <Text style={styles.checkBoxLabel}>Truths</Text>
            </View>
            <View style={styles.checkBoxLine}>
                <Checkbox style={styles.checkbox} value={dareIsChecked} onValueChange={dareSetChecked} />
                <Text style={styles.checkBoxLabel}>Dares</Text>
            </View>
            <View style={styles.checkBoxLine}>
                <Checkbox style={styles.checkbox} value={spiIsChecked} onValueChange={spiSetChecked} />
                <Text style={styles.checkBoxLabel}>Spicy questions</Text>
            </View>
            <View style={styles.checkBoxLine}>
                <Checkbox style={styles.checkbox} value={custIsChecked} onValueChange={custSetChecked} />
                <Text style={styles.checkBoxLabel}>Custom questions</Text>
            </View>
        </View>
        <Button
            title="Start Game"
            onPress={buttonPress}
        />
    </View>
    );
}
const styles = StyleSheet.create({
container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
},
checkBoxBox: {
    margin:15
},
checkBoxLine: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5
},
checkbox: {
    justifyContent: 'flex-start',
    marginRight: 6
},
checkBoxLabel: {
    justifyContent: 'flex-end',
},
title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center'
}
});