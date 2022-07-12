import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const RandomButton = ({color, focused}) => {
    return (
        <View style={[styles.RandomButtonStyle, {backgroundColor: focused ?  '#304FFE' : 'rgba(48,79,254,0.1)'}]}>
            <Icon name='list' color={color} size={30}/>
        </View>
    )
}

const styles = StyleSheet.create({
    RandomButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 48,
        height: 40,
    }
})