import React from 'react';
import { Button, Text, View } from 'react-native';

interface ComponentTypeProps {
    count : number;
    onClickHandler : () => void;
}

const ComponentTwo = ({ count, onClickHandler }: ComponentTypeProps) => {
  return (
    <View>
        <Text>Component Two</Text>
      <Text>{count}</Text>
      <Button title='Press Me' onPress={onClickHandler}/>
    </View>
  )
}

export default ComponentTwo