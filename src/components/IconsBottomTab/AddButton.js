import React, { } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const AddButton = () => {

    return (
        <View style={styles.AddButtonStyle}>
            <Icon name="add" color="#FFFF" size={40} />
        </View>
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
