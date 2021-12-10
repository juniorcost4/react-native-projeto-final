import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import gato from '../../../assets/gatofeio.png';

export default function Detalhes() {

    const [count, setCount] = useState(0);
    const mais = () => setCount(prevCount => prevCount + 1);
    const menos= () => setCount(prevCount => prevCount - 1);

    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                 <Text style={styles.texto}>Detalhes do Produto</Text>
                
                
                <View style={{alignSelf:'center'}}>

                <View style={styles.espacoFotoProduto}>
                  <Text style={{alignSelf:'center', fontSize: 25, fontWeight: 'bold'}}>Gato Que Nem Parece Gato</Text>
                  <Image source={gato} style={styles.img} resizeMode="contain" />
                  <Text>Esse é um gato muito feio. De acordo com Joey de Friends,
                    isso nem é um gato!!!!
                  </Text>
                </View>

                  <View style={{flexDirection:'row', alignSelf:'center'}}>
                    {/* BOTAO DE ADICIONAR QUANTIDADE AO CARRINHO*/}
                    <TouchableOpacity
                     style={styles.bt}
                        onPress={menos}>
                             <Text>-</Text>
                    </TouchableOpacity>

                    <View>
                      <Text style={styles.textoQt}>Quantidade: {count}</Text>
                    </View> 

                 {/* BOTAO DE RETIRAR QUANTIDADE DO CARRINHO */}
                    <TouchableOpacity
                    style={styles.bt}
                    onPress={mais}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>    

                    <TouchableOpacity
                     style={styles.btAdicionarCarrinho}>
                    <Text style={styles.textoBt}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}