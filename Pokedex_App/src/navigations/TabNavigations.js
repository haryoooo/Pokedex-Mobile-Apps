import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Text} from 'react-native';
import Region from '../screens/Region';
import Profile from '../screens/Profile';
import Favourite from '../screens/Favourite';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';
import ProfileNavigation from './ProfileNavigation';

export default function TabNavigations() {
  const {favourite} = useSelector(state => state.pokemonFavouriteReducer);
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
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Region" component={Region} />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{tabBarBadge: favourite.length}}
      />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
}
