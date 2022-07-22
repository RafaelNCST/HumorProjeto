import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './style'

export const BackButton = ({ nameIcon }) => {

    const Navigation = useNavigation();

    return (
        <View style={styles.buttonBody}>
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.goBack()}>
                <Icon name={nameIcon} size={25} color="#304FFE" />
            </TouchableOpacity>
        </View>
    )
}