import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LoginStackScreen } from './StackLogin';

export const Routes = () => {
    return(
        <NavigationContainer>
            <LoginStackScreen />
        </NavigationContainer>
    )
}