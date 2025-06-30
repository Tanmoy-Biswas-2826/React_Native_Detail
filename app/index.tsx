import SharingState from "@/components/4. Sharing State/SharingState";
import { View } from "react-native";



export default function Index() {

  const product = [
    {
      productName: "Product A",
      productImage: require("../assets/images/pexels-javon-swaby-197616-2783873.jpg"),
      productPrice: 19.00,
      productDesc: "Description of product A",
      isFeatured: true,
    },
    {
      productName: "Product B",
      productImage: require("../assets/images/pexels-pixabay-279906.jpg"),
      productPrice: 19.00,
      productDesc: "Description of product B",
      isFeatured: true,
    },
    {
      productName: "Product C",
      productImage: require("../assets/images/pexels-soulful-pizza-2080276-3707744.jpg"),
      productPrice: 19.00,
      productDesc: "Description of product C",
      isFeatured: true,
    },
    {
      productName: "Product D",
      productImage: require("../assets/images/pexels-suzyhazelwood-2537930.jpg"),
      productPrice: 19.00,
      productDesc: "Description of product D",
      isFeatured: true,
    },
    {
      productName: "Product E",
      productImage: require("../assets/images/pexels-userpascal-32713615.jpg"),
      productPrice: 19.00,
      productDesc: "Description of product E",
      isFeatured: true,
    },
    {
      productName: "Product F",
      productImage: require("../assets/images/pexels-valeri-mak-2319397-3989394.jpg"),
      productPrice: 19.00,
      productDesc: "Description of product F",
      isFeatured: true,
    },

  ]
  return (
    // <View>
    //   {/* <ListDatat/> */}
    //   {/* <ArrayOfObject/> */}
    //   {/* <HugeComponent/> */}
    //   {/* <ParentComponent /> */}
    // </View>
    // <FlatList
    //   data={product}
    //   renderItem={({ item }) => (
    //     <Product
    //       name={item.productName}
    //       image={item.productImage}
    //       price={item.productPrice}
    //       description={item.productDesc}
    //       isFeatured={item.isFeatured}
    //     />

    //   )}
    // />
    <View>
      {/* <ConditionalStatement /> */}
      {/* <AndOperator /> */}
      {/* <TernaryOperator /> */}
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <UpdateArrays /> */}
      {/* <UpdateObject /> */}
      <SharingState />
    </View>
  );
}
