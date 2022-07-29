import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boardIcons: {
        height: 430,
        width: '90%',
        borderStyle: 'solid',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000000',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    gridItens: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    item: {
        height: 100,
        width: 100,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        width: 59,
        height: 59,
        borderRadius: 52,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    textActivities: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 12,
        color: '#000000',
    },
})