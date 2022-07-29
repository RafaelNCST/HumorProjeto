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
                    {actions.map((item, index) => (
                        <View key={index} style={styles.containerActionItem}>
                            <Icon name={activities[item.name].icon} color="#000000" size={20} />
                            <Text style={styles.textActions}>{activities[item.name].name}</Text>
                            {actions.length - 1 !== index &&
                                <View style={styles.pointerActions} />
                            }
                        </View>
                    ))

                    }
                </View>
                <Text style={styles.textDescription}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
