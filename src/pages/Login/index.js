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
import { mockLogin } from "../../service/Auth"


function Login({ navigation }) {

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
        <ButtonSubmit onPress={() => navigation.navigate('Tabs')}> 
        {/* mudar onPress para o mockLogin */}
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Login;