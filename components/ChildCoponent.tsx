import React from 'react';
import { Text, View } from 'react-native';

interface ChildProps {
    name: string
    age : number
    hobbies: string[];
}

const ChildCoponent = ({name, age , hobbies}:ChildProps) => {
    

  return (
    <View>
      <Text>ChildCoponent</Text>
      <Text>Name: {name}</Text>
    <Text>Age :{age}</Text>
    <Text>Hobbies: {hobbies}</Text>
    </View>
  )
}

export default ChildCoponent