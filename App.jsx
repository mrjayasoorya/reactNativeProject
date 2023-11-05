// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
// https://reactnative.dev/docs/components-and-apis
// https://reactnative.dev/docs/intro-react-native-components
// https://reactnavigation.org/docs/drawer-layout
// https://www.npmjs.com/package/@gorhom/bottom-sheet
// https://callstack.github.io/react-native-paper/docs/components/RadioButton/RadioButtonGroup


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: "Home",
        }}
        />
        <Stack.Screen name="Detail" component={DetailScreen}
          options={{
            headerTitle: "Detail",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;