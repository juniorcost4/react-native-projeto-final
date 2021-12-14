import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useAuthValue } from "../../contexts/auth";

export default function Navbar() {
    const navigation = useNavigation();
    const [item, setItem] = useState('');

    const { login, removeLogin } = useAuthValue();

    let loginButton = <></>;

    if (login) {
        loginButton = (
            <View>
                <TouchableOpacity onPress={() => {
                    console.log("sair");
                    removeLogin();
                    navigation.navigate('Login');
                }}>
                    < Ionicons name="enter-outline" size={28} style={{ marginRight: 10 }}/>
                </TouchableOpacity> 
            </View>
        );
    } else {
        loginButton = (
            <View>
                <TouchableOpacity onPress={() => {
                    console.log("entrar");
                    navigation.navigate('Cadastro');
                }}>
                    < Ionicons name="enter-outline" size={28} style={{ marginRight: 10 }}/>
                </TouchableOpacity> 
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchImput}>
                <Ionicons name="search-outline" size={25} style={{ marginRight: 10 }}/>
                <TextInput style={styles.input} placeholder="  Pesquisar" onChangeText={setItem} value={item}/>
            </View>
            {loginButton}
        </View>
    );
}