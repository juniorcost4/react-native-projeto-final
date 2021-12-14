import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { useCart } from "../../contexts/cart";
export default function Cart() {

    const { remove, cart, totalValue } = useCart()

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Seu carrinho de compras</Text>
            <View style={styles.gradeProduto}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={{ marginVertical: 30 }}>
                                    <Image source={item.imageUrl} style={{ height: 80 }} resizeMode="contain" />
                                    <TouchableOpacity
                                        style={styles.btAdicionarCarrinho}
                                        onPress={() => {
                                            remove(item);
                                        }}
                                    >
                                        <Text style={styles.textoBt}>Remover do carrinho</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.produtoTitulo}>{item.nome}</Text>
                                    <Text style={styles.produtosTexto}>Descrição: {item.descricao}</Text>
                                    <Text style={styles.produtosTexto}>Quantidade: {item.qtd}</Text>
                                    <Text style={styles.produtosTexto}>Valor unitario: R$ {item.valorUnitario}</Text>
                                </View>
                            </>
                        )
                    }}
                    keyExtractor={(item) => item.id} />

                {cart.length == 0 && <Text style={{
                    marginVertical: 10,
                    fontSize: 20,
                    color: '#27AE60',
                    fontWeight: '600'
                }}>
                    Seu carrinho está vazio
                </Text>}

                {cart.length > 0 && <Text style={{
                    marginVertical: 10,
                    fontSize: 20,
                    color: '#27AE60',
                    fontWeight: '600'
                }}>
                    Valor total da compra: R$ {totalValue}
                </Text>}
            </View>
        </View>
    );
}