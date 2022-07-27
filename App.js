import React, { useEffect } from 'react';
import { StatusBar, BackHandler, Alert } from 'react-native';
import { Routes } from './src/routes/Routes'

export const App = () => {

    useEffect(() => {
        const backHandlerAction = () => {
            Alert.alert('Atenção', 'Você deseja fechar o aplicativo?', [
                {
                    text: 'Cancelar',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Fechar',
                    onPress: () => BackHandler.exitApp()
                }
            ]);
            return true;
        }
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backHandlerAction
        )
    })

    return (
        <>
            <Routes />
            <StatusBar barStyle="dark-content" backgroundColor='#FFFF' style='auto' />
        </>
    )
} 