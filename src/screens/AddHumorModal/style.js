import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingBottom: 53,
    },
    topItens: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 82,
        width: '90%',
        marginTop: 60
    },
    textTitle: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 30,
        color: '#000000',
        lineHeight: 45
    },
    dateContainer: {
        width: '90%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    dateItem: {
        flexDirection: 'row',
    },
    textDate: {
        fontFamily: 'SourceSansPro-Regular',
        color: '#969696',
        fontSize: 14
    },
    bottomItens: {
        width: '100%',
        height: 610,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    description: {
        width: '90%',
        height: 90,
        paddingHorizontal: 15,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
    },
    textDescription: {
        lineHeight: 20,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        color: '#000000'
    },
    buttonSaveCard: {
        width: '90%',
        height: 52,
        borderRadius: 5,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonSaveCard: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 15,
        lineHeight: 19,
        color: '#FFFFFF',
    }
});
