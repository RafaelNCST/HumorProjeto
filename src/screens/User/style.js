import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        alignItems: 'center'
    },
    itensContainer: {
        width: '100%',
        height: 430,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 84,
    },
    imageContainer: {
        width: 140,
        height: 140,
    },
    imageItem: {
        width: 130,
        height: 130,
    },
    textHello: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 36,
        lineHeight: 45,
        color: '#000000',
    },
    infosContainer: {
        width: '80%',
    },
    textContainer: {
        flexDirection: 'row'
    },
    textLabel: {
        fontFamily: 'SourceSansPro-Bold',
        color: '#000000',
        fontSize: 14,
    },
    textInfos: {
        marginLeft: 5,
        fontSize: 14,
        fontFamily: 'SourceSansPro-Regular',
        color: '#000000',
    },
    buttonsContainer: {
        width: '80%',
        height: 120,
        justifyContent: 'space-between'
    },
    buttonEditPerfil: {
        width: '100%',
        height: 52,
        borderRadius: 6,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonEditPerfil: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 15,
        lineHeight: 19,
        color: '#FFFFFF',
    },
}) 