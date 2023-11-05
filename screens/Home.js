import React, { useState } from 'react';
import { View, Image, Button, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import UploadSection from '../components/Card/UploadSection';
// https://reactnative.dev/docs/permissionsandroid
// https://reactnavigation.org/docs/stack-navigator/#headershown

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <UploadSection />
    </View>
  );
};
export default HomeScreen