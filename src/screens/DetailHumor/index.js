import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { TopItens } from './components/TopItens';
import { BottomItens } from './components/BottomItens';

import { BackButton } from '../../components/BackButton'

import { api } from '../../services/api'

import { styles } from './style';

export const DetailHumor = () => {

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
            <BackButton nameIcon={'chevron-left'} />
            {loading &&
                <View style={styles.itensContainer}>
                    <TopItens date={date} humor={humor} />
                    <BottomItens description={description} actions={actions} />
                </View>
            }
        </View>
    );
};
