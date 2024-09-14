import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import React from 'react';
import { Link } from "expo-router";

export default function Contact() {
    return (
      <ImageBackground
        source={require('../../assets/images/back3.jpg')} 
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topSection}>
          <Image style={styles.bear} source={require("../../assets/images/run.gif")}/>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.headerText}>Contact Us</Text>
            <Text style={styles.bodyText}>
              Have any questions or need assistance? Feel free to reach out to us!
              <Text style={styles.email}> contact@ourcompany.com</Text>
            </Text>
          </View>

          <View style={styles.centeredContainer}>
            <Link href="/home" style={styles.homeButton}>
              Back to home
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
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 20,
        paddingHorizontal: 20, 
    },
    homeButton: {
    fontFamily: "play-reg",
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
      color:"white"
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
    email: {
      fontFamily: 'play-reg',
      fontSize: 18,
      color: '#DE5D83',
      fontWeight: 'bold',
    },
    bear:{
        height: 220,
        width: 200,
        marginBottom: 20, 
    },
    centeredContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 20,
        paddingHorizontal: 20, 
    }
});