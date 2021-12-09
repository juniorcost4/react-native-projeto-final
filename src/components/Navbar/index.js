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
            <Ionicons name="search-outline" size={25} />
            <TextInput style={styles.input} placeholder="  Pesquisar" onChangeText={setItem} value={item}/>
            <TouchableOpacity onPress={() => navigation.navigate("Detalhes")}>
                <Text>
                    <Ionicons name="earth" size={28} style={{marginLeft: 70}}/>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    <Ionicons name="cart" size={28} style={{marginLeft: 10}}/>
                </Text>
            </TouchableOpacity>
        </View>
    );
}