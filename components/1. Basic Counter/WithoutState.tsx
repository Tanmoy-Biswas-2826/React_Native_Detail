
import React from 'react';
import { Button, Text, View } from 'react-native';

//this code is for without sate here its not work
const WithoutState = () => {
    let counter = 0;
  return (
    <View>
      <Text>Count : {counter}</Text>
      <Button title="Increment" onPress={() => counter++}/>
    </View>
  )
}

export default WithoutState