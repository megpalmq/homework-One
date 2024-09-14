import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import React from 'react';
import { Link } from "expo-router";

export default function about() {
    return (
      <ImageBackground
        source={require('../../assets/images/img2.jpg')} 
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topSection} />
  
          <View style={styles.textSection}>
            <Text style={styles.headerText}>About</Text>
            <Text style={styles.bodyText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ab delectus laboriosam nemo illo quasi aspernatur ipsum aut at animi sunt in enim mollitia inventore! Minima possimus esse iure eum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci nostrum nobis pariatur rem mollitia quis quibusdam corrupti, architecto esse! Officiis, ullam impedit! Fuga officiis rem reiciendis sequi dolore sint.
            </Text>
          </View>

          <View style={styles.centeredContainer}>
            <Image style={styles.bear} source={require("../../assets/images/bear.gif")}/>
            <Link href="/contact" style={styles.contactButton}>
              Contact
            </Link>
          </View>
        </ScrollView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    scrollContainer: {
      flexGrow: 1,
    },
    topSection: {
      padding: 20,
      alignItems: 'center',
    },
    contactButton: {
      padding: 10,
      backgroundColor: "#DE5D83",
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
      width: 120,
      textAlign: 'center',
      marginBottom: 40,
      fontFamily: "play-reg",
      color: "white",
    },
    headerText: {
      fontFamily: 'play-bold',
      fontSize: 30,
      color: 'white',
      marginBottom: 10,
    },
    bodyText: {
      fontFamily: 'play-reg',
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    },
    textSection: {
      backgroundColor: 'lightpink',
      minHeight: 300,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    bear:{
        height: 220,
        width: 200,
        marginBottom: 20, // Add margin to separate from button
    },
    centeredContainer: {
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically if needed
        marginTop: 20,
        paddingHorizontal: 20, // Optional: add some padding if needed
    }
});