import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {AddButton} from '../components/IconsBottomTab/AddButton';
import {HomeButton} from '../components/IconsBottomTab/HomeButton';
import {RandomButton} from '../components/IconsBottomTab/RandomButton';

import {HomeScreen} from '../screens/HomeScreen'
import {AddHumorScreen} from '../screens/AddHumorScreen'
import {TesteScreen} from '../screens/TesteScreen'
import {ModalHumor} from '../screens/ModalHumorScreen'

const Tab = createBottomTabNavigator();

export const TabBottomRoutes = () => {

    return(
        <Tab.Navigator 
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
                <Tab.Screen name='TabHome' component={HomeScreen} options={{
                    tabBarIcon: ({color, focused}) => (
                        <HomeButton color={color} focused={focused}/>
                    )
                }}/>
                <Tab.Screen name='HumorScreen' component={AddHumorScreen} options={{
                    tabBarIcon: () => (
                        <AddButton />
                    )
                }}/>
                <Tab.Screen name='RandomScreen' component={TesteScreen} options={{
                    tabBarIcon: ({color, focused}) => (
                        <RandomButton color={color} focused ={focused}/>
                    )
                }}/>
                <Tab.Screen name='ModalHumor' component={ModalHumor} options={{
                    tabBarItemStyle:{display:'none'}
                }} />
        </Tab.Navigator>
    )
}