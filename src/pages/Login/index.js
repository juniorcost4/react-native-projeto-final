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
import { TouchableOpacity } from "react-native";

function Login({ navigation, route }) {
  const signIn = route.params?.signIn;
  const password = route.params?.password;
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
        <ButtonSubmit onPress={() => {
          if (email !== signIn || senha !== password) {
            return;
          } else {
            navigation.navigate('Tabs');
          }
        }}>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
        <TouchableOpacity
          style={{ marginVertical: 15 }}
          onPress={() => navigation.navigate('Cadastro')}>
          <TextButton style={{ marginTop: 30, fontSize: 15, textDecorationLine: 'underline' }}>
            Ainda não é usuário?
          </TextButton>
        </TouchableOpacity>
      </Container>
    </KeyboardView>
  );
}

export default Login;