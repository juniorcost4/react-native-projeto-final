import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {  
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#45B39D'}} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
}
 
//Adicionar biblioteca => yarn ou npm add styled-components
