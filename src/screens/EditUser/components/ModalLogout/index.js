import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

import { api } from '../../../../services/api'

export const ButtonLogout = () => {

    const Navigation = useNavigation();

    const buttonLogout = async () => {
        try {
            await api.post('/oauth/revoke', {
                token: await AsyncStorage.getItem('@Access_Token'),
                client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
                client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0'
            }).then(() => {
                Navigation.navigate('Login')
                AsyncStorage.clear();
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.bodyScreen}>
            <View style={styles.bodyModal}>
                <View style={styles.titlesContainer}>
                    <Text style={styles.textTitle}>
                        Atenção
                    </Text>
                    <Text style={styles.textBody}>
                        Após trocar o email, você precisar logar novamente!
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={buttonLogout}>
                        <Text style={styles.textButton}>
                            SAIR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}