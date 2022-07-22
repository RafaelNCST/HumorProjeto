import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';

import { BackButton } from '../../components/BackButton';
import { ContainerEmojis } from './components/ContainerEmojis'
import { BoardIcons } from './components/ContainerActionIcons'

import { months } from '../../helpers/months';
import { humorNums } from '../../helpers/humorNums'
import { api } from '../../services/api'

export const AddHumorModal = () => {

    const dateValue = new Date()

    const [description, setDescription] = useState('');

    const buttonAddCard = async () => {
        try {
            await api.post('/daily_entries', {
                "daily_entry": {
                    "mood": humorNums[parseInt(await AsyncStorage.getItem('@Id_Emoji'))],
                    "activity_ids": (JSON.parse(await AsyncStorage.getItem('@Array_Id_Icon'))),
                    "description": description
                }
            }, {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then((resp) => {
                console.log(resp)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView>
            <View style={styles.bodyScreen}>
                <BackButton nameIcon={'close'} />
                <View style={styles.topItens}>
                    <Text style={styles.textTitle}>
                        Como você está?
                    </Text>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateItem}>
                            <Icon name="event" color="#969696" size={18} />
                            <Text style={styles.textDate}>
                                {`HOJE ${String(dateValue.getDate()).padStart(2, '0')} DE ${months[dateValue.getMonth()]}`}
                            </Text>
                        </View>
                        <View style={styles.dateItem}>
                            <Icon name="schedule" color="#969696" size={18} />
                            <Text style={styles.textDate}>
                                {`${String(dateValue.getHours()).padStart(2, '0')}:${String(dateValue.getMinutes()).padStart(2, '0')}`}
                            </Text>
                        </View>
                    </View>
                </View>

                <ContainerEmojis />

                <View style={styles.bottomItens}>

                    <BoardIcons />

                    <View style={styles.description}>
                        <TextInput
                            style={styles.textDescription}
                            value={description}
                            placeholder='Escreva aqui o que aconteceu hoje...'
                            onChangeText={text => setDescription(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonSaveCard} onPress={buttonAddCard}>
                        <Text style={styles.textButtonSaveCard}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
