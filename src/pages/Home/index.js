import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles'
import Navbar from '../../components/Navbar';
import Api from '../../../service/Api'
import Produto from '../../components/Produto';


export default function Home() {

    const [listaProdutos, setProdutos] = React.useState([]);

    const chamadaAPI = async () => {

        await Api.get("/produtos").then((response) => setProdutos(response.data));

    };
    
    React.useEffect(() => { chamadaAPI() }, [])

    const imageList = [
        {
            uri: 'https://img.ibxk.com.br/2019/11/11/11183840382437.jpg?ims=704x'
        },
        {
            uri: 'https://img.ibxk.com.br/2019/11/11/11183942539438.jpg?ims=704x'
        },
        {
            uri: 'https://img.ibxk.com.br/2019/11/11/11184129867443.jpg?ims=704x'
        },
        {
            uri: 'https://www.kabum.com.br/conteudo/descricao/239611/img/iphone13_pro_max.png'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'data:image/jpeg;base64,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'
        },
        {
            uri: 'data:image/jpeg;base64,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'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'data:image/jpeg;base64,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'
        },

    ]
    listaProdutos.uri = imageList[0];
    return (
        <ScrollView style={styles.container}>
            <Navbar/>
            <View style={styles.containerFlatlist}>
                <Text style={styles.text}>Produtos em destaque</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listaProdutos}
                renderItem={() => listaProdutos.map((data, index) => (
                    <Produto key={data.id} produto={data} foto={imageList[index]} />
                ))}                
            />
            </View>
        </ScrollView>
    );
}