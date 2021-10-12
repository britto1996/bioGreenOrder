import React,{useState} from 'react'
import { View, Text,Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import offerData from './offerData'
import Slideshow from "react-native-slideshow-improved"
import Carousel from './Carousel';



export default function Offer() {
    // console.log(offerData[0].image)
    const [itemsActive,setItemsActive] = useState(0);
    return (
        <View style={styles.offerContainer}>
       
            {/* <Text>{offerData[0].productName}</Text>
            <Text>{offerData[0].price}</Text>
            <Text>{offerData[0].offerPrice}</Text>
            <Image style={styles.imageStyle} source={offerData[0].image} />  */}
            <Carousel data={offerData} />
        </View>
            
    )
}

const styles = StyleSheet.create({
    offerContainer:{
        flex:1,
        backgroundColor:"#EADEB8"
    },


    imageStyle:{
        width: 107,
        height: 165,
        padding: 10
    }
})