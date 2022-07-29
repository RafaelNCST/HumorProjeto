import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { ModalPhotoEdit } from './components/ModalPhotoEdit'
import { ModalPickGenderInput } from './components/ModalPickerGender'
import { ModalChecked } from '../../components/ModalChecked';

import { styles } from './style'
import { api } from '../../services/api'

export const EditUserScreen = () => {

    const route = useRoute();

    const Navigation = useNavigation();

    const { photo } = route.params

    const [photoChoose, setPhotoChoose] = useState(null);
    const [idPhoto, setIdPhoto] = useState(null);
    const [gender, setGender] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const [visible, setVisible] = useState(false)

    const birth = new Date(birthDate)

    const validationName = () => {
        const regexName = /^[a-zA-Z]+$/
        if (regexName.test(name)) {
            return true
        } else {
            return false
        }
    }

    const validationEmail = () => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexEmail.test(email)) {
            return true
        } else {
            return false
        }
    }

    const updateInformationsUser = async () => {
        try {
            await api.put('/user', {
                "user": {
                    "name": name.toLowerCase(),
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
                setVisible(true)
            })
        } catch (error) {
            if (error.response.status === 422) {
                setName('')
                setEmail('')
                setBirthDate('')
                setMessage('Algo deu errado, tente mais tarde!')
                setError(true)
            } else {
                setMessage('Algo deu errado, tente mais tarde!')
                setError(true)
                console.log(error.response.status)
            }
        }
    }


    const validationInputs = () => {
        if (name === '' || gender === '' || email === '' || birthDate === '') {
            setMessage('Por favor, preencha todos os campos!');
            setError(true);
        }
        else if (validationName() === false || validationEmail() === false) {
            setName('')
            setEmail('')
            setMessage('Preencha os campos corretamente!')
            setError(true);
        }
        else {
            updateInformationsUser();
        }
    }

    const callBackGenderSelected = (genderChoosed) => {
        setGender(genderChoosed)
    }

    const handleErrorFocusInput = () => {
        setError(false)
    }

    const handleVisibleCheckedModal = () => {
        setVisible(false)
        Navigation.goBack();
    }

    const callBackIdPhoto = (key, photo) => {
        setIdPhoto(key)
        setPhotoChoose(photo)
    }

    const dateConfigInput = (text) => {
        const regexDate = /^[0-9/]+$/
        if (regexDate.test(text) || text === '') {
            if (text.length === 2 || text.length === 5 || text === '') {
                setBirthDate(text.replace(/(.+)/, '$1/'))
            } else {
                setBirthDate(text)
            }
        } else {
            return null
        }
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

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visible}
                >
                    <ModalChecked handleVisibleCheckedModal={handleVisibleCheckedModal} />
                </Modal>

                <View style={styles.bottomItens}>
                    <View style={styles.allInputsContainer}>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && name === '' ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>NOME</Text>
                            <TextInput
                                style={[styles.inputInfos, { borderColor: error && name === '' ? '#e32636' : '#000000' }]}
                                value={name}
                                onChangeText={text => setName(text)}
                                onFocus={handleErrorFocusInput}
                                placeholder='Digite seu nome aqui vai'
                            />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && email === '' ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>E-MAIL</Text>
                            <TextInput
                                style={[styles.inputInfos, { borderColor: error && email === '' ? '#e32636' : '#000000' }]}
                                value={email}
                                onChangeText={text => setEmail(text)}
                                onFocus={handleErrorFocusInput}
                                placeholder='Que tal colocar seu email aqui?'
                            />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && gender === '' ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>GÊNERO</Text>
                            <ModalPickGenderInput error={error} callBackGenderSelected={callBackGenderSelected} />
                        </Animatable.View>
                        <Animatable.View
                            style={styles.inputContainer}
                            animation={error && birthDate === '' ? 'shake' : null}
                            useNativeDriver
                        >
                            <Text style={styles.textInput}>DATA DE NASCIMENTO</Text>
                            <TextInput
                                style={[styles.inputInfos, { borderColor: error && birthDate === '' ? '#e32636' : '#000000' }]}
                                value={birthDate}
                                keyboardType='number-pad'
                                onChangeText={text => dateConfigInput(text)}
                                onFocus={handleErrorFocusInput}
                                placeholder='Ei, quando você nasceu?'
                                maxLength={10}
                            />
                        </Animatable.View>
                    </View>
                    {error &&
                        <Text style={styles.messageError}>{message}</Text>
                    }
                    <TouchableOpacity style={styles.saveButton} onPress={validationInputs}>
                        <Text style={styles.textButton}>
                            SALVAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}