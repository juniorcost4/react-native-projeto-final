import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';
import { useCart } from "../../../contexts/cart"
import { FlatList } from "react-native-web";
export default function Cart() {

    const { add, cart, totalValue } = useCart()

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
                        <Text style={styles.produtosTexto}>Quantidade: </Text> 
                        <Text style={styles.produtosTexto}>Valor unitario: {item.vlUnitario}</Text>  
                        </>
                    )
                }}
                keyExtractor={new Date().getMilliseconds}/>
                <Text>Valor total: {totalValue}</Text>
             </View>
    
    </View>
    
    );
}