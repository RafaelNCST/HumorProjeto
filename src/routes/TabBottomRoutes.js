import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {AddButton} from '../components/IconsBottomTab/AddButton';
import {Button} from '../components/IconsBottomTab/Button';

import {HomeScreen} from '../screens/Home'

import {StackModalHumor} from './StackModal'

import {CommingSoonScreen} from '../screens/CommingSoon'

const Tab = createBottomTabNavigator();

export const TabBottomRoutes = () => {

    return(
        <Tab.Navigator 
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFFF',
                tabBarInactiveTintColor: '#304FFE',
                tabBarItemStyle:{
                    width: 50,
                    height: 50, 
                    alignSelf: 'center'
                },
                tabBarStyle:{
                    height: 90,
                    borderTopColor: '#C4C4C4',
                    borderTopWidth: 2,
                    backgroundColor: '#FFFF',
                },
            }}>
                <Tab.Screen name='HomeCards' component={StackModalHumor} options={{
                    tabBarIcon: ({color, focused}) => (
                        <Button name={'home'}  color={color} focused={focused}/>
                    )
                }}/>
                <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
                    tabBarIcon: () => (
                        <AddButton />
                    )
                }}/>
                <Tab.Screen name='CommingSoonScreen' component={CommingSoonScreen} options={{
                    tabBarIcon: ({color, focused}) => (
                        <Button name={'list'} color={color} focused={focused}/>
                    )
                }}/>
        </Tab.Navigator>
    )
}