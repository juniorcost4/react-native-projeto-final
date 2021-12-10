import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardProduto: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        textAlign: 'center',

    },
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        marginVertical: 10
    },
    price: {
        marginVertical: 10,
        color: '#45B39D',
        fontWeight: '600',
        fontSize: 16,
    },
    btnSubmit: {
        backgroundColor: '#45B39D',
        borderRadius: 9,
        padding: 10,
        color: 'white'
    }
})