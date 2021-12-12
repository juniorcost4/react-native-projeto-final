import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor: '#45B39D',
      borderRadius: 10,
      borderWidth: 5,
    },

    texto: {
        fontSize: 30,
        color: 'white',
        backgroundColor: '#1E6658',
        marginTop: 15,
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
        marginTop: 20,
        marginBottom: 20
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
        marginTop: 20,
        marginRight: 40,
        marginLeft: 50,
    },

    espacoFotoProduto: {
        margin: 10,
    },

    img: {
        width: 320,
        height: 200,
        marginBottom: 5,
      },

  });