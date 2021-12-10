import React, { useState } from "react";
import { View, Text } from 'react-native';
import { TouchableOpacity } from "react-native-web";
import { styles } from './styles';


export default function Detalhes() {


    
    return (
        // <View style={{flex:1}}>
            <View style={styles.container}>
                 <Text style={styles.texto}>Seu carrinho de compras</Text>
            {/* </View> */}

            <View style={styles.gradeProduto}>
                <Text style={styles.produtosTexto}>Produto 1</Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}> Descrição: </Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}>Quantidade: </Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}>Valor unitario: </Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}> Valor total: </Text> <Text> -- </Text>
            </View>
{/* 
            <View style={styles.gradeProduto}>
                <Text style={styles.produtosTexto}>Produto 1</Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}> Descrição: </Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}>Quantidade: </Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}>Valor unitario: </Text> <Text> -- </Text>
                <Text style={styles.produtosTexto}> Valor total: </Text> <Text> -- </Text>
            </View> */}

            <View style={styles.valorTotal}> TOTAL: </View>
            
            <View style={styles.valorTotal}> 
            <TouchableOpacity style={styles.btFinalizarPedido}>
                  <Text style={styles.textoFinalizarPedido}>Finalizar Pedido </Text>
            </TouchableOpacity>
            </View>



        </View>
        
    );
}