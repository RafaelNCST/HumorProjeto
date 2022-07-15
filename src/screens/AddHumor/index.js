import React from 'react';
import {FlatList, View} from 'react-native';

import { styles } from './style';
import { HumorCard } from '../../components/HumorCards'
import {Cards} from '../../helpers/Cards'

export const AddHumorScreen = () => {
    return (
        <FlatList 
            contentContainerStyle={{paddingBottom: 18}}
            data={Cards}
            keyExtractor={item => item.card}
            renderItem={({item}) => 
                <View style={styles.cardContainer}>
                    <HumorCard 
                        emoji={item.emoji}
                        date={item.date} 
                        humor={item.humor} 
                        time={item.time} 
                        description={item.description}
                        actions={item.actions}
                    />
                </View>
            }
        />
    )
}