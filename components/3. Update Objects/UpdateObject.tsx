
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

   

const UpdateObject = () => {

    const [movie, setMovie] = useState({
        title: 'Amazone',
        rating: 7
    })

    const handelClick = () => {
        setMovie ({...movie,rating:5})
    }

  return (
    <View>
        <Text>Movie: {movie.title}</Text>
        <Text>Rating: {movie.rating}</Text>
        <Button title = "Change Rating" onPress={handelClick}/>
    </View>
  )
}

export default UpdateObject