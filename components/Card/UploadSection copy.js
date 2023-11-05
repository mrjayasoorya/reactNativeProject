import React from "react"
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Button";

const UploadSection = () => {
    return (
        <View style={styles?.["main"]}>
            <View style={styles?.["heading"]}>
                <Text style={styles?.["headingText"]}>Welcom to "Gaia"</Text>
            </View>
            <Text style={{ justifyContent: "center", width: "100%", textAlign: "center" }}>
                <Text style={styles.uploadButton}>
                    <CustomButton onPress={() => { }} buttonTitle="Upload Image" />
                </Text>
            </Text>
            <Text style={styles.hintSection}>Upload Image and get the details from it</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    "main": {
        backgroundColor: "white",
        padding: 16,
        paddingBottom: 18,
        borderRadius: 15,
        margin: 16,
        minHeight: 200,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    "heading": {
        paddingBottom: 10
    },
    "headingText": {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    },
    uploadButton: {
        width: "50%",
        textAlign: "center"
    },
    hintSection:{
        position:"absolute",
        bottom:5,
        fontSize:14,
        color:"#D1D0D0"
        // 0 0 0 10px rgba(0,0,0,0.03),0 0 0 10px rgba(255,255,255,0.22) inset
    }


});

export default UploadSection