import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles'
import Navbar from '../../components/Navbar';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Navbar/>
            <Text>Home</Text>
        </ScrollView>
    );
}