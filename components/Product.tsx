import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

interface Product {
    name : string,
    image: ImageSourcePropType,
    price :number,
    description : string,
    isFeatured:boolean
}
    const Product = ({ name, image, price, description, isFeatured }: Product) => {
  return (
    <View style={style.productContainer}>
      <View style={style.imageContainer}>
        <Image style={style.productImage} source={image}/>
      </View>
      <View style = {style.contentContainer}>
        <Text style={style.productName}>{name}</Text>
        <Text style={style.productPrice}>${price}</Text>
        {isFeatured && <Text style ={style.featuredTag}>Featured</Text>}
        <Text style={style.productDescription}>{description}</Text>
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    padding: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    marginRight: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  featuredTag: {
    backgroundColor: "#f0f0f0",
    padding: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
  },
});


export default Product