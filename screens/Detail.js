import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';

const DetailScreen = ({navigation}) => {

  return (
    <View>
     <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
export default DetailScreen