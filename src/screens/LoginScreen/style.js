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
      width: 300,
      alignItems: 'center',
    },
    imageLogin:{
      width: 228,
      height: 228,
    },
    inputsContainer:{
      marginTop: 20,
      marginBottom: 68,
    },
    inputLogin:{
      height: 46,
      width: 321,
      marginTop: 21,
      borderRadius: 10,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    eyeVisibilityButton:{
      position: 'absolute',
      top: 98,
      right: 10,
    },
    textError:{
      position: 'absolute',
      top: 410,
      left: 70,
      color: '#ec2300',
    },
    buttonLogin:{
      width: 133,
      height: 46,
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000000',
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