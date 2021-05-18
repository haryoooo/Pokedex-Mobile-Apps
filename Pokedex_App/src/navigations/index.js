import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import TabNavigations from './TabNavigations';

export default function index() {
    return (
        <NavigationContainer>
          <TabNavigations />
        </NavigationContainer>
    )
}
