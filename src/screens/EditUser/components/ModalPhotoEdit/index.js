import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';

import { styles } from './style'
import { BackButton } from '../../../../components/BackButton'

import { api } from '../../../../services/api'

export const ModalPhotoEdit = ({ callBackIdPhoto }) => {

    const [visible, setVisible] = useState(false);
    const [arrayPhotos, setArrayPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState(null);
    const [photo, setPhoto] = useState(null)

    const selectImage = (key, photo) => {
        setId(key);
        setPhoto(photo)
    }

    const confirmImage = () => {
        callBackIdPhoto(id, photo)
        setVisible(false)
    }

    const getPhotos = async () => {
        try {
            await api.get('/photos').then(resp => {
                setArrayPhotos(resp?.data);
                setLoading(true);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const backFunction = () => {
        setVisible(false)
    }

    useEffect(() => {
        getPhotos()
    }, [loading])

    return (
        <>
            <TouchableOpacity style={styles.editPhotoButton} onPress={() => setVisible(true)}>
                <Text style={styles.textEditPhotoButton}>ALTERAR FOTO</Text>
            </TouchableOpacity>
            <Modal
                animationType='slide'
                visible={visible}
            >
                <View style={styles.bodyModal}>
                    {loading &&
                        <>
                            <BackButton nameIcon={'close'} backFunction={backFunction} />
                            <View style={styles.bodyItens}>
                                <View style={styles.topItens}>
                                    <Text style={styles.textTitle}>Selecione a foto do perfil</Text>
                                    <View style={styles.imagesAllContainer}>
                                        {arrayPhotos.map(item => (
                                            <View key={item.id}>
                                                {item.id == id ? (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.imageContainerActive}
                                                            onPress={() => selectImage(item.id, item.url)}
                                                        >
                                                            <Image
                                                                style={styles.imagesUser}
                                                                source={{ uri: `https://shrouded-shelf-01513.herokuapp.com${item.url}` }} />
                                                        </TouchableOpacity>
                                                    </>
                                                ) : (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.imageContainerInactive}
                                                            onPress={() => selectImage(item.id, item.url)}
                                                        >
                                                            <Image
                                                                style={styles.imagesUser}
                                                                source={{ uri: `https://shrouded-shelf-01513.herokuapp.com${item.url}` }} />
                                                        </TouchableOpacity>
                                                    </>
                                                )}
                                            </View>
                                        ))}
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.buttonConfirm}
                                    onPress={confirmImage}
                                >
                                    <Text style={styles.textButtonConfirm}>
                                        CONFIRMAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </Modal>
        </>
    )
}