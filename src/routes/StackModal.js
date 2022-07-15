import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {AddHumorScreen} from '../screens/AddHumor';
import {ModalHumor} from '../screens/ModalHumor'

const StackModalRoute = createNativeStackNavigator();

export const StackModalHumor = () => {
    return(
        <StackModalRoute.Navigator initialRouteName='AddHumorScreen' screenOptions={{headerShown: false}}>
            <StackModalRoute.Screen name='AddHumorScreen' component={AddHumorScreen} />
            <StackModalRoute.Screen name='ModalHumor' component={ModalHumor} />
        </StackModalRoute.Navigator>
    )
}