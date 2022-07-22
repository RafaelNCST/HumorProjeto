import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { humorItens } from '../../../../helpers/humorItens'

import { styles } from './style'

export const ContainerEmojis = () => {

    const [click, setClick] = useState(false);
    const [num, setNum] = useState(0);

    const handleClick = (index) => {
        setNum(index)
        setClick(true)
    }

    AsyncStorage.setItem('@Id_Emoji', String(num))

    return (
        <View style={styles.containerEmoji}>
            {Object.keys(humorItens).map((item, index) => (
                <View style={styles.emojiItem} key={index}>
                    {click && index === num ? (
                        <>
                            <TouchableOpacity style={styles.activeCircle} onPress={() => handleClick(index)}>
                                <Image style={styles.emojis} source={humorItens[item].image} />
                            </TouchableOpacity>
                            <Text style={styles.textEmojisActive}>{humorItens[item].estado}</Text>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity style={styles.inactiveCircle} onPress={() => handleClick(index)}>
                                <Image style={styles.emojis} source={humorItens[item].image} />
                            </TouchableOpacity>
                            <Text style={styles.textEmojisInactive}>{humorItens[item].estado}</Text>
                        </>
                    )}
                </View>
            ))
            }
        </View>
    )
}