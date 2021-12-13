import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import CartProvider from "./src/contexts/cart";
import AuthProvider from "./src/contexts/auth";

import Routes from "./src/routes";
import { MyStatusBar } from "./src/components/MyStatusBar";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <MyStatusBar backgroundColor="#27AE60"/>
          <Routes />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
