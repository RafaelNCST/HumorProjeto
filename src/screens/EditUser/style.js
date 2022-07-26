import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contentView: {
        height: 700,
    },
    topItens: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    imageItem: {
        width: 120,
        height: 120,
        marginTop: 30,
    },
    bottomItens: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    allInputsContainer: {
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputContainer: {
        width: 320,
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputInfos: {
        width: 320,
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000000',
    },
    textInput: {
        alignSelf: 'flex-start',
        fontFamily: 'SourceSansPro-Bold',
        color: '#000000',
        fontSize: 15,
        lineHeight: 19
    },
    saveButton: {
        width: 320,
        height: 52,
        backgroundColor: '#304FFE',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 15,
        lineHeight: 19,
        color: '#FFFFFF',
    }
})