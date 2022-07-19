import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/Login';
import {TabBottomRoutes} from './TabBottomRoutes';

const Stack = createNativeStackNavigator();

export const LoginStackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={TabBottomRoutes} />
        </Stack.Navigator>
    );
};
