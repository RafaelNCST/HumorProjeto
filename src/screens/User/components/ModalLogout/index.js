import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

import { api } from '../../../../services/api'

export const ButtonLogout = () => {

    const [visible, setVisible] = useState(false)

    const Navigation = useNavigation();

    const buttonLogout = async () => {
        try {
            await api.post('/oauth/revoke', {
                token: await AsyncStorage.getItem('@Access_Token'),
                client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
                client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0'
            }).then(resp => {
                Navigation.navigate('Login')
                AsyncStorage.clear();
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.buttonLogout} onPress={() => setVisible(true)}>
                <Text style={styles.textButtonLogout}>
                    SAIR
                </Text>
            </TouchableOpacity>
            <Modal
                animationType='none'
                transparent={true}
                visible={visible}
            >
                <View style={styles.bodyScreen}>
                    <View style={styles.modalBody}>
                        <View style={styles.titlesContainer}>
                            <Text style={styles.textTitle}>
                                Atenção
                            </Text>
                            <Text style={styles.textBody}>
                                Deseja mesmo sair?
                            </Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={styles.textButton}>
                                    CANCELAR
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={buttonLogout}>
                                <Text style={styles.textButton}>
                                    SAIR
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}