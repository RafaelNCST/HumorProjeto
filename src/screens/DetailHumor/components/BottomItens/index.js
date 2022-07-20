import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './style'

import { activities } from '../../../../helpers/activities'

export const BottomItens = ({ description, actions }) => {

    const [ac1, ac2, ac3] = actions;

    return (
        <View style={styles.bottomItens}>
            <View style={styles.containerActions}>
                <View style={styles.itensActions}>
                    <View style={styles.iconView}>
                        <Icon
                            name={activities[ac1.name].icon}
                            color="#FFFFFF"
                            size={30}
                        />
                    </View>
                    <Text style={styles.textActions}>
                        {activities[ac1.name].name}
                    </Text>
                </View>
                <View style={styles.itensActions}>
                    <View style={styles.iconView}>
                        <Icon
                            name={activities[ac2.name].icon}
                            color="#FFFFFF"
                            size={30}
                        />
                    </View>
                    <Text style={styles.textActions}>
                        {activities[ac2.name].name}
                    </Text>
                </View>
                <View style={styles.itensActions}>
                    <View style={styles.iconView}>
                        <Icon
                            name={activities[ac3.name].icon}
                            color="#FFFFFF"
                            size={30}
                        />
                    </View>
                    <Text style={styles.textActions}>
                        {activities[ac3.name].name}
                    </Text>
                </View>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.textDescription}>
                    {description}
                </Text>
            </View>
        </View>
    )
}