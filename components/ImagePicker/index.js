import React from 'react';
import { useWindowDimensions } from 'react-native';

const ImageSelection= () => {
  const { width, height } = useWindowDimensions();
  
  return (
    <View style={{ width: width, height: height }}>
      <Text>My FlexBox</Text>
    </View>
  );
};

export default ImageSelection