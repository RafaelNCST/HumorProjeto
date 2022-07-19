import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home';
import { DetailHumor } from '../screens/DetailHumor';

const DetailHumorStack = createNativeStackNavigator();

export const DetailHumorStackRoute = () => {
    return (
        <DetailHumorStack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false }}>
            <DetailHumorStack.Screen name="HomeScreen" component={HomeScreen} />
            <DetailHumorStack.Screen name="DetailHumor" component={DetailHumor} />
        </DetailHumorStack.Navigator>
    );
};
