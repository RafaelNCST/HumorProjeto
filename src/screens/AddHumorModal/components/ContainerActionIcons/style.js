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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    item: {
        flex: 1,
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