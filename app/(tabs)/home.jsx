import { View, Text, Button, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import React from 'react';
import { Link } from "expo-router";

export default function Home() {
    return (
        <ImageBackground
            source={require('../../assets/images/back1.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.topSection}>
                        <Text style={styles.topSectionText}>Home</Text>
                        <Text style={styles.topSectionDescription}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ab delectus laboriosam nemo illo quasi aspernatur ipsum aut at animi sunt in enim mollitia inventore! Minima possimus esse iure eum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci nostrum nobis pariatur rem mollitia quis quibusdam corrupti, architecto esse! Officiis, ullam impedit! Fuga officiis rem reiciendis sequi dolore sint.
                        </Text>
                    </View>

                    <View style={styles.bottomSection}>
                        <Image style={styles.tree} source={require("../../assets/images/img1.jpg")} />
                        <Link href="/about" style={styles.aboutButton}>
                            Go To About
                        </Link>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 25,
        alignContent: "center"
    },
    scrollContainer: {
        flexGrow: 1,
    },
    aboutButton: {
        padding: 10,
        backgroundColor: "#DE5D83",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 5,
        width: 150,
        fontFamily: "play-reg",
        color: "#fff",
        textAlign: "center",
        alignItems: "center",
        marginTop: 30,
    },
    topSection: {
        backgroundColor: "#FFC1CC",
    },
    topSectionText: {
        fontFamily: "play-bold",
        fontSize: 30,
        color: "white"
    },
    topSectionDescription: {
        fontFamily: "play-reg",
        fontSize: 18,
        color: "white"
    },
    bottomSection: {
        minHeight: 300,
        alignItems: "center"
    },
    tree: {
        width: 380,
        height: 400,
        marginTop: 30,
        borderColor: "#FFC1CC",
        borderWidth: 5,
    }
});