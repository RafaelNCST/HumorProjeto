import React from 'react';
import {View, Image, Text} from 'react-native';

import { styles } from './style';

export const HomeScreen = () => {
    return (
        <View style={styles.bodyScreen}>
            <View style={styles.itensContainer}>
                <Image source={require('../../assets/images/homeFace.png')} />
                <Text style={styles.textEmpty}> Você ainda não tem nenhum </Text>
                <Text style={styles.textEmpty}> registro diário. Para começar, </Text>
                <Text style={styles.textEmpty}> toque no ícone de adicionar na tela. </Text>
            </View>
        </View>
    )
}