import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Center from '../helpers';
import {Button} from 'react-native-elements';

export default function Region({navigation}) {
  return (
    <Center>
      <Text style={styles.headerText}>Select Region</Text>
      <TouchableOpacity>
        <View style={styles.content}>
        <Button title="Kanto Region" type="outline"  onPress={()=>navigation.navigate('Pokedex')} />
        </View>
     </TouchableOpacity>
     <View style={styles.content}>
        <Button title="Johto Region" disabled />
    </View>
    </Center>
  );
}

const styles = StyleSheet.create({
    content:{
        paddingTop: 10,
        marginVertical: 10,
        width: 200,
    },

    headerText: {
      fontSize: 32,
      fontWeight: 'bold'
    }
})
