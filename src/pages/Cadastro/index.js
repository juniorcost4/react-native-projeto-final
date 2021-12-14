import React, { useState } from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "../Login/styles";
import Header from "../../components/Header";
import { useAuthValue } from "../../contexts/auth";
import { TouchableOpacity } from "react-native";


function Cadastro({ navigation }) {
  const { handleLogin } = useAuthValue();

  const [email, setEmail] = useState("exemplo");
  const [senha, setSenha] = useState("123");
  const [confirmSenha, setConfirmSenha] = useState("123")

  return (
    <KeyboardView>
      <Header />

      <Container>
        <Title>Cadastre-se</Title>
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
        <Input
          placeholderTextColor="#fff" 
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confirmSenha}
          onChangeText={text => setConfirmSenha(text)}
        />
        <ButtonSubmit onPress={async () => {
          await handleLogin({ loginUsuario: email, senhaUsuario: senha});
          if (email === "" || senha === "") {
            navigation.navigate('Cadastro')
          } else if (senha !== confirmSenha) {
            navigation.navigate('Cadastro')
          }else {
            navigation.navigate('Login', {signIn: email, password: senha});
          }
        }}> 
          <TextButton>Cadastrar</TextButton>
        </ButtonSubmit>
        <TouchableOpacity
        style={{marginVertical: 15}}
        onPress={() => navigation.navigate('Login')}>
        <TextButton style={{marginTop: 30, fontSize: 15, textDecorationLine: 'underline'}}>
            Já possui uma conta?
        </TextButton>
        </TouchableOpacity>

      </Container>
    </KeyboardView>
  );
}

export default Cadastro;