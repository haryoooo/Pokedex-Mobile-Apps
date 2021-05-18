import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import Region from '../screens/Region';
import Profile from '../screens/Profile';
import Favourite from '../screens/Favourite';
import HomeStack from './HomeStack';

export default function TabNavigations() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Region') {
            iconName = 'language';
          } else if (route.name === 'Favourite') {
            iconName = 'favorite';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} color={color} />;
        },
      })}
      tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray'
      }}
      >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Region" component={Region} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
