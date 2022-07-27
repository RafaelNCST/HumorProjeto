import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { ModalPhotoEdit } from './components/ModalPhotoEdit'
import { ModalPickGenderInput } from './components/ModalPickerGender'

import { styles } from './style'
import { api } from '../../services/api'

export const EditUserScreen = () => {

    const route = useRoute();

    const { photo } = route.params

    const [photoChoose, setPhotoChoose] = useState(null);
    const [idPhoto, setIdPhoto] = useState(null);
    const [gender, setGender] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)

    const birth = new Date(birthDate)

    const callBackIdPhoto = (key, photo) => {
        setIdPhoto(key)
        setPhotoChoose(photo)
    }



    const updateInformationsUser = async () => {
        try {
            await api.put('/user', {
                "user": {
                    "name": name,
                    "gender": gender,
                    "photo_id": idPhoto,
                    "email": email,
                    "birthdate": birth.toISOString()
                }
            }, {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('@Access_Token')}`
                }
            }).then(() => {
                console.log('Tudo bem sucedido')
            })
        } catch (error) {
            if (error.response.status === 422) {
                setMessage('Por favor, preencha todos os campos!')
                setError(true)
            } else {
                console.log(error.response.status)
            }
        }
    }

    const callBackGenderSelected = (genderChoosed) => {
        setGender(genderChoosed)
    }

    const handleErrorFocusInput = () => {
        setError(false)
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            style={styles.bodyScreen}>
            <View style={styles.contentView}>
                <View style={styles.topItens}>
                    <Image
                        style={styles.imageItem}
                        source={{ uri: photoChoose ? `https://shrouded-shelf-01513.herokuapp.com${photoChoose}` : `https://shrouded-shelf-01513.herokuapp.com${photo}` }} />
                    <ModalPhotoEdit callBackIdPhoto={callBackIdPhoto} />
                </View>
                <View style={styles.bottomItens}>
                    <View style={styles.allInputsContainer}>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && name === null ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>NOME</Text>
                            <TextInput
                                style={[styles.inputInfos, { borderColor: error && name === null ? '#e32636' : '#000000' }]}
                                value={name}
                                onChangeText={text => setName(text)}
                                onFocus={handleErrorFocusInput}
                            />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && email === null ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>E-MAIL</Text>
                            <TextInput
                                style={[styles.inputInfos, { borderColor: error && email === null ? '#e32636' : '#000000' }]}
                                value={email}
                                onChangeText={text => setEmail(text)}
                                onFocus={handleErrorFocusInput}
                            />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && gender === null ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>GÊNERO</Text>
                            <ModalPickGenderInput error={error} callBackGenderSelected={callBackGenderSelected} />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && birthDate === null ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>DATA DE NASCIMENTO</Text>
                            <TextInput
                                style={[styles.inputInfos, { borderColor: error && birthDate === null ? '#e32636' : '#000000' }]}
                                value={birthDate}
                                onChangeText={text => setBirthDate(text)}
                                onFocus={handleErrorFocusInput}
                            />
                        </Animatable.View>
                    </View>
                    {error &&
                        <Text style={styles.messageError}>{message}</Text>
                    }
                    <TouchableOpacity style={styles.saveButton} onPress={updateInformationsUser}>
                        <Text style={styles.textButton}>
                            SALVAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}