import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export const AddButton = () => {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.AddButtonStyle}
            onPress={() => Navigation.navigate('AddCard')}>
            <Icon name="add" color="#FFFF" size={40} />
        </TouchableOpacity>
    );
};

export const styles = StyleSheet.create({
    AddButtonStyle: {
        backgroundColor: '#304FFE',
        borderRadius: 52,
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
    },
});
