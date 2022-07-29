import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './style';

export const ModalError = ({ handleVisibleErrorModal, message }) => {

    const firstRun = useRef(true);
    const animation = useRef(null);

    useEffect(() => {
        if (firstRun.current) {
            animation.current.play(0, 55)
        }
    }, [])

    return (
        <View style={styles.bodyScreen}>
            <View style={styles.bodyModal}>
                <View style={styles.topItens}>
                    <View style={styles.itensMiddle}>
                        <LottieView
                            source={require('../../assets/lottie/error.json')}
                            autoPlay={true}
                            loop={false}
                            ref={animation}
                            style={{ width: 110, height: 110 }}
                        />
                        <Text style={styles.textChecked}>{message}</Text>
                    </View>
                </View>
                <View style={styles.bottomItens}>
                    <TouchableOpacity style={styles.buttonChecked} onPress={() => handleVisibleErrorModal()}>
                        <Text style={styles.textButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}