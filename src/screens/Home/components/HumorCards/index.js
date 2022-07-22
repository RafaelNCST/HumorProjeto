import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style';

import { humorItens } from '../../../../helpers/humorItens';
import { activities } from '../../../../helpers/activities';
import { months } from '../../../../helpers/months'

export const HumorCard = ({ id, date, humor, description, actions }) => {
    const Navigation = useNavigation();

    const [ac1, ac2, ac3] = actions

    const dateValue = new Date(date);

    const NavigationDynamicProps = () => {
        Navigation.navigate('DetailHumor', {
            id: id,
        });
    };

    return (
        <TouchableOpacity style={styles.humorCardBody} onPress={NavigationDynamicProps}>
            <View style={styles.containerTop}>
                <Image source={humorItens[humor].image} style={styles.emojiImage} />
                <View style={styles.containerItensDate}>
                    <Text style={styles.textDate}>
                        {`${String(dateValue.getDate()).padStart(2, '0')} DE ${months[dateValue.getMonth()]}`}
                    </Text>
                    <View style={styles.containerTimeAndHumor}>
                        <Text style={[styles.textHumor, { color: humorItens[humor].cor }]}>
                            {humorItens[humor].estado}
                        </Text>
                        <Text style={styles.textTime}>
                            {`${String(dateValue.getHours()).padStart(2, '0')}:${String(dateValue.getMinutes()).padStart(2, '0')}`}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerActions}>
                    <View style={styles.containerActionItem}>
                        <Icon name={activities[ac1.name].icon} color="#000000" size={20} />
                        <Text style={styles.textActions}>{activities[ac1.name].name}</Text>
                    </View>
                    <View style={styles.pointerActions} />
                    <View style={styles.containerActionItem}>
                        <Icon name={activities[ac2.name].icon} color="#000000" size={20} />
                        <Text style={styles.textActions}>{activities[ac2.name].name}</Text>
                    </View>
                    <View style={styles.pointerActions} />
                    <View style={styles.containerActionItem}>
                        <Icon name={activities[ac3.name].icon} color="#000000" size={20} />
                        <Text style={styles.textActions}>{activities[ac3.name].name}</Text>
                    </View>
                </View>
                <Text style={styles.textDescription}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
