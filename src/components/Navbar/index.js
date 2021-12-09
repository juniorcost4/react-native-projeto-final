import React, { useState } from "react";
import { TextInput, View } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export default function Navbar() {

    const [item, setItem] = useState('')

    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={25} />
            <TextInput style={styles.input} placeholder="  Pesquisar" onChangeText={setItem} value={item}/>
            <Ionicons name="cart" size={28} style={{marginLeft: 100}}/>
        </View>
    );
}