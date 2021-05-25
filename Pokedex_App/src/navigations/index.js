import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import TabNavigations from './TabNavigations';

export default function index() {
    return (
        <NavigationContainer>
          <TabNavigations />
        </NavigationContainer>
    )
}
