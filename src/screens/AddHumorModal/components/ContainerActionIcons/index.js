import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { activities } from '../../../../helpers/activities'

import { styles } from './style'

export const BoardIcons = ({ callBackIdActions }) => {

    const [arrayId, setArrayId] = useState([]);

    const handleActiveIconOnClick = (key) => {
        if (arrayId.indexOf(key) !== -1) {
            setArrayId(arrayId.filter(item => item !== key))
        } else if (arrayId.length < 3) {
            setArrayId([...arrayId, key])
        }
    }

    useEffect(() => {
        callBackIdActions(arrayId.map(item => item + 1))
    }, [arrayId])

    return (
        <View style={styles.boardIcons}>
            <View style={styles.gridItens}>
                {Object.keys(activities).map((item, index) => (
                    <View key={index} style={styles.item}>
                        <TouchableHighlight
                            style={[styles.iconButton, { backgroundColor: arrayId.indexOf(index) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                            onPress={() => handleActiveIconOnClick(index)}
                            underlayColor={'#FFFFFF'}
                        >
                            <Icon name={activities[item].icon} size={35} color={arrayId.indexOf(index) !== -1 ? '#FFFFFF' : '#000000'} />
                        </TouchableHighlight>
                        <Text style={styles.textActivities}>{activities[item].name}</Text>
                    </View>
                )
                )}
            </View>
        </View>
    )
}