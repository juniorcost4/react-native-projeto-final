import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Api from '../../service/Api';
import { ButtonSubmit } from '../../pages/Login/styles';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Produto(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.cardProduto}>
                <Text style={styles.text}>
                    {props.produto.nome}
                </Text>
                <Image source={{ uri: `${props?.foto?.uri}` }} style={styles.img} />
                <Text style={styles.price}>
                < Ionicons name="logo-bitcoin" size={18}/> {props.produto.vlUnitario}
                </Text>
                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={() => navigation.navigate('Detalhes', { id: props.produto.id, uri: props.foto.uri })}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>Ver detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}