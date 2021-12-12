import React, { useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import gato from '../../../assets/gatofeio.png';
import Api from "../../../service/Api";
import { useCart } from '../../../contexts/cart'

export default function Detalhes({ route }) {

  const { add } = useCart()

  const { id } = route.params;
  const { foto } = route.params;
  const [count, setCount] = useState(1);
  const [produto, setProduto] = useState({})
  const mais = () => setCount(prevCount => prevCount + 1);
  const menos = () => setCount(prevCount => prevCount - 1);

  const fotoApi = route.params;

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
            <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }}>{produto.nome}</Text>
            <Image source={fotoApi} style={styles.img} resizeMode="contain" />
            <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}>Descrição: {produto.descricao}</Text>
            <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: 'bold' }}>Categoria: {produto.categoria}</Text>
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

          <View>
            <Text style={{fontSize: 15, alignSelf: 'center'}}>Valor Unitário: {produto.vlUnitario}</Text>
            <Text style={{fontSize: 18, alignSelf: 'center'}}>Total: {produto.vlUnitario * count}</Text>

          </View>

          <TouchableOpacity
            style={styles.btAdicionarCarrinho}
            onPress={() => add (produto)}>
            <Text style={styles.textoBt}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}