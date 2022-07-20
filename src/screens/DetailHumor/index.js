import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TopItens } from './components/TopItens';
import { BottomItens } from './components/BottomItens';

import { api } from '../../services/api'

import { styles } from './style';

export const DetailHumor = () => {

    const Navigation = useNavigation();

    const [humor, setHumor] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [actions, setActions] = useState();
    const [loading, setLoading] = useState(false);

    const route = useRoute();
    const { id } = route.params;

    const getCardDetail = async () => {
        try {
            await api.get(`/daily_entries/${id}`, {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then(res => {
                setHumor(res?.data?.mood);
                setDate(res?.data?.created_at);
                setDescription(res?.data?.description);
                setActions(res?.data?.activities);
                setLoading(true)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCardDetail();
    }, [loading])

    return (
        <View style={styles.bodyScreen}>
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
                <Icon name="chevron-left" size={35} color="#304FFE" />
            </TouchableOpacity>
            {loading &&
                <View style={styles.itensContainer}>
                    <TopItens date={date} humor={humor} />
                    <BottomItens description={description} actions={actions} />
                </View>
            }
        </View>
    );
};
