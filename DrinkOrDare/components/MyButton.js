import { ThemeProvider } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ThemeContext from "../Theme/ThemeContext";

const MyButton = ({ title, onPress }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.buttonColor }]}
                onPress={onPress}
                >
                <Text style={[styles.buttonText, { color: theme.textColor }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default MyButton;