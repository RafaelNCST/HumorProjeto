import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bodyScreen:{
      flex: 1,
      backgroundColor:'#304FFE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    itensContainer:{
      height: 600,
      width: '100%',
      alignItems: 'center',
    },
    imageLogin:{
      width: 228,
      height: 228,
    },
    inputsContainer:{
      marginTop: 20,
    },
    inputLogin:{
      height: 46,
      width: 321,
      marginTop: 21,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000000',
    },
    eyeVisibilityButton:{
      position: 'absolute',
      top: 98,
      right: 10,
    },
    itensBottomContainer:{
      height: 128,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    textError:{
      position: 'absolute',
      left: '24%',
      top: '25%',
      fontSize: 16,
      letterSpacing: 1,
      color: '#bc0b03',
      fontFamily: 'SourceSansPro-SemiBold',
    },
    buttonLogin:{
      width: 133,
      height: 46,
      borderRadius: 10,
      backgroundColor:'#C6CEFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButtonLogin:{
      fontFamily: 'SourceSansPro-Bold',
      fontSize: 16,
      color: '#304FFE',
    },
})