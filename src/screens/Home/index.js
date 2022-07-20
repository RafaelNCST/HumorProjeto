import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';
import { HumorCard } from './components/HumorCards';
import { EmptyComponent } from './components/EmptyListCards';
import { api } from '../../services/api'

export const HomeScreen = () => {

    const [arrayCards, setArrayCards] = useState([]);

    const getCards = async () => {
        try {
            await api.get('/daily_entries', {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then(res => {
                setArrayCards(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCards();
    }, [arrayCards])

    return (
        <FlatList
            contentContainerStyle={{ paddingBottom: 18 }}
            ListEmptyComponent={EmptyComponent}
            data={arrayCards}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                    <HumorCard
                        id={item.id}
                        humor={item.mood}
                        date={item.created_at}
                        description={item.short_description}
                        actions={item.activities}
                    />
                </View>
            )}
        />
    );
};
