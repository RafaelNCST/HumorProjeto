import React from 'react';
import {View,TouchableOpacity , Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';
import { HumorColors } from '../../helpers/HumorColors';

export const HumorCard = ({emoji,date,humor,time,description, actions}) => {

    const Navigation = useNavigation();

    const NavigationDynamicProps = () => {
        Navigation.navigate('ModalHumor', {
            emoji: emoji,
            date: date,
            humor: humor,
            time: time,
            description: description,
            actions: actions,
        })
    }

    return(
        <TouchableOpacity style={styles.humorCardBody} onPress={NavigationDynamicProps}>
            <View style={styles.containerTop}>
                <Image source={emoji} style={styles.emojiImage} />
                <View style={styles.containerItensDate}>
                    <Text style={styles.textDate}>{date}</Text>
                    <View style={styles.containerTimeAndHumor}>
                        <Text style={[styles.textHumor, {color: HumorColors[humor]}]}>{humor}</Text>
                        <Text style={styles.textTime}>{time}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerActions}>
                    <View style={styles.containerActionItem}>
                        <Icon 
                            name={actions[0][0]} 
                            color='#000000' 
                            size={20} 
                        />
                        <Text style={styles.textActions}>{actions[0][1]}</Text>
                    </View>
                    <View style={styles.pointerActions} />
                    <View style={styles.containerActionItem}>
                        <Icon 
                            name={actions[1][0]} 
                            color='#000000' 
                            size={20}
                        />
                        <Text style={styles.textActions}>{actions[1][1]}</Text>
                    </View>
                    <View style={styles.pointerActions} />
                    <View style={styles.containerActionItem}>
                        <Icon 
                            name={actions[2][0]} 
                            color='#000000' 
                            size={20} 
                        />
                        <Text style={styles.textActions}>{actions[2][1]}</Text>
                    </View>
                </View>
                <Text style={styles.textDescription}>{description.substring(0,33)+'...'}</Text>
            </View>
        </TouchableOpacity>
    )
}