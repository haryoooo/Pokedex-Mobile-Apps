import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFavourite } from '../store/action/pokemonFavouriteAction'

export default function Favourite() {
    const {favourite} = useSelector(state => state.pokemonFavouriteReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFavourite())
    }, [])

    return (
        <View>
            <Text>{JSON.stringify(favourite)}</Text>
        </View>
    )
}
