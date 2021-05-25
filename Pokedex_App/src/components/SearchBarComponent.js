import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useSelector} from 'react-redux'

export default function SearchBarComponent(props) {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search Pokemon"
        onChangeText={props.filterName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    maxWidth: 250,
    marginVertical: 20,
    marginHorizontal: 70
  },
});
