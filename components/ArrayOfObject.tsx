import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ArrayOfObject = () => {

    const  location =[
        {
            id:1,
            name:"London"
        },
        {
            id: 2,
            name: "Kolkata"
        },
        {
            id: 3,
            name: "Bombay"
        },
        {
            id:4,
            name: "Chennai"
        },
        {
            id: 5,
            name: "Delhi"
        },
        {
            id: 7,
            name: "Mechuka"
        },
    ]
  return (
    <View>
      <FlatList
        data={location}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>
        }
      />
    </View>
  )
}

export default ArrayOfObject