import React, { useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Api from "../../service/Api";
import { useCart } from '../../contexts/cart';
import { useAuthValue } from "../../contexts/auth";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'

export default function Detalhes({ route, navigation }) {

  const { add } = useCart();
  const { login } = useAuthValue();

  const { id } = route.params;
  const [produto, setProduto] = useState({})
  const [qtd, setQtd] = useState(1)
  const mais = () => setQtd(prevCount => prevCount + 1);
  const menos = () => setQtd(prevCount => {
    if (prevCount > 0) {
      return prevCount - 1;
    } else {
      return prevCount;
    }
  });
  const fotoApi = route.params;

  function search() {
    Api.get(`produtos/${id}`).then((response) => setProduto(response.data))
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

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 10 }}>

            <TouchableOpacity
              style={styles.bt}
              onPress={menos}>
              <AntDesign name="minuscircleo" size={24} color="black" />
            </TouchableOpacity>

            <View>
              <Text style={styles.textoQt}>Quantidade: {qtd}</Text>
            </View>

            <TouchableOpacity
              style={styles.bt}
              onPress={mais}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: 10}}>
            <Text style={{ fontSize: 15, alignSelf: 'center' }}>Valor unitário: < Ionicons name="logo-bitcoin" size={18}/> {produto.vlUnitario} </Text>
            <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 5 }}>Total: < Ionicons name="logo-bitcoin" size={18}/> {produto.vlUnitario * qtd}</Text>

          </View>

          <TouchableOpacity
            style={styles.btAdicionarCarrinho}
            onPress={() => {
              const newProduct = {
                id: produto.id,
                nome: produto.nome,
                descricao: produto.descricao,
                valorUnitario: produto.vlUnitario,
                qtd: qtd,
                valorTotalItem: produto.vlUnitario * qtd,
                imageUrl: fotoApi,
              }
              add(newProduct);

              if (login) {
                return navigation.navigate("Cart");
              } else {
                return navigation.navigate("Login")
              };
            }}
          >
            <Text style={styles.textoBt}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}