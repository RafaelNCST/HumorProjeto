import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputsContainer: {
        marginTop: 20,
    },
    inputLogin: {
        height: 46,
        width: 321,
        marginTop: 21,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        paddingLeft: 15,
    },
    inputPassword: {
        width: '90%',
    },
    passwordInputContainer: {
        width: 321,
        height: 46,
        marginTop: 21,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
    },
    itensBottomContainer: {
        height: 128,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textError: {
        position: 'absolute',
        alignSelf: 'center',
        top: '25%',
        fontSize: 18,
        letterSpacing: 1,
        color: '#EB8484',
        fontFamily: 'SourceSansPro-SemiBold',
    },
    spinnerContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '25%',
    },
    buttonLogin: {
        width: 133,
        height: 46,
        borderRadius: 10,
        backgroundColor: '#C6CEFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonLogin: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 16,
        color: '#304FFE',
    },
})