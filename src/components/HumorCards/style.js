import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    humorCardBody:{
        width: '90%',
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        elevation: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 28,
        paddingRight: 28,
        shadowColor: 'rgba(90, 108, 234, .9)',
    },
    emojiImage:{
        width: 65,
        height: 65,
        marginRight: 16,
    },
    containerTop:{
        flex: 1,
        flexDirection: 'row',
    },
    containerBottom:{
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    containerItensDate:{
        height: 55,
        justifyContent: 'space-evenly'
    },
    textDate:{
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
        fontSize: 14,
    },
    textTime:{
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
        fontSize: 12,
        marginLeft: 7,
    },
    containerTimeAndHumor:{
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    textHumor:{
        fontSize: 20,
        fontFamily: 'SourceSansPro-Bold',
    },
    containerActions:{
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
    },
    containerActionItem:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textActions:{
        fontSize: 12,
        color: '#000000',
        fontFamily: 'SourceSansPro-Bold',
        marginLeft: 9,
    },
    pointerActions:{
        height: 4,
        width: 4,
        backgroundColor: '#000000',
        borderRadius: 50,
        marginLeft: 9,
        marginRight: 9,
    },
    textDescription:{
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
        fontSize: 12, 
        width: '100%',
    }
})