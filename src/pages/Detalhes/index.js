import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function Detalhes() {
    return (
        <View style={{flex:1}}>
            
            <View style={styles.container}>
            <Text style={styles.texto}>Detalhes do Produto</Text>
            <TouchableOpacity
        style={styles.bt}>
        <Text style={styles.textoBt}>Adicionar ao carrinho</Text>

</TouchableOpacity>
            </View>
            

        </View>
        
    );
}