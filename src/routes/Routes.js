import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackSComponent } from './RootStack';

export const Routes = () => {
    return (
        <NavigationContainer>
            <RootStackSComponent />
        </NavigationContainer>
    )
}