import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import Toast from "react-native-root-toast";
import MyButton from "../components/MyButton";
import { useTheme } from "@react-navigation/native";

export default function QuestionPick({ navigation }) {
    
    const { colors } = useTheme();

    const [trueIsChecked, trueSetChecked] = useState(false);
    const [dareIsChecked, dareSetChecked] = useState(false);
    const [wyrIsChecked, wyrSetChecked] = useState(false);
    const [neverIsChecked, neverSetChecked] = useState(false);
    const [parIsChecked, parSetChecked] = useState(false);
    const [custIsChecked, custSetChecked] = useState(false);
    const [pgRatingIsChecked, pgRatingSetChecked] = useState(false);
    const [pg13RatingIsChecked, pg13RatingSetChecked] = useState(false);
    const [rRatingIsChecked, rRatingSetChecked] = useState(false);

    const typeArray = [trueIsChecked, dareIsChecked, wyrIsChecked, neverIsChecked, parIsChecked, custIsChecked]
    const ratingArray = [pgRatingIsChecked, pg13RatingIsChecked, rRatingIsChecked]

    function saveSelection() {
        if (typeArray.includes(true) && ratingArray.includes(true)) {
            navigation.navigate("GameScreen", {selectedTypes: typeArray, selectedRatings: ratingArray });
        } else {
            let toast = Toast.show('Please select at least one type and one rating.', {
                duration: Toast.durations.SHORT,
            });
        }
    }
    
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            color: colors.text,
            fontSize: 50,
            fontWeight: 'bold',
            marginBottom: 30,
            textAlign: 'center'
        },
        content: {
            width: 320,
            justifyContent: 'center'
        },
        checkboxTitle:{
            color: colors.text,
            marginBottom: 10,
            textAlign: 'center',
            fontSize: 17,
            fontWeight: 'bold'
        },
        checkBoxLabel: {
            color: colors.text
        },
        questionCheckBoxes: {
            flexDirection: 'row',
            marginBottom: 20
        },
        checkBoxLine: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            marginBottom: 5,
            marginTop:5,
            height: 20
        },
        ratingLine: {
            justifyContent: 'center'
        },
        column: {
            flex: 1,
            flexDirection: 'column'
        },
        ratingChecks: {
            marginBottom: 20,
            justifyContent: 'center'
        },
        buttonView: {
            justifyContent: 'center'
        }
        });

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Choose the questions</Text>
        <View style={styles.content}>
            <Text style={styles.checkboxTitle}>Select the question types:</Text>
            <View style={styles.questionCheckBoxes}>
                <View style={styles.column}>
                    <View style={styles.checkBoxLine}>
                        <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={trueIsChecked} onValueChange={trueSetChecked}
                        />
                        <Text style={styles.checkBoxLabel}>Truths</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={dareIsChecked} onValueChange={dareSetChecked}
                        />
                        <Text style={styles.checkBoxLabel}>Dares</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={wyrIsChecked} onValueChange={wyrSetChecked}
                        />
                        <Text style={styles.checkBoxLabel}>Would you rather</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.checkBoxLine}>
                        <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={neverIsChecked} onValueChange={neverSetChecked}
                        />
                        <Text style={styles.checkBoxLabel}>Never Have I ever</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={parIsChecked} onValueChange={parSetChecked}
                        />
                        <Text style={styles.checkBoxLabel}>Paranoia</Text>
                    </View>
                    <View style={styles.checkBoxLine}>
                        <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={custIsChecked} onValueChange={custSetChecked}
                        />
                        <Text style={styles.checkBoxLabel}>Custom questions</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ratingChecks}>
                <Text style={styles.checkboxTitle}>Select ratings for the questions:</Text>
                <View style={[styles.checkBoxLine, styles.ratingLine]}>
                    <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={pgRatingIsChecked} onValueChange={pgRatingSetChecked}
                        />
                    <Text style={styles.checkBoxLabel}>PG</Text>
                </View>
                <View style={[styles.checkBoxLine, styles.ratingLine]}>
                    <Switch 
                            trackColor={{true: colors.buttonBackground}} 
                            thumbColor={colors.text}
                            style={styles.checkbox} value={pg13RatingIsChecked} onValueChange={pg13RatingSetChecked}
                        />
                    <Text style={styles.checkBoxLabel}>PG-13</Text>
                </View>
                <View style={[styles.checkBoxLine, styles.ratingLine]}>
                    <Switch 
                        trackColor={{true: colors.buttonBackground}} 
                        thumbColor={colors.text}
                        style={styles.checkbox} value={rRatingIsChecked} onValueChange={rRatingSetChecked}
                    />
                    <Text style={styles.checkBoxLabel}>R</Text>
                </View>
            </View>
            <View style={styles.buttonView}>
                <MyButton
                    title="Start Game"
                    onPress={saveSelection}
                />
            </View>
        </View>
    </View>
    )

}
