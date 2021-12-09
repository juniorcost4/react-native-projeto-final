import React from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";
import Header from "../../components/Header";


function Login() {

  return (
    <KeyboardView>
      <Header />

      <Container>
        <Title>Login</Title>
        <Input placeholderTextColor="#fff" placeholder="E-mail" />
        <Input
          placeholderTextColor="#fff" 
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Login;