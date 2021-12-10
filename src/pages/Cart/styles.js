import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      borderColor: '#45B39D',
      borderRadius: 10,
      borderWidth: 5,
    },

    texto : {
        fontSize: 30,
        color: 'white',
        backgroundColor: '#1E6658',
    } ,

    produtosTexto: {
        alignContent:'flex-start',
        fontWeight:'bold',
        fontSize:'15',
    },
    gradeProduto:{
        backgroundColor: '#e6f2ff',
        borderBottomWidth: 10,
        borderBottomRightRadius: 25,
        borderColor:'#cce6ff',
        marginTop: 30,
    },

    valorTotal: {
        fontWeight:'bold',
        fontSize: '50',
        flexDirection:'row',
        justifyContent:'flex-end'
    },

    btFinalizarPedido: {

        flexDirection:'row',
        justifyContent:'flex-end',
                
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
        width: 120,
        height: 30,
    },

    textoFinalizarPedido:{
        justifyContent:'center',
        fontSize: 12,
        fontWeight:'bold',
        
    }

});

