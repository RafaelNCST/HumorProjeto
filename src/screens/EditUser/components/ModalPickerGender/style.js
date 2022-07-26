import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listGender: {
        width: 320,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderColor: '#000000',
    },
    bodyScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalGender: {
        width: '80%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
    },
    buttonIconsInput: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerTitle: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderBottomWidth: 1,
    },
    textTitle: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 18,
        color: '#000000',
    },
    buttonGender: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderBottomWidth: 1,
    },
    textButtonGender: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        color: '#000000',
    },
    textInput: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        color: '#000000',
    },
})