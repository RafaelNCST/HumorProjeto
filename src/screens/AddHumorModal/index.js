import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

export const AddHumorModal = () => {

    const Navigation = useNavigation();

    return (
        <View style={styles.bodyScreen}>
            <TouchableOpacity onPress={() => Navigation.pop()}>
                <Text>Sair</Text>
            </TouchableOpacity>
            <Text> Aqui é a tela de adiciona Cards</Text>
        </View>
    );
};
