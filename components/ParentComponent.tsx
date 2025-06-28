import React from 'react'
import { Text, View } from 'react-native'
import ChildCoponent from './ChildCoponent'

const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>
      <ChildCoponent 
      name="ZionZing"
      age={22}
      hobbies={["Coding", "Art", "Football"]}
      />
    </View>
  )
}

export default ParentComponent