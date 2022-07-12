import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    bodyScreen:{
        flex: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    backButton:{
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
    itensContainer:{
        width: '92%',
        height: 480,
        marginTop: 47,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerDate:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    itensDate:{
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textDate:{
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 4,
        fontFamily: 'SourceSansPro-Regular',
        color: '#969696',
    },
    containerHumor:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHumor:{
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 25,
    },
    containerActions:{
        width: '100%',
        elevation: 3,
        height: 158,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconView:{
        width: 45,
        height: 45,
        borderRadius: 52,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itensActions:{
        width: 68,
        height: 72,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textActions:{
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 14,
        color: '#000000',
    },
    containerDescription:{
        width: '100%',
        height: 89,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        elevation: 3,
        shadowColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDescription:{
        width: '85%',
        height: 63,
        fontSize: 13,
        lineHeight: 19.5,
        fontFamily: 'SourceSansPro-Regular',
        color: '#000000',
    }
})