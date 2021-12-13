import { StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 14,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        height: 30,
        flex: 1,
    },
    searchImput: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 34,
    }
})