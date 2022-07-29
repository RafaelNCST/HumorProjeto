import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './style'

import { activities } from '../../../../helpers/activities'

export const BottomItens = ({ description, actions }) => {

    return (
        <View style={styles.bottomItens}>
            <View style={styles.containerActions}>
                {actions.map((item, index) => (
                    <View key={index} style={styles.itensActions}>
                        <View style={styles.iconView}>
                            <Icon
                                name={activities[item.name].icon}
                                color="#FFFFFF"
                                size={30}
                            />
                        </View>
                        <Text style={styles.textActions}>
                            {activities[item.name].name}
                        </Text>
                    </View>
                ))}
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>
                    {description}
                </Text>
            </View>
        </View>
    )
}