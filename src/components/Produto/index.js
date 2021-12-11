import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import Api from '../../../service/Api'
import { ButtonSubmit } from '../../pages/Login/styles';
import { useNavigation } from '@react-navigation/native';

export default function Produto(props) {

const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <View style={styles.cardProduto}>
            <Text style={styles.text}>
                {props.produto.nome}
            </Text>
            <Image source={{uri: `${props?.foto?.uri}`}} style={styles.img}/>
            <Text style={styles.price}>
                R$ {props.produto.vlUnitario}0
            </Text>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Detalhes')}>
                <Text>Ver detalhes</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}