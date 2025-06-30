
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const ToggleButton = () => {
    const [isOn, setIsOn] =  useState(false);
    
  return (
    <View>
     
      <Text>{isOn ? 'On' : 'Off'}</Text>
      <Button title='Click' onPress={() => setIsOn(!isOn) }/>
    </View>
  )
}

export default ToggleButton