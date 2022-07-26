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
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
    },
    eyeVisibilityButton: {
        position: 'absolute',
        top: 98,
        right: 10,
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
        color: '#ffd700',
        fontFamily: 'SourceSansPro-SemiBold',
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