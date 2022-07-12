import React from 'react';
import { StatusBar } from 'react-native';
import {Routes} from './src/routes/Routes'

export const App = () => {
    return (
        <>
            <Routes/>
            <StatusBar barStyle="dark-content" backgroundColor='#FFFF' style='auto'/>
        </>
    )
} 