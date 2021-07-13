import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Homescreen } from "./Screens/home_screen"
import { RacesScreen } from "./Screens/races_screen"

const Stack = createStackNavigator()

const App = () => {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ Homescreen }>
        <Stack.Screen
          component={ Homescreen }
          name = 'F1'
        />
        <Stack.Screen
          component={ RacesScreen }
          name = 'RacesScreen'
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider> 
  )
}

export default App;