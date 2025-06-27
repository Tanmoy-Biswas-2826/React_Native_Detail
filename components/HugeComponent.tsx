import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface  Product {
    image: ImageSourcePropType;
    name:string;
    rating : number;
    price: number;
}

const HugeComponent = () => {

    const products=[
        {
            image: require("../assets/images/pexels-senuscape-728360-1658967.jpg"),
            name: "Product 1",
            rating: 3.8,
            price: 26.99,
        },
        {
            image: require("../assets/images/pexels-senuscape-728360-1658967.jpg"),
            name: "product 2",
            rating: 3.8,
            price: 26.99
        },
        {
            image: require("../assets/images/pexels-senuscape-728360-1658967.jpg"),
            name: "product 3",
            rating: 3.8,
            price: 26.99
        },
        {
            image: require("../assets/images/pexels-senuscape-728360-1658967.jpg"),
            name: "product 4",
            rating: 3.8,
            price: 26.99
        },
        {
            image: require("../assets/images/pexels-senuscape-728360-1658967.jpg"),
            name: "product 5",
            rating: 3.8,
            price: 26.99
        },
        {
            image: require("../assets/images/pexels-senuscape-728360-1658967.jpg"),
            name: "product 6",
            rating: 3.8,
            price: 26.99
        },
    ];

    const renderItem = ({item}:{ item: Product }) => {
        return (
            <View style={style.productContainer}>
                <Image source={item.image} style={style.image} />
                <Text style={style.name}>{item.name}</Text>
                <Text style={style.rating}>Rating: {item.rating}</Text>
                <Text style={style.price}>Price: ${item.price}</Text>
            </View>
        ) 
    }

  return (
    <View>
        <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        />
      
    </View>
  )
}

const style = StyleSheet.create({
    productContainer:{
        flex:1,
        alignItems:"center",
        padding:10,
        marginBottom :10,
        backgroundColor:"#fff",
        borderRadius:10,
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:5,
        elevation:5
    },
    image:{
        width:200,
        height:300,
        borderRadius:10
    },
    name:{
        fontSize:10,
        fontWeight:"bold",
        marginTop:10
    },
    rating:{
        fontSize:16,
        color:"#888",
        marginTop:5,
    },
    price:{
        fontSize:16,
        color:"#000",
        marginTop:5
    }
})

export default HugeComponent