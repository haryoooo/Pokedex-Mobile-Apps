import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Center from '../helpers';
import {Chip} from 'react-native-elements';

export default function Region({navigation}) {
  return (
    <Center>
      <Text style={styles.headerText}>Select Region</Text>
      <TouchableOpacity style={styles.content}>
        <Chip title="Kanto Region" type="outline" onPress={()=>navigation.navigate('Pokedex')} />
     </TouchableOpacity>
     <View style={styles.content}>
        <Chip title="Johto Region" disabled />
    </View>
    </Center>
  );
}

const styles = StyleSheet.create({
    content:{
        paddingTop:20,
        fontSize: 24
    },
    headerText: {
      fontSize: 32,
      fontWeight: 'bold'
    }
})
