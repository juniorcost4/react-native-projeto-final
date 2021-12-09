import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles'
import Navbar from '../../components/Navbar';

const data = [
    ''
]
export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Navbar/>
            <FlatList horizontal />
        </ScrollView>
    );
}