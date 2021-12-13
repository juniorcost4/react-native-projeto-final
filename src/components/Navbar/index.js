import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

    const navigation = useNavigation()
    const [item, setItem] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.searchImput}>
                <Ionicons name="search-outline" size={25} style={{ marginRight: 10 }}/>
                <TextInput style={styles.input} placeholder="  Pesquisar" onChangeText={setItem} value={item}/>
            </View>
            <View>
                <TouchableOpacity>
                    < Ionicons name="enter-outline" size={28} style={{ marginRight: 10 }}/>
                </TouchableOpacity> 
            </View>
        </View>
    );
}