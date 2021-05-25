import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';

export default function ProfileNavigation() {

const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: '#000080',
            itemStyle: { marginVertical: 10 },
          }}>
            <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon: config => <Icon
                size={23}
                name={Platform.OS === 'android' ? 'md-person-outline' : 'ios-person-outline'}></Icon>}}/>
            <Drawer.Screen name="Setting" component={Setting} options={{drawerIcon: config => <Icon
                size={23}
                name={Platform.OS === 'android' ? 'md-settings-outline' : 'ios-settings-outline'}></Icon>}} />
        </Drawer.Navigator>
    )
}
