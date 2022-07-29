import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    bodyModal: {
        width: '90%',
        height: 200,
        borderRadius: 25,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
    },
    topItens: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itensMiddle: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textChecked: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 18,
        color: '#E42323',
    },
    bottomItens: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E42323',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    buttonChecked: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#000000',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 18,
    }
})