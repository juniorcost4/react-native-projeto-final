import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles'
import Navbar from '../../components/Navbar';
import Api from '../../../service/Api'
import Produto from '../../components/Produto';


export default function Home() {

    const [listaProdutos, setProdutos] = React.useState([]);

    const chamadaAPI = async () => {

        console.log('passou aqui')
        await Api.get("/produtos").then((response) => setProdutos(response.data));

    };
    
    React.useEffect(() => { chamadaAPI() }, [])

    const imageList = [
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            uri: 'https://images.pexels.com/photos/9311992/pexels-photo-9311992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },

    ]

    return (
        <ScrollView style={styles.container}>
            <Navbar/>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listaProdutos}
                renderItem={() => listaProdutos.map((prod, index) => (
                    <Produto key={prod.id} produto={prod} foto={imageList[index]} />
                ))}
            />
        </ScrollView>
    );
}