import React from 'react';
import {FlatList, View} from 'react-native';

import { styles } from './style';
import { HumorCard } from '../../components/HumorCards'
import {Data} from '../../helpers/CardsData'

export const AddHumorScreen = () => {
    return (
        <FlatList 
            contentContainerStyle={{paddingBottom: 18}}
            data={Data}
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
