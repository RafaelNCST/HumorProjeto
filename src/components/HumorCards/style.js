import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    humorCardBody:{
        width: '90%',
        height: 158,
        backgroundColor: '#FFFF',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000000',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',    
    },
    emojiImage:{
        width: 57,
        height: 57,
        marginRight: 16,
    },
    containerTop:{
        flexDirection: 'row',
        marginLeft: 28,
    },
    containerBottom:{
        flexDirection: 'column',
        marginLeft: 28,
    },
    textCards:{
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
    },
    textTime:{
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
        fontSize: 14,
        marginLeft: 10,
    },
    containerTimeAndHumor:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    humorText:{
        fontSize: 24,
        fontFamily: 'SourceSansPro-Bold',
    },
    containerActions:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12.5,
        width: '100%',
    },
    containerActionItem:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 21,
    },
    textActions:{
        fontSize: 14,
        color: '#000000',
        fontFamily: 'SourceSansPro-Bold',
        marginLeft: 8,
    },
    textDescription:{
        fontFamily: 'SourceSansPro-Regular',
        color: '#ACACAC',
        fontSize: 13, 
        width: 215
    }
})