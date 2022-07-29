import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';
import { ButtonLogout } from './components/ModalLogout'
import { LoadingScreen } from '../../components/LoadingScreen'

import { api } from '../../services/api'

import { Generos } from '../../helpers/generos'

export const UserScreen = () => {

    const Navigation = useNavigation();

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const date = new Date(data.birthdate)

    const callInfosUser = async () => {
        try {
            await api.get('/user', {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then(resp => {
                setData(resp.data)
                setLoading(true);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callInfosUser();
    }, [loading, data])

    return (
        <View style={styles.bodyScreen}>
            {loading ? (
                <View style={styles.itensContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageItem} source={{ uri: `https://shrouded-shelf-01513.herokuapp.com${data.photo.url}` }} />
                    </View>
                    <Text style={styles.textHello}>Olá, {data.name.replace(data.name[0], data.name[0].toUpperCase())}</Text>
                    <View style={styles.infosContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLabel}>E-MAIL:</Text>
                            <Text style={styles.textInfos}>{data.email}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLabel}>GÊNERO:</Text>
                            <Text style={styles.textInfos}>{Generos[data.gender]}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textLabel}>DATA DE NASCIMENTO:</Text>
                            <Text style={styles.textInfos}>{String(date.getMonth() + 1).padStart(2, '0')}/{String(date.getDate()).padStart(2, '0')}/{date.getFullYear()}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonEditPerfil} onPress={() => Navigation.navigate('EditUserScreen', { photo: data.photo.url })}>
                            <Text style={styles.textButtonEditPerfil}>
                                EDITAR PERFIL
                            </Text>
                        </TouchableOpacity>
                        <ButtonLogout />
                    </View>
                </View>
            ) : (
                <LoadingScreen />
            )
            }
        </View>
    )
}