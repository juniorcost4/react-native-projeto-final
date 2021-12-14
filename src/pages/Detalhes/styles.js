import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor: '#27AE60',
      borderRadius: 3,
      borderWidth: 5,
    },

    texto: {
        fontSize: 30,
        color: 'white',
        backgroundColor: '#1E6658',
    },

    bt: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
        width: 40,
        height: 28,
        padding: 2,
        marginBottom: 15,
    },

    btAdicionarCarrinho: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
        width: 230,
        height: 40,
        marginLeft: 52.5,
    },

    textoBt:{
        color: 'red',
        fontSize: 22,
        fontWeight: "bold",
    },

    textoQt: {
        fontSize: 22,
        marginRight: 40,
        marginLeft: 50,
    },

    espacoFotoProduto: {
        margin: 5,
    },

    img: {
        width: 320,
        height: 200,
        marginBottom: 5,
      },

  });