import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { styles } from './style'
import { HumorColors } from '../../helpers/HumorColors';

export const ModalHumor = () => {

    const Navigation = useNavigation();

    const route = useRoute();
    const {emoji,date,humor,time,description, actions} = route.params;

    return (
        <View style={styles.bodyScreen}>
            <TouchableOpacity style={styles.backButton} onPress={() => Navigation.jumpTo('HumorScreen')}>
                <Icon name='chevron-left' size={35} color='#304FFE' />
            </TouchableOpacity>
            <View style={styles.itensContainer}>
                <View style={styles.containerDate}>
                    <View style={styles.itensDate}>
                        <Icon name='schedule' color='#969696' size={18}/>
                        <Text style={styles.textDate}>{time}</Text>
                    </View>
                    <View style={styles.itensDate}>
                        <Icon name='event' color='#969696' size={18}/>
                        <Text style={styles.textDate}>{date}</Text>
                    </View>
                </View>
                <View style={styles.containerHumor}>
                    <Image source={emoji} style={{width: 65, height: 65}} />
                    <Text style={[styles.textHumor, {color: HumorColors[humor]}]}>{humor}</Text>
                </View>
                <View style={styles.containerActions}>
                    <View style={styles.itensActions}>
                        <View style={styles.iconView}><Icon name={actions[0][0]} color='#FFFFFF' size={30}/></View>
                        <Text style={styles.textActions}>{actions[0][1]}</Text>
                    </View>
                    <View style={styles.itensActions}>
                        <View style={styles.iconView}><Icon name={actions[1][0]}color='#FFFFFF' size={30}/></View>
                        <Text style={styles.textActions}>{actions[1][1]}</Text>
                    </View>
                    <View style={styles.itensActions}>
                        <View style={styles.iconView}><Icon name={actions[2][0]} color='#FFFFFF' size={30} /></View>
                        <Text style={styles.textActions}>{actions[2][1]}</Text>
                    </View>
                </View>
                <View style={styles.containerDescription}>
                    <Text style={styles.textDescription}>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    )
}