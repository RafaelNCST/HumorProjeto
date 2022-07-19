import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './style';
import { LoginItens } from './components/LoginInputs';

export const LoginScreen = () => {

    return (
        <View style={styles.bodyScreen}>
            <View style={styles.itensContainer}>
                <Image
                    style={styles.imageLogin}
                    source={require('../../assets/images/timeImage.png')}
                />
                <LoginItens />
            </View>
        </View>
    );
};
