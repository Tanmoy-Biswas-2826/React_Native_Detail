import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListData = () => {
    const fruits = ["apple","banana", "orange"];


  return (
    <View>
      <FlatList 
        data={fruits}
        keyExtractor={(item)=>item}
        renderItem={({item})=>{
            return <Text>{item}</Text>;
        }
      }/>
    </View>
  )
}

export default ListData