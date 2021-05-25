import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Avatar, Button} from 'react-native-elements';

export default function Profile() {
  return (
      <View style={style.container}> 
        <Avatar size="xlarge" rounded title="H" activeOpacity={0.7} containerStyle={{backgroundColor: 'gray'}} />
        <Text h3 style={{marginVertical: 20}}>User Profile</Text>
        <Button title="Go To Settings" style={style.buttonStyle} />
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  }
});
