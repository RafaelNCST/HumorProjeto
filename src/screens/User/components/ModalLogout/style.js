import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textButtonLogout: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 15,
        lineHeight: 19,
        color: '#000000',
    },
    buttonLogout: {
        width: '100%',
        height: 52,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBody: {
        width: '90%',
        height: 200,
        borderRadius: 25,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        paddingVertical: 27,
        paddingHorizontal: 40,
    },
    titlesContainer: {
        height: '40%',
        justifyContent: 'space-between'
    },
    textTitle: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 22,
        lineHeight: 36,
        color: '#000000',
    },
    textBody: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        lineHeight: 30,
        color: '#969696',

    },
    buttonsContainer: {
        width: '50%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textButton: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 15,
        lineHeight: 27,
        color: '#000000',
    }
})