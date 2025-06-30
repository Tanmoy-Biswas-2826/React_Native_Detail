
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const WithState = () => {

    //in this line count store the initial value and for update value we declare
    // a function that is setCount its syntax for useState.
    const [count,setCount] = useState(0);
    console.log(count);
    
  return (
    <View>
      <Text>{count}</Text>
      <Button title = "Increment" onPress={() => setCount(count +1)}/>
    <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  )
}
export default WithState