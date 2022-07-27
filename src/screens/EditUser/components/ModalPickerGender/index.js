import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Data } from '../../../../helpers/DropData'
import { styles } from './style';
import { Genders } from '../../../../helpers/genders'

export const ModalPickGenderInput = ({ error, callBackGenderSelected }) => {

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState('Escolha seu gênero')

    const handleModalPickGender = (gender) => {
        setSelected(gender)
        setVisible(false)
        callBackGenderSelected(Genders[selected])
    }

    return (
        <>
            <TouchableHighlight
                style={
                    [
                        styles.listGender,
                        { borderColor: error && selected === 'Escolha seu gênero' ? '#e32636' : '#000000' }
                    ]
                }
                onPress={() => setVisible(true)}
                underlayColor={'rgba(0,0,0,0.5)'}
            >
                <View style={styles.buttonIconsInput}>
                    <Text
                        style={
                            [
                                styles.textInput,
                                { color: selected === 'Escolha seu gênero' ? '#A9A9A9' : '#000000' }
                            ]
                        }
                    >{selected}</Text>
                    <Icon name='keyboard-arrow-down' size={40} color='#000000' />
                </View>
            </TouchableHighlight>
            <Modal
                animationType='fade'
                visible={visible}
                transparent={true}
            >
                <View style={styles.bodyScreen}>
                    <View style={styles.modalGender}>
                        <View style={styles.containerTitle}><Text style={styles.textTitle}>Escolha seu Gênero</Text></View>
                        {Data.map(item => (
                            <TouchableHighlight
                                key={item.key}
                                style={styles.buttonGender}
                                onPress={() => handleModalPickGender(item.value)}
                                underlayColor={'rgba(0,0,0,0.5)'}
                            >
                                <Text style={styles.textButtonGender}>{item.value}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                </View>
            </Modal>
        </>
    )
}