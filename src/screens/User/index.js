import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';
import { ButtonLogout } from './components/ModalLogout'

import { api } from '../../services/api'

import { Generos } from '../../helpers/generos'

export const UserScreen = () => {

    const Navigation = useNavigation();

    const [name, setName] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);
    const [birthDate, setBirthDate] = useState(null)
    const [loading, setLoading] = useState(false)

    const date = new Date(birthDate)

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
                setBirthDate(resp.data.birthdate)
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
                    <View style={styles.infosContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLabel}>E-MAIL:</Text>
                            <Text style={styles.textInfos}>{email}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLabel}>GÊNERO:</Text>
                            <Text style={styles.textInfos}>{Generos[gender]}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
                            <Text style={styles.textInfos}>{String(date.getDate()).padStart(2, '0')}/{String(date.getMonth() + 1).padStart(2, '0')}/{date.getFullYear()}</Text>
                        </View>
                    </View>
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