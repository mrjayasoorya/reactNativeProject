import React, { useState } from "react"
import { StyleSheet, Text, View, PermissionsAndroid, Image } from "react-native";
import CustomButton from "../Button";
import ImagePicker from 'react-native-image-crop-picker';

const UploadSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadApiResp, setUploadApiResp] = useState({ loading: false, error: false, data: null });


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            ]);
            console.log(granted);
            // alert(JSON.stringify(granted))
            if (granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] == "granted" && granted[PermissionsAndroid.PERMISSIONS.CAMERA] == "granted") {
                console.log('You can use the camera');
                return true
            } else {
                alert("error")
                console.log('Camera permission denied');
                return false
            }
        } catch (err) {
            console.warn(err);
            return false
        }
    };
//     npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
//     cd android
//     ./gradlew bundleRelease

//     npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
// cd android
// ./gradlew assembleDebug


//     bundletool build-apks --bundle=android/app/build/outputs/bundle/release/app-release.aab --output=app-release.apks --mode=universal
// bundletool install-apks --apks=app-release.apks

    

    const openImagePicker = async () => {
        let resp = await requestCameraPermission()
        if (resp) {
            setUploadApiResp((prev) => ({ ...prev, data:null }))
            setSelectedImage(null)
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
            }).then(image => {
                setSelectedImage(image.path);
            }).catch(error => {
                console.log('Error:', error);
            });
        }
    };

    const onUploadImage = async () => {
        try {
            setUploadApiResp((prev) => ({ ...prev, loading: true }))
            let resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            let data = await resp.json()
            setUploadApiResp((prev) => ({ ...prev, data, loading: false }))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <View style={styles?.["main"]}>
                <View style={styles?.["heading"]}>
                    <Text style={styles?.["headingText"]}>Welcom to "Gaia"</Text>
                </View>
                <Text style={{ justifyContent: "center", alignItems: "center", width: "100%", textAlign: "center" }}>
                    <Text style={styles.chooseImage}>
                        <CustomButton onPress={(e) => { openImagePicker(e) }} buttonTitle={selectedImage ? "Change Image" : "Choose Image"} />
                    </Text>
                </Text>
                {selectedImage && (
                    <View style={{ alignItems: "center" }}>
                        <Image source={{ uri: selectedImage }} style={styles.selectedImageContainer} />
                        <Text style={{ justifyContent: "center", alignItems: "center", width: "100%", textAlign: "center", marginBottom: 15 }}>
                            <Text style={styles.uploadButton}>
                                <CustomButton onPress={(e) => { onUploadImage(e) }} buttonTitle={uploadApiResp?.loading ? "Uploading..." : "Upload Now"} />
                            </Text>
                        </Text>
                    </View>
                )}

                {/* <View style={{justifyContent:"center", alignItems:"center"}}> */}
                <Text style={styles.hintSection}>Upload Image and get the details from it</Text>
                {/* </View> */}
            </View>

            {uploadApiResp?.data ? < View style={styles?.["main"]}>
                <View style={styles?.["heading"]}>
                    <Text style={styles?.["headingText"]}>Here your detailed information</Text>
                    <Text style={{textAlign:"center"}}>Work in progress...</Text>
                </View>
            </View > : null}
        </>
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
        textAlign: "center",
    },
    chooseImage: {
        width: "50%",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center"
    },
    hintSection: {
        position: "absolute",
        bottom: 0,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        width: "100%",
        fontSize: 14,
        color: "#D1D0D0"
        // 0 0 0 10px rgba(0,0,0,0.03),0 0 0 10px rgba(255,255,255,0.22) inset
    },
    selectedImageContainer: {
        borderRadius: 8,
        borderWidth: 1,             // Border thickness (5 points)
        borderColor: '#D1D0D0',      // Border color (black)
        borderStyle: "solid",
        width: 200, height: 200,
        marginBottom: 25,
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
    }


});

export default UploadSection