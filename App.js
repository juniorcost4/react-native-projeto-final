import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import CartProvider from "./src/contexts/cart";
import Routes from "./src/routes";
import { MyStatusBar } from "./src/components/MyStatusBar";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyStatusBar backgroundColor="#27AE60"/>
        <Routes />
      </NavigationContainer>
    </CartProvider>
  );
}
