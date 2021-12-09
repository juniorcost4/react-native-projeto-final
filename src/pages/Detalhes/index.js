import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function Detalhes() {

    const [count, setCount] = useState(0);
    const mais = () => setCount(prevCount => prevCount + 1);
    const menos= () => setCount(prevCount => prevCount - 1);

    return (
        <View style={{flex:1}}>
            <View style={styles.container}>
                 <Text style={styles.texto}>Detalhes do Produto</Text>
                
                
                <View style={{alignSelf:'flex-end'}}>


                  <View style={{flexDirection:'row'}}>
                    {/* BOTAO DE ADICIONAR QUANTIDADE AO CARRINHO*/}
                    <TouchableOpacity
                     style={styles.bt}
                        onPress={mais}>
                             <Text>      +     </Text>
                    </TouchableOpacity>

                    <View>
                 <Text style={styles.textoQt}>  Quantidade:   {count}</Text>
                    </View> 

                 {/* BOTAO DE RETIRAR QUANTIDADE DO CARRINHO */}
                    <TouchableOpacity
                    style={styles.bt}
                    onPress={menos}>
                    <Text >     -       </Text>
                    </TouchableOpacity>
                  </View>    

                    <TouchableOpacity
                     style={styles.bt}>
                    <Text style={styles.textoBt}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}