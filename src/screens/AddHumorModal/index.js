import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';

import { BackButton } from '../../components/BackButton';
import { ContainerEmojis } from './components/ContainerEmojis'
import { BoardIcons } from './components/ContainerActionIcons'

import { months } from '../../helpers/months';
import { humorNums } from '../../helpers/humorNums'
import { api } from '../../services/api'

import { ModalError } from '../../components/ModalError'
import { ModalChecked } from '../../components/ModalChecked'

export const AddHumorModal = () => {

    const dateValue = new Date()

    const Navigation = useNavigation();

    const [description, setDescription] = useState('');
    const [mood, setMood] = useState(null);
    const [activities, setActivities] = useState([]);

    const [visible, setVisible] = useState(false)
    const [typeModal, setTypeModal] = useState('')
    const [message, setMessage] = useState('')

    const buttonAddCard = async () => {
        try {
            await api.post('/daily_entries', {
                "daily_entry": {
                    "mood": humorNums[mood],
                    "activity_ids": activities,
                    "description": description.trim()
                }
            }, {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then(() => {
                setVisible(true);
            })
        } catch (error) {
            console.log(error)
        }
    }

    const validationEmojis = () => {
        if (mood !== null) {
            return true
        } else {
            return false
        }
    }

    const validationActivities = () => {
        if (activities.length !== 0) {
            return true
        } else {
            return false
        }
    }

    const validationDescription = () => {
        const regex = /\w{1}/
        if (regex.test(description) !== false) {
            return true
        } else {
            return false
        }
    }

    const validationSendInfos = () => {
        if (validationEmojis() === false) {
            setMessage('Escolha um Humor pelo menos!')
            setTypeModal('error')
            setVisible(true)
        } else if (validationActivities() === false) {
            setMessage('Escolha uma ação pelo menos!')
            setTypeModal('error')
            setVisible(true)
        } else if (validationDescription() === false) {
            setMessage('Digite algo na sua descrição!')
            setTypeModal('error')
            setVisible(true)
        } else {
            setTypeModal('checked')
            buttonAddCard();
        }
    }

    const callBackEmojis = (moodNumber) => {
        setMood(moodNumber);
    }

    const callBackIdActions = (arrayActivities) => {
        setActivities(arrayActivities);
    }

    const backFunction = () => {
        Navigation.goBack();
    }

    const handleVisibleCheckedModal = () => {
        setVisible(false)
        Navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.bodyScreen}>
                <BackButton nameIcon={'close'} backFunction={backFunction} />
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

                <ContainerEmojis callBackEmojis={callBackEmojis} />

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visible}
                >
                    {typeModal === 'error' ? (
                        <ModalError handleVisibleErrorModal={handleVisibleCheckedModal} message={message} />
                    ) : (
                        <ModalChecked handleVisibleCheckedModal={handleVisibleCheckedModal} />
                    )
                    }
                </Modal>

                <View style={styles.bottomItens}>

                    <BoardIcons callBackIdActions={callBackIdActions} />

                    <View style={styles.description}>
                        <View style={styles.textContainer}>
                            <TextInput
                                style={styles.textDescription}
                                value={description}
                                multiline={true}
                                maxLength={130}
                                placeholder='Escreva aqui o que aconteceu hoje...'
                                onChangeText={text => setDescription(text)}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonSaveCard} onPress={validationSendInfos}>
                        <Text style={styles.textButtonSaveCard}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
