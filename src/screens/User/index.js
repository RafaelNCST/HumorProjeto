import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './style';
import { ButtonLogout } from './components/ModalLogout'

import { api } from '../../services/api'

export const UserScreen = () => {

    const Navigation = useNavigation();

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [loading, setLoading] = useState(false)

    const [visible, setVisible] = useState(false)

    const callInfosUser = async () => {
        try {
            await api.get('/user', {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then(resp => {
                setName(resp.data.name);
                setPhoto(resp.data.photo.url);
                setEmail(resp.data.email);
                setGender(resp.data.gender)
                setLoading(true);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callInfosUser();
    }, [loading])

    return (
        <View style={styles.bodyScreen}>
            {loading &&
                <View style={styles.itensContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageItem} source={{ uri: `https://shrouded-shelf-01513.herokuapp.com${photo}` }} />
                    </View>
                    <Text style={styles.textHello}>Olá, {name}</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonEditPerfil} onPress={() => Navigation.navigate('EditUserScreen', { photo: photo })}>
                            <Text style={styles.textButtonEditPerfil}>
                                EDITAR PERFIL
                            </Text>
                        </TouchableOpacity>
                        <ButtonLogout />
                    </View>
                </View>
            }
        </View>
    )
}