import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardProduto: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        textAlign: 'center',
        padding: 10,
        height: 'auto',
        maxWidth: 200

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
        color: '#27AE60',
        fontWeight: '600',
        fontSize: 16,
    },
    btnSubmit: {
        backgroundColor: '#27AE60',
        borderRadius: 9,
        padding: 10,
        color: 'white'
    },
    img: {
        height: 120, 
        width: 120, 
        alignSelf: 'center'
    }
})