import { useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MyButton = ({ title, onPress }) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.buttonBackground }]}
            onPress={onPress}
            >
            <Text style={[styles.buttonText, { color: colors.text }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 15,
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default MyButton;