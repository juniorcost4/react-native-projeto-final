import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { styles } from './styles';
import { useCart } from "../../contexts/cart";
export default function Cart() {

    const { remove, cart, totalValue, qtd } = useCart()

    return (
    <View style={styles.container}>
        <Text style={styles.texto}>Seu carrinho de compras</Text>

            <View style={styles.gradeImagem}> 
                <Text>imagem prodtuo</Text>
            </View>

            <View style={styles.gradeProduto}>
                <FlatList 
                data={cart}
                renderItem={({item}) => {
                    return (
                        <>
                        <Text style={styles.produtoTitulo}>{item.nome}</Text>
                        <Text style={styles.produtosTexto}>Descrição: {item.descricao}</Text> 
                        <Text style={styles.produtosTexto}>Quantidade: {qtd} </Text> 
                        <Text style={styles.produtosTexto}>Valor unitario: {item.vlUnitario}</Text>  
                        </>
                    )
                }}
                keyExtractor={(item) => item.id}/>
                <Text>Valor total da compra: R$ {totalValue}</Text>
             </View>
    
    </View>
    
    );
}