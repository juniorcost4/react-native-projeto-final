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
        backgroundColor: '#27AE60',
    },

    bt: {
        alignItems: 'center',
        backgroundColor: '#27AE60',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
        width: 40,
        height: 31,
        padding: 2,
        marginBottom: 15,
    },

    btAdicionarCarrinho: {
        backgroundColor: '#27AE60',
        borderRadius: 9,
        padding: 10,
        color: 'white',
        alignItems: 'center',
        marginVertical: 15,
    },

    textoBt:{
        color: 'white',
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