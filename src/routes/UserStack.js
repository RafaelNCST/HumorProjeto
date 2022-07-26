import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UserScreen } from '../screens/User';
import { EditUserScreen } from '../screens/EditUser'

const UserStack = createStackNavigator();

export const UserRoutes = () => {
    return (
        <UserStack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
            <UserStack.Screen name='UserScreen' component={UserScreen} />
            <UserStack.Screen name='EditUserScreen' component={EditUserScreen} />
        </UserStack.Navigator>
    );
};
