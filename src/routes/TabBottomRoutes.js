import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AddButton } from '../components/IconsBottomTab/AddButton';
import { Button } from '../components/IconsBottomTab/Button';

import { DetailHumorStackRoute } from './DetailHumorStack';
import { UserRoutes } from './UserStack'

const Tab = createBottomTabNavigator();

const Placeholder = () => <View />

export const TabBottomRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFFF',
                tabBarInactiveTintColor: '#304FFE',
                tabBarItemStyle: {
                    width: 50,
                    height: 50,
                    alignSelf: 'center',
                },
                tabBarStyle: {
                    height: 90,
                    borderTopColor: '#C4C4C4',
                    borderTopWidth: 2,
                    backgroundColor: '#FFFF',
                },
            }}>
            <Tab.Screen
                name="HomeStack"
                component={DetailHumorStackRoute}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Button name={'home'} color={color} focused={focused} />
                    ),
                }}
            />
            <Tab.Screen
                name="PlusButton"
                component={Placeholder}
                options={{
                    tabBarIcon: () => <AddButton />,
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('ModalAddCard')
                    }
                })}
            />
            <Tab.Screen
                name="CommingSoonScreen"
                component={UserRoutes}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Button name={'list'} color={color} focused={focused} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
