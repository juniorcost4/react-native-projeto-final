import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image } from 'react-native';
import { styles } from './styles'
import Api from '../../../service/Api'

export default function Produto(props) {

    return (
        <View style={styles.container}>
        <View style={styles.cardProduto}>
            <Text style={styles.text}>
                Nome do produto: {props.produto.nome}
            </Text>
            <Image source={{uri: `${props?.foto?.uri}`}} style={{height: 120}}/>
            <Text style={styles.text}>
                Valor: R$ {props.produto.vlUnitario}
            </Text>
        </View>
        </View>
    );
}