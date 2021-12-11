import React, { useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import gato from '../../../assets/gatofeio.png';
import Api from "../../../service/Api";

export default function Detalhes({ route }) {

  const { id } = route.params;
  const [count, setCount] = useState(1);
  const [produto, setProduto] = useState({})
  const mais = () => setCount(prevCount => prevCount + 1);
  const menos = () => setCount(prevCount => prevCount - 1);

  function search() {
    Api.get(`produtos/${id}`).then(exibir)
  }

  function exibir(response) {
    setProduto(response.data)
  }

  useEffect(() => search(), []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.texto}>Detalhes do Produto</Text>


        <View style={{ alignSelf: 'center' }}>

          <View style={styles.espacoFotoProduto}>
            <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>Gato Que Nem Parece Gato</Text>
            <Image source={gato} style={styles.img} resizeMode="contain" />
            <Text>Esse é um gato muito feio. De acordo com Joey de Friends,
              isso nem é um gato!!!!
              (Tadin do gato)
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            {/* BOTAO DE ADICIONAR QUANTIDADE AO CARRINHO*/}
            <TouchableOpacity
              style={styles.bt}
              onPress={menos}>
              <Text>-</Text>
            </TouchableOpacity>

            <View>
              <Text style={styles.textoQt}>Quantidade: {count}</Text>
            </View>

            {/* BOTAO DE RETIRAR QUANTIDADE DO CARRINHO */}
            <TouchableOpacity
              style={styles.bt}
              onPress={mais}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btAdicionarCarrinho}>
            <Text style={styles.textoBt}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}