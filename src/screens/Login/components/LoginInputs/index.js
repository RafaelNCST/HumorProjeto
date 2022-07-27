import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { api } from '../../../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style'

export const LoginItens = () => {

    const Navigation = useNavigation();

    const [emailInput, setEmailInput] = useState(null);
    const [passwordInput, setPasswordInput] = useState(null);

    const [errorWarning, setErrorWarning] = useState(false);

    const [message, setMessage] = useState('')

    const [visibility, setVisibility] = useState(false);

    const [loading, setLoading] = useState(false)

    const localValidationEmail = () => {
        if (emailInput !== null) {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regexEmail.test(emailInput.toLocaleLowerCase());
        } else {
            return false
        }
    };

    const localValidationPassword = () => {
        const regexPassword = /\w+[!@#$_]{0,3}/;
        return regexPassword.test(passwordInput) && passwordInput.length > 6;
    };

    const apiValidationLogin = async () => {
        try {
            await api.post('/oauth/token', {
                grant_type: 'password',
                email: emailInput,
                password: passwordInput,
                client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
                client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
            }).then(async (res) => {
                setLoading(false)
                AsyncStorage.setItem('@Access_Token', res?.data?.access_token)
                Navigation.navigate('Home')
            })
        } catch (error) {
            if (error?.response?.status === 422 || error.response?.status === 400) {
                setMessage('Email ou senha inválidos!')
                setErrorWarning(true);
            } else if (error.response?.status === 401) {
                setMessage('Autorização negada!')
                setErrorWarning(true);
            } else {
                setMessage('Falha no Login, tente mais tarde')
                setErrorWarning(true);
            }
        }
    };

    const validationInputs = () => {
        setEmailInput(null);
        setPasswordInput(null);
        setLoading(true)
        if (localValidationEmail() && localValidationPassword()) {
            apiValidationLogin();
        } else {
            setLoading(false)
            setMessage('Email ou senha inválidos!')
            setErrorWarning(true);
        }
    };

    return (
        <>
            <View style={styles.inputsContainer}>
                <Animatable.View
                    animation={errorWarning && emailInput === null ? 'shake' : null}
                    useNativeDriver
                >
                    <TextInput
                        style={
                            [
                                styles.inputLogin,
                                { backgroundColor: errorWarning && emailInput === null ? '#EB8484' : '#FFFFFF' }
                            ]
                        }
                        placeholder="email"
                        value={emailInput}
                        onChangeText={value => setEmailInput(value)}
                        onFocus={() => setErrorWarning(false)}
                    />
                </Animatable.View>
                <Animatable.View
                    style={
                        [
                            styles.passwordInputContainer,
                            { backgroundColor: errorWarning && passwordInput === null ? '#EB8484' : '#FFFFFF' }
                        ]
                    }
                    animation={errorWarning && passwordInput === null ? 'shake' : null}
                    useNativeDriver
                >
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="senha"
                        secureTextEntry={visibility ? false : true}
                        value={passwordInput}
                        onChangeText={value => setPasswordInput(value)}
                        onFocus={() => setErrorWarning(false)}
                    />
                    <TouchableOpacity style={styles.eyeVisibilityButton} onPress={() => setVisibility(!visibility)}>
                        <Icon
                            name={visibility ? 'visibility' : 'visibility-off'}
                            color="#000000"
                            size={25}
                        />
                    </TouchableOpacity>
                </Animatable.View>
            </View>
            <View style={styles.itensBottomContainer}>
                {errorWarning &&
                    <Text style={styles.textError}> {message} </Text>
                }
                {loading &&
                    <View style={styles.spinnerContainer}>
                        <ActivityIndicator size="large" color='#FFFFFF' />
                    </View>
                }
                <TouchableOpacity style={styles.buttonLogin} onPress={validationInputs}>
                    <Text style={styles.textButtonLogin}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}