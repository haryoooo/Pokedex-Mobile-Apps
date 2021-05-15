import React from 'react'
import { Button, Image } from 'react-native'
import Center from '../helpers'

export default function Home({navigation}) {
    return (
        <Center>
            <Image source={require('../assets/pokemon_logo.png')} style={{maxHeight:100, maxWidth:200}} />
            <Button title="Go to Region" onPress={()=> navigation.navigate('Region') } />
        </Center>
    )
}
