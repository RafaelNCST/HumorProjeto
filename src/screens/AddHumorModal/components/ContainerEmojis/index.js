import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { humorItens } from '../../../../helpers/humorItens'

import { styles } from './style'

export const ContainerEmojis = () => {

    const [num, setNum] = useState(null);

    const handleClick = (index) => {
        if (num == index) {
            setNum(null)
        } else {
            setNum(index)
        }
    }

    AsyncStorage.setItem('@Id_Emoji', String(num))

    return (
        <View style={styles.containerEmoji}>
            {Object.keys(humorItens).map((item, index) => (
                <View style={styles.emojiItem} key={index}>
                    <>
                        <TouchableOpacity
                            style={
                                [styles.circleBackGroundEmoji, { backgroundColor: index === num ? '#304FFE' : '#FFFFFF' }]
                            }
                            onPress={() => handleClick(index)}>
                            <Image style={styles.emojis} source={humorItens[item].image} />
                        </TouchableOpacity>
                        <Text
                            style={
                                [styles.textEmojis, { color: index === num ? humorItens[item].cor : '#969696' }]
                            }

                        >{humorItens[item].estado}</Text>
                    </>
                </View>
            ))
            }
        </View>
    )
}