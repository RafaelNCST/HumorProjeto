import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bodyScreen: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 30,
        borderRadius: 9,
        width: 36,
        height: 36,
        backgroundColor: 'rgba(48,79,254,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itensContainer: {
        width: '93%',
        height: 470,
        marginTop: 47,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
