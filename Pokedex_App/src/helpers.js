import React from 'react'
import { View } from 'react-native'

export default function helpers({children}) {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center', margin: 50,}}>
           {children}
        </View>
    )
}
