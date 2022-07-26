import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

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
            console.log(error)
        }
    }

    const callBackGenderSelected = (genderChoosed) => {
        setGender(genderChoosed)
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            style={{ flex: 1 }}>
            <View style={styles.contentView}>
                <View style={styles.topItens}>
                    <Image
                        style={styles.imageItem}
                        source={{ uri: photoChoose ? `https://shrouded-shelf-01513.herokuapp.com${photoChoose}` : `https://shrouded-shelf-01513.herokuapp.com${photo}` }} />
                    <ModalPhotoEdit callBackIdPhoto={callBackIdPhoto} />
                </View>
                <View style={styles.bottomItens}>
                    <View style={styles.allInputsContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>NOME</Text>
                            <TextInput style={styles.inputInfos} onChangeText={text => setName(text)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>E-MAIL</Text>
                            <TextInput style={styles.inputInfos} onChangeText={text => setEmail(text)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>GÊNERO</Text>
                            <ModalPickGenderInput callBackGenderSelected={callBackGenderSelected} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.textInput}>DATA DE NASCIMENTO</Text>
                            <TextInput style={styles.inputInfos} onChangeText={text => setBirthDate(text)} />
                        </View>
                    </View>
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