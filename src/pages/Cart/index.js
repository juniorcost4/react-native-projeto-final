import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';
export default function Cart() {

    return (
    <View style={styles.container}>
        <Text style={styles.texto}>Seu carrinho de compras</Text>

            <View style={styles.gradeImagem}> 
                <Text>imagem prodtuo</Text>
            </View>

            <View style={styles.gradeProduto}>
                <Text style={styles.produtoTitulo}>Produto Nome</Text>
                <Text style={styles.produtosTexto}>Descrição: </Text> 
                <Text style={styles.produtosTexto}>Quantidade: </Text> 
                <Text style={styles.produtosTexto}>Valor unitario: </Text>
                <Text style={styles.produtosTexto}> Valor total: </Text>
             </View>
    
    </View>
    
    );
}