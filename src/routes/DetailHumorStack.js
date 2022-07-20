import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/Home';
import { DetailHumor } from '../screens/DetailHumor';

const DetailHumorStack = createStackNavigator();

export const DetailHumorStackRoute = () => {
    return (
        <DetailHumorStack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <DetailHumorStack.Screen name="HomeScreen" component={HomeScreen} />
            <DetailHumorStack.Screen name="DetailHumor" component={DetailHumor} options={{ presentation: 'modal' }} />
        </DetailHumorStack.Navigator>
    );
};
