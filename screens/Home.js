import React, { useState } from 'react';
import { View, Image, Button, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const HomeScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        return true
      } else {
        console.log('Camera permission denied');
        return false
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openImagePicker = async () => {
    let resp = await requestCameraPermission()
    if(resp){
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

  return (
    <View>
      <Button title="Select Image" onPress={openImagePicker} />
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Detail')}
      />
      {selectedImage && (
        <View>
          <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </View>
  );
};
export default HomeScreen