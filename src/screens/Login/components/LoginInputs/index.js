import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { api } from '../../../../services/api';

import { styles } from './style'

export const LoginItens = () => {

    const Navigation = useNavigation();

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [errorWarning, setErrorWarning] = useState(false);

    const [message, setMessage] = useState('')

    const [visibility, setVisibility] = useState(false);

    const localValidationEmail = () => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(emailInput.toLocaleLowerCase());
    };

    const localValidationPassword = () => {
        const regexPassword = /\w+[!@#$_]{0,3}/;
        return regexPassword.test(passwordInput) && passwordInput.length > 6;
    };

    const apiValidationLogin = async () => {
        try {
            const res = await api.post('/oauth/token', {
                grant_type: 'password',
                email: emailInput,
                password: passwordInput,
                client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
                client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
            })
            Navigation.navigate('Home', {
                acessToken: res?.data?.acess_token,
                name: res?.data?.name,
            })
        } catch (error) {
            if (error?.response || error.response?.status === 400) {
                setMessage('Email ou senha inválidos!')
                setErrorWarning(true);
                setTimeout(() => setErrorWarning(false), 10000);
            } else if (error.response?.status === 401) {
                setMessage('Autorização negada!')
                setErrorWarning(true);
                setTimeout(() => setErrorWarning(false), 10000);
            } else {
                setMessage('Falha no Login, tente mais tarde')
                setErrorWarning(true);
                setTimeout(() => setErrorWarning(false), 10000);
            }
        }
    };

    const validationInputs = () => {
        setEmailInput('');
        setPasswordInput('');
        if (localValidationEmail() && localValidationPassword()) {
            apiValidationLogin();
        } else {
            setMessage('Email ou senha inválidos!')
            setErrorWarning(true);
            setTimeout(() => setErrorWarning(false), 10000);
        }
    };

    return (
        <>
            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.inputLogin}
                    placeholder="email"
                    value={emailInput}
                    onChangeText={(value) => setEmailInput(value)}
                />
                <TextInput
                    style={styles.inputLogin}
                    placeholder="senha"
                    secureTextEntry={visibility ? false : true}
                    value={passwordInput}
                    onChangeText={(value) => setPasswordInput(value)}
                />
                <TouchableOpacity style={styles.eyeVisibilityButton} onPress={() => setVisibility(!visibility)}>
                    <Icon
                        name={visibility ? 'visibility' : 'visibility-off'}
                        color="#000000"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.itensBottomContainer}>
                {!!errorWarning && (
                    <Text style={styles.textError}> {message} </Text>
                )}
                <TouchableOpacity style={styles.buttonLogin} onPress={validationInputs}>
                    <Text style={styles.textButtonLogin}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}