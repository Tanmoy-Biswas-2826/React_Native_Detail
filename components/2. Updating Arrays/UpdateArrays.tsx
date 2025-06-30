import React, { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

const UpdateArrays = () => {

    const [friend, setfriend] = useState(['Alexa', 'Bot', 'Gemini', 'ChatGPT']);
    const addOne = () => setfriend([...friend,'gambler'])
    const removeOne = () => setfriend(friend.filter(f => f !== 'Bot'))
    const updateOne =() => setfriend(friend.map((f)=> (f === 'Alexa' ? 'Toni' : f)));

  return (
    <View>
      <FlatList
      data={friend}
      keyExtractor={(friend) => friend}
      renderItem={({item}) => <Text>{item}</Text>}
      />
          <Button title="Add one" onPress={addOne} />
          <Button title='Remove one' onPress={removeOne} />
          <Button title='Updtae one' onPress={updateOne} />
    </View>
  )
}
export default UpdateArrays