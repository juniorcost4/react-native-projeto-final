import React from "react";
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Detalhes from "./src/pages/Detalhes";
import Cart from "./src/pages/Cart";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AuthContext from './contexts/auth'
import CartContext from './contexts/cart'
import CartProvider from "./contexts/cart";

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
    activeTintColor: '#222',
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
    options={{
      headerShown: false,
      title: "Home",
      tabBarIcon: ({size, color}) => (
      <Entypo name="home" size={size} color={color} />
    )
  }} 
    />
    <Tab.Screen name="Cart"
    component={Cart}
    options = {{
      headerShown: false , 
      title: 'Carrinho',
      tabBarIcon:({size , color}) => (
      <Entypo name="shopping-cart" size={size} color={color} />
    )
    }}
  />
  </Tab.Navigator>
  );
}
export default function App() {  
  return (
    <CartProvider>
    <SafeAreaView style={{backgroundColor: '#45B39D'}} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider> 
  );
}
