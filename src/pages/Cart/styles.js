import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      borderColor: '#27AE60',
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
        fontSize: 15,
    },

    produtoTitulo: {
        fontSize: 22,
        color: '#153730',
        fontWeight:'bold',
    },

    gradeProduto:{
        backgroundColor: '#e6f2ff',
        borderBottomWidth: 10,
        borderBottomRightRadius: 25,
        borderColor:'#cce6ff',
        marginBottom: 65,
        marginTop: 5,
    },

    valorTotal: {
        fontWeight:'bold',
        fontSize: 50,
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
   },

   gradeImagem: {
       flex: 0.5,
       width: '60%',
       borderWidth: 3,
       borderColor: 'black',
       borderRadius: 10,
       resizeMode:'contain',
   },

   textoBt: {
       fontSize: 18, 
       color: 'red',
       alignSelf: 'center',
   }

});

