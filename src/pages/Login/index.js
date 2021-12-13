import React, { useState } from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";
import Header from "../../components/Header";
import { useAuthValue } from "../../contexts/auth";


function Login({ navigation }) {
  const { handleLogin } = useAuthValue();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardView>
      <Header />

      <Container>
        <Title>Login</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail" 
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholderTextColor="#fff" 
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={text => setSenha(text)}
        />
        <ButtonSubmit onPress={async () => {
          await handleLogin({ loginUsuario: email, senhaUsuario: senha});
          navigation.navigate('Tabs');
        }}> 
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Login;