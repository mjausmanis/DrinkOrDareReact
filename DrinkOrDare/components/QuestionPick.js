import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { StyleSheet, Button, View, Text, Switch } from "react-native";

export default function QuestionPick({ navigation }) {

    const [trueIsChecked, trueSetChecked] = useState(false);
    const [dareIsChecked, dareSetChecked] = useState(false);
    const [wyrIsChecked, wyrSetChecked] = useState(false);
    const [neverIsChecked, neverSetChecked] = useState(false);
    const [parIsChecked, parSetChecked] = useState(false);
    const [custIsChecked, custSetChecked] = useState(false);
    const [pgRatingIsChecked, pgRatingSetChecked] = useState(false);
    const [pg13RatingIsChecked, pg13RatingSetChecked] = useState(false);
    const [rRatingIsChecked, rRatingSetChecked] = useState(false);

    typeArray = [trueIsChecked, dareIsChecked, wyrIsChecked, neverIsChecked, parIsChecked, custIsChecked]
    ratingArray = [pgRatingIsChecked, pg13RatingIsChecked, rRatingIsChecked]

    function saveSelection() {
        navigation.navigate("GameScreen", {selectedTypes: typeArray, selectedRatings: ratingArray });
    }
    
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Choose the questions</Text>
        <View style={styles.content}>
            <Text>Select the question types:</Text>
            <View style={styles.questionCheckBoxes}>
                <View style={styles.column}>
                    <View style={styles.checkBoxLine}>
                        <Switch style={styles.checkbox} value={trueIsChecked} onValueChange={trueSetChecked}/>
                        <Text style={styles.checkBoxLabel}>Truths</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch style={styles.checkbox} value={dareIsChecked} onValueChange={dareSetChecked} />
                        <Text style={styles.checkBoxLabel}>Dares</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch style={styles.checkbox} value={wyrIsChecked} onValueChange={wyrSetChecked} />
                        <Text style={styles.checkBoxLabel}>Would you rather</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.checkBoxLine}>
                        <Switch style={styles.checkbox} value={neverIsChecked} onValueChange={neverSetChecked} />
                        <Text style={styles.checkBoxLabel}>Never Have I ever</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch style={styles.checkbox} value={parIsChecked} onValueChange={parSetChecked} />
                        <Text style={styles.checkBoxLabel}>Paranoia</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch style={styles.checkbox} value={custIsChecked} onValueChange={custSetChecked} />
                        <Text style={styles.checkBoxLabel}>Custom questions</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ratingChecks}>
                <Text>Select ratings for the questions:</Text>
                <View style={[styles.checkBoxLine, {justifyContent: 'center'}]}>
                    <Switch style={styles.checkbox} value={pgRatingIsChecked} onValueChange={pgRatingSetChecked} />
                    <Text style={styles.checkBoxLabel}>PG</Text>
                </View>
                <View style={[styles.checkBoxLine, {justifyContent: 'center'}]}>
                    <Switch style={styles.checkbox} value={pg13RatingIsChecked} onValueChange={pg13RatingSetChecked} />
                    <Text style={styles.checkBoxLabel}>PG-13</Text>
                </View>
                <View style={[styles.checkBoxLine, {justifyContent: 'center'}]}>
                    <Switch style={styles.checkbox} value={rRatingIsChecked} onValueChange={rRatingSetChecked} />
                    <Text style={styles.checkBoxLabel}>R</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <Button
                    style={styles.button}
                    title="Start Game"
                    onPress={saveSelection}
                />
            </View>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
},
content: {
    width: 320,
    justifyContent: 'center'
},
questionCheckBoxes: {
    flexDirection: 'row',
    marginBottom: 40
},
checkBoxLine: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    height: 20
},
column: {
    flex: 1,
    flexDirection: 'column'
},
ratingChecks: {
    marginBottom: 20,
    justifyContent: 'center'
},
title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center'
},
});