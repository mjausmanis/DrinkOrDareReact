import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MyButton = ({ title, onPress }) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        button: {
            height: 60,
            width: 150,
            padding: 10,
            margin: 10,
            borderRadius: 15,
            backgroundColor: colors.buttonBackground,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            color: colors.text,
            fontWeight: "bold",
            textAlign: "center",
        },
    });
    
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MyButton;