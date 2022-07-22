import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AddHumorModal } from '../screens/AddHumorModal'
import { LoginScreen } from '../screens/Login';
import { TabBottomRoutes } from './TabBottomRoutes';

const RootStack = createStackNavigator();

export const RootStackSComponent = () => {
    return (
        <RootStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, animationEnabled: false }}>
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="Home" component={TabBottomRoutes} />
            <RootStack.Screen name="ModalAddCard" component={AddHumorModal}
                options={{
                    animationEnabled: true,
                    presentation: 'modal'
                }} />
        </RootStack.Navigator>
    );
};
