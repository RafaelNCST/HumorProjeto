import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottomItens: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '59%',
        width: '100%',
    },
    containerActions: {
        width: '100%',
        height: 158,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(90, 108, 234, .7)',
        elevation: 15,
    },
    iconView: {
        width: 50,
        height: 50,
        borderRadius: 52,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itensActions: {
        width: 100,
        height: 75,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textActions: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 14,
        color: '#000000',
    },
    containerDescription: {
        width: '100%',
        height: 100,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(90, 108, 234, .7)',
        elevation: 15,
        borderRadius: 20,
    },
    textDescription: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'SourceSansPro-Regular',
        color: '#000000',
    },
})