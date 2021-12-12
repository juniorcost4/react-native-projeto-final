import React from "react";
import { SafeAreaView } from 'react-native';
import AuthContext from './contexts/auth'
import CartContext from './contexts/cart'
import CartProvider from "./contexts/cart";
import Routes from "./src/routes";

export default function App() {
  return (
    <CartProvider>
      <SafeAreaView style={{ backgroundColor: '#45B39D' }} />
      <Routes />
    </CartProvider>
  );
}
