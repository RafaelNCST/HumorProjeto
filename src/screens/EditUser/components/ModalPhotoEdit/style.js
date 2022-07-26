import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    editPhotoButton: {
        width: '50%',
        height: 45,
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(48, 79, 254, 0.3)',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textEditPhotoButton: {
        fontFamily: 'SourceSansPro-Bold',
        color: '#304FFE',
        fontSize: 15,
        lineHeight: 19
    },
    bodyModal: {
        flex: 1,
        alignItems: 'center',
    },
    bodyItens: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topItens: {
        width: '100%',
        alignItems: 'center',
        height: 300,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 55
    },
    textTitle: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 22,
        lineHeight: 36,
        color: '#000000'
    },
    imagesAllContainer: {
        width: 350,
        maxWidth: 350,
        height: 210,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageContainerActive: {
        width: 105,
        height: 105,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#304FFE',
        borderRadius: 52
    },
    imageContainerInactive: {
        width: 105,
        height: 105,
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 52
    },
    imagesUser: {
        width: 90,
        height: 90,
    },
    buttonConfirm: {
        width: '80%',
        height: 52,
        marginTop: 50,
        backgroundColor: '#304FFE',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonConfirm: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 15,
        lineHeight: 19,
        color: '#FFFFFF'
    }
})