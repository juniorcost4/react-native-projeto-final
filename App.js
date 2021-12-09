import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Detalhes from "./src/pages/Detalhes";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
  <Tab.Navigator>
    <Stack.Screen name="Tab" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Detalhes" component={Detalhes} />
  </Tab.Navigator>
  );
}
export default function App() {  
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#45B39D'}} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}}/>
          <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown: true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
}
