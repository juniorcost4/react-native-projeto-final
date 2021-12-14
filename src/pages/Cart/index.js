import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { useCart } from "../../contexts/cart";
export default function Cart() {

    const { remove, cart, totalValue } = useCart()

    return (
    <View style={styles.container}>
        <Text style={styles.texto}>Seu carrinho de compras</Text>
            {/* <View style={styles.gradeImagem}> 
                <Text>imagem prodtuo</Text>
                </View> */}

            <View style={styles.gradeProduto}>
                <FlatList 
                data={cart}
                renderItem={({item}) => {
                    return (
                        <>
                        <Image source={item.imageUrl} style={{height: 80}} resizeMode="contain" />
                        <TouchableOpacity
                            style={styles.btAdicionarCarrinho}
                            onPress={() => {
                                alert("Produto Removido do Carrinho")
                                remove(item);
                            }}
                            >
                            <Text style={styles.textoBt}>Remover do carrinho</Text>
                        </TouchableOpacity>
                        <Text style={styles.produtoTitulo}>{item.nome}</Text>
                        <Text style={styles.produtosTexto}>Descrição: {item.descricao}</Text> 
                        <Text style={styles.produtosTexto}>Quantidade: {item.qtd}</Text> 
                        <Text style={styles.produtosTexto}>Valor unitario: {item.valorUnitario}</Text>
                        </>
                    )
                }}
                keyExtractor={(item) => item.id} /*problema de key por causa de qtd*//> 
                <Text style={{fontSize: 18, color: 'blue'}}>Valor total da compra: R$ {totalValue}</Text>
             </View>
    
    </View>
    
    );
}