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
        width: '90%',
        height: 470,
        marginTop: 47,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerDate:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    itensDate:{
        marginTop: 3,
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
    emojiImage:{
        width: 65, 
        height: 65,
    },
    textHumor:{
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 25,
    },
    containerActions:{
        width: '100%',
        height: 158,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(90, 108, 234, .7)',
        elevation: 15,
    },
    iconView:{
        width: 50,
        height: 50,
        borderRadius: 52,
        backgroundColor: '#304FFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itensActions:{
        width: 100,
        height: 75,
        marginLeft: 5,
        marginRight: 5,
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
        height: 100,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(90, 108, 234, .7)',
        elevation: 15,
        borderRadius: 20,
    },
    textDescription:{
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'SourceSansPro-Regular',
        color: '#000000',
    }
})