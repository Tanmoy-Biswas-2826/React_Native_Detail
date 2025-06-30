import React from 'react';
import { Button, Text, View } from 'react-native';

interface ComponentTypeProps {
    count: number;
    onClickHandler: () => void;
}

const ComponentOne = ({ count, onClickHandler }: ComponentTypeProps) => {

  return (
    <View>
      <Text>Component One</Text>
      <Button title = "Click Comp 1" onPress={onClickHandler}/>
    </View>
  )
}
export default ComponentOne