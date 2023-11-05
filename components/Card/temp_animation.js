import React, { useEffect, useRef } from "react"
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";

const Card = () => {

    const moveAnimation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        const animate = () => {
            Animated.timing(moveAnimation, {
                toValue: 1,
                duration: 1000, // 1 second
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished) {
                    moveAnimation.setValue(0);
                    animate();
                }
            });
        };

        animate();
    }, [moveAnimation]);


      const animatedStyle = {
        transform: [
          {
            translateX: moveAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100], // Numeric values for translation
            }),
          },
        ],
      };

    return (
        <View>
            <View style={styles?.["main"]}>
                <View style={styles?.["currentplaying"]}>
                    <Text style={styles?.["heading"]}>Currently Playing</Text>
                </View>
                <View style={styles?.["loader"]}>
                    <View style={styles?.["song"]}>
                        <Text style={styles?.["name"]}>Time in a Bottle</Text>
                        <Text style={styles?.["artist"]}>Jim Corce</Text>
                    </View>
                    <View style={styles?.["albumcover"]}></View>
                    <View style={styles?.["loading"]}>
                        <Animated.View style={[styles?.["load"], animatedStyle]}/>
                        <Animated.View style={[styles?.["load"], animatedStyle]}/>
                        <Animated.View style={[styles?.["load"], animatedStyle]}/>
                        <Animated.View style={[styles?.["load"], animatedStyle]}/>
                    </View>
                </View>
                <View style={styles?.["loader"]}>
                    <View style={styles?.["song"]}>
                        <Text style={styles?.["name"]}>My Way</Text>
                        <Text style={styles?.["artist"]}>Frank Sinatra</Text>
                    </View>
                    <View style={styles?.["albumcover"]}></View>
                    <View style={styles?.["play"]}></View>
                </View>
                <View style={styles?.["loader"]}>
                    <View style={styles?.["song"]}>
                        <Text style={styles?.["name"]}>Lemon Tree</Text>
                        <Text style={styles?.["artist"]}>Fools Garden</Text>
                    </View>
                    <View style={styles?.["albumcover"]}></View>
                    <View style={styles?.["play"]}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    "main": {
        backgroundColor: "white",
        padding: 16,
        paddingBottom: 18,
        borderRadius: 15,
        margin: 16
    },
    "loader": {
        display: "flex",
        flexDirection: "row",
        height: 64,
        paddingLeft: 16,
        paddingRight: 16,
        transform: [{ rotate: '180deg' }],
        justifyContent: "right",
        borderRadius: 10,
        transition: ".4s ease-in-out"
    },
    "loader:hover": { cursor: "pointer", backgroundColor: "lightgray" },
    "currentplaying": { display: "flex", margin: 16 },
    "spotify": { width: "50px", height: "50px", marginRight: "0.6em" },
    "heading": {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    "loading": { display: "flex", marginTop: 16, marginLeft: 4.8 },
    "load": {
        width: 2,
        height: 33,
        backgroundColor: "limegreen",
        animation: "1s move6 infinite",
        borderRadius: 5,
        margin: 4
    },
    "load:nth-child(1)": { animationDelay: "0.2s" },
    "load:nth-child(2)": { animationDelay: "0.4s" },
    "load:nth-child(3)": { animationDelay: "0.6s" },
    "play": {
        position: "relative",
        left: 5.6,
        height: 25.6,
        width: 25.6,
        clipPath: "polygon(50% 50%, 100% 50%, 75% 6.6%)",
        backgroundColor: "black",
        transform: [{ rotate: '-90deg' }],
        alignSelf: "center",
        marginTop: 11.2,
        justifySelf: "center"
    },
    "albumcover": {
        position: "relative",
        marginRight: 16,
        height: 40,
        width: 40,
        backgroundColor: "rgb(233, 232, 232)",
        alignSelf: "center",
        borderRadius: 5
    },
    "song": {
        position: "relative",
        transform: [{ rotate: '180deg' }],
        marginRight: 16,
        color: "black",
        alignSelf: "center"
    },
    "artist": { fontSize: 9 },
    "@keyframes move6": {
        "0%": { height: 3.2 },
        "25%": { height: 11.2 },
        "50%": { height: 24 },
        "100%": { height: 3.2 }
    }

});

export default Card