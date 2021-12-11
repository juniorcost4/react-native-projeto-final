import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Detalhes from "./src/pages/Detalhes";
import Cart from "./src/pages/Cart";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView, SafeAreaView } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function stackHome() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown: false}} />
  </Stack.Navigator>
  );
}

function Tabs() {
  return (
  <Tab.Navigator
  screenOptions={{
    activeTintColor: '#fff',
    tabStyle: {
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: '#222',
      borderTopColor: 'transparent',
    }

  }}
  >
    <Tab.Screen name="Inicio"
    component={stackHome} 
    options={{headerShown: false, tabBarIcon: ({size, color}) => (
      <Entypo name="home" size={size} color={color} />
    )
  }} 
    />
    <Tab.Screen name="Cart"
    component={Cart}
    options = {{headerShown: false , tabBarIcon:({size , color}) => (
      <Entypo name="shopping-cart" size={size} color={color} />
    )
    }}
  />
  </Tab.Navigator>
  );
}
export default function App() {  
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#45B39D'}} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
}
