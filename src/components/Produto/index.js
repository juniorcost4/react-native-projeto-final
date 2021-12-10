import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import Api from '../../../service/Api'
import { ButtonSubmit } from '../../pages/Login/styles';

export default function Produto(props) {

    return (
        <View style={styles.container}>
        <View style={styles.cardProduto}>
            <Text style={styles.text}>
                {props.produto.nome}
            </Text>
            <Image source={{uri: `${props?.foto?.uri}`}} style={{height: 120, width: 120,}}/>
            <Text style={styles.price}>
                R$ {props.produto.vlUnitario}0
            </Text>
            <TouchableOpacity style={styles.btnSubmit}>Ver detalhes</TouchableOpacity>
        </View>
        </View>
    );
}