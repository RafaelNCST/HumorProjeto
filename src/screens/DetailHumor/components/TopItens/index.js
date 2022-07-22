import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './style'
import { humorItens } from '../../../../helpers/humorItens';
import { months } from '../../../../helpers/months';

export const TopItens = ({ date, humor }) => {

    const dateValue = new Date(date);

    return (
        <>
            <View style={styles.itensDate}>
                <Icon name="schedule" color="#969696" size={18} />
                <Text style={styles.textDate}>
                    {`${String(dateValue.getHours()).padStart(2, '0')}:${String(dateValue.getMinutes()).padStart(2, '0')}`}
                </Text>
            </View>
            <View style={styles.itensDate}>
                <Icon name="event" color="#969696" size={18} />
                <Text style={styles.textDate}>
                    {`${String(dateValue.getDate()).padStart(2, '0')} DE ${months[dateValue.getMonth()]}`}
                </Text>
            </View>
            <View style={styles.containerHumor}>
                <Image source={humorItens[humor].image} style={styles.emojiImage} />
                <Text style={[styles.textHumor, { color: humorItens[humor].cor }]}>
                    {humorItens[humor].estado}
                </Text>
            </View>
        </>
    )
}