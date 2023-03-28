import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Beer from '../assets/beer.png';
import Champagne from '../assets/champagne.png';
import Cocktail from '../assets/flaming_coctail.png';

const BackgroundImages = () => {

    const styles = StyleSheet.create({
        Image: {
            position: 'absolute'
        },
        Beer:{
            left: -20,
            top: 270,
            transform: 'rotate(35deg)',
            height: 220,
            width: 220
        },
        Champagne: {
            left: -150,
            top: 120,
            transform: 'rotate(-30deg)',
            height: 260,
            width: 130
        },
        Cocktail: {
            left: -125,
            top: -30,
            height: 350,
            width: 250
        }
        
    });
    
    return (
        <View>
            <Image style ={[styles.Image, styles.Cocktail]} source={Cocktail}></Image>
            <Image style ={[styles.Image, styles.Champagne]} source={Champagne}></Image>
            <Image style ={[styles.Image, styles.Beer]} source={Beer}></Image>
        </View>
    );
};

export default BackgroundImages;