import { StatusBar } from "expo-status-bar";
import React from "react";
import Signin from "./src/pages/Login";


export default function App() {  
  return (
    <>
      <Signin />
      <StatusBar style="light" />
    </> 
  );
}
 
//Adicionar biblioteca => yarn ou npm add styled-components
