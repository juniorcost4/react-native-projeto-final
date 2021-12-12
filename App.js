import React from "react";
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AuthContext from './contexts/auth'
import CartContext from './contexts/cart'
import CartProvider from "./contexts/cart";
import Routes from "./src/routes";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
      <SafeAreaView style={{ backgroundColor: '#45B39D' }} />
      <Routes />
      </NavigationContainer>
    </CartProvider>
  );
}
