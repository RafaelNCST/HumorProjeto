import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {styles} from './style' 

export const LoginScreen = () => {

  const Navigation = useNavigation();

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  
  const [errorWarning, setErrorWarning] = useState(false)
  const [visibility, setVisibility] = useState(false)

  const validationInputs = () => {
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const regexPassword = /\w+[!@#$_]{0,3}/

    if(regexEmail.test(emailInput) && (regexPassword.test(passwordInput) && passwordInput.length > 4)){
        Navigation.navigate('Home')
    }else{
        setErrorWarning(true);
        setEmailInput('')
        setPasswordInput('')
        setTimeout(() => setErrorWarning(false), 20000)
    }
  }

  return (
    <View style={styles.bodyScreen}>
        <View style={styles.itensContainer}>
            <Image style={styles.imageLogin} source={require('../../assets/images/timeImage.png')}/>
            <View style={styles.inputsContainer}>
                <TextInput 
                style={styles.inputLogin} 
                placeholder='email'
                value={emailInput}
                onChangeText={value => setEmailInput(value)}
                />
                <TextInput 
                style={styles.inputLogin} 
                placeholder='senha'
                secureTextEntry={visibility ? false : true}
                value={passwordInput}
                onChangeText={value => setPasswordInput(value)}
                />
                <TouchableOpacity style={styles.eyeVisibilityButton} onPress={() => setVisibility(!visibility)}>
                    <Icon name={visibility ? 'visibility' : 'visibility-off'} color='#000000' size={25}/>
                </TouchableOpacity>
            </View>
            {errorWarning &&
            <Text style={styles.textError}>Email ou senha inválidos</Text>
            }
            <TouchableOpacity onPress={validationInputs} style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
