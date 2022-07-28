import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native'
import { styles } from './style';

export const ModalCheched = ({ handleVisibleCheckedModal }) => {

    const firstRun = useRef(true);
    const animation = useRef(null);

    useEffect(() => {
        if (firstRun.current) {
            animation.current.play(0, 50)
        }
    }, [])

    return (
        <View style={styles.bodyScreen}>
            <View style={styles.bodyModal}>
                <View style={styles.topItens}>
                    <View style={styles.itensMiddle}>
                        <LottieView
                            source={require('../../../../assets/lottie/checked.json')}
                            autoPlay={true}
                            loop={false}
                            ref={animation}
                        />
                        <Text style={styles.textChecked}>Tudo feito!</Text>
                    </View>
                </View>
                <View style={styles.bottomItens}>
                    <TouchableOpacity style={styles.buttonChecked} onPress={() => handleVisibleCheckedModal()}>
                        <Text style={styles.textButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}