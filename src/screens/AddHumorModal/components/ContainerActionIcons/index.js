import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { activities } from '../../../../helpers/activities'

import { styles } from './style'

export const BoardIcons = () => {

    const [click, setClick] = useState(false);
    const [arrayId, setArrayId] = useState([]);

    const handleActiveIconOnClick = (key) => {
        setClick(true)
        if (arrayId.indexOf(key) !== -1) {
            setArrayId(arrayId.filter(item => item !== key))
        } else if (arrayId.length < 3) {
            setArrayId([...arrayId, key])
        }
    }

    AsyncStorage.setItem('@Array_Id_Icon', JSON.stringify(arrayId.map(item => item + 1)))

    return (
        <View style={styles.boardIcons}>
            <View style={styles.gridItens}>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(0) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(0)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.sports.icon} size={35} color={click && arrayId.indexOf(0) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.sports.name}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(1) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(1)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.shopping.icon} size={35} color={click && arrayId.indexOf(1) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.shopping.name}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(2) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(2)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.rest.icon} size={35} color={click && arrayId.indexOf(2) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.rest.name}</Text>
                </View>
            </View>
            <View style={styles.gridItens}>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(3) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(3)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.party.icon} size={35} color={click && arrayId.indexOf(3) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.party.name}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(4) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(4)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.movies.icon} size={35} color={click && arrayId.indexOf(4) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.movies.name}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(5) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(5)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.good_meal.icon} size={35} color={click && arrayId.indexOf(5) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.good_meal.name}</Text>
                </View>
            </View>
            <View style={styles.gridItens}>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(6) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(6)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.games.icon} size={35} color={click && arrayId.indexOf(6) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.games.name}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(7) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(7)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.date.icon} size={35} color={click && arrayId.indexOf(7) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.date.name}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        style={[styles.iconButton, { backgroundColor: click && arrayId.indexOf(8) !== -1 ? '#304FFE' : '#FFFFFF' }]}
                        onPress={() => handleActiveIconOnClick(8)}
                        underlayColor={'#FFFFFF'}
                    >
                        <Icon name={activities.cooking.icon} size={35} color={click && arrayId.indexOf(8) !== -1 ? '#FFFFFF' : '#000000'} />
                    </TouchableHighlight>
                    <Text style={styles.textActivities}>{activities.cooking.name}</Text>
                </View>
            </View>
        </View>
    )
}