import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './style';

export const LoadingScreen = () => {
    return (
        <View style={styles.bodyScreen}>
            <View style={styles.itensContainer}>
                <LottieView
                    source={require('../../assets/lottie/loading.json')}
                    autoPlay={true}
                    loop={true}
                    style={{ width: 150, height: 150 }}
                />
            </View>
        </View>
    )
}