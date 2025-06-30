import React from 'react'
import { FlatList, Text, View } from 'react-native'


const groceries = ['milk','beard','eggs','cheese']

const AndOperator = () => {
  return (
    <View>
        <Text>Cart</Text>
        {groceries.length >= 0 && (
<Text>You have {groceries.length} item in your cart</Text>
        )}
    <FlatList
    data={groceries}
    renderItem={({item}) => <Text>{item}</Text>}
    />
    </View>
  )
}

export default AndOperator