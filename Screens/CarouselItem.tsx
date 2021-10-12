import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

const {width,height} = Dimensions.get("window");

export default function CarouselItem({item}) {
    console.log(item)
    return (
        <View style={styles.cardView}>
            
            <View style={styles.productsText}>
                
                <Text style={styles.productName}>{item.productName}</Text>
                
                <Text style={styles.offerText}>{item.offerText}</Text>
                
                 <View style={styles.productPrices}>
                    
                    <Text style={styles.price}>Price : {item.price}</Text>
                    
                    <Text style={styles.offerPrice}>Offer Price : {item.offerPrice}</Text>

                   
                </View>
                <View style={styles.prizeOfferView}>
                    <Text style={styles.priceOffer}>{item.prizeOffer}</Text>
                </View>
                
                 
            </View>

            <View style={styles.imgView}>
                    <Image style={styles.imageStyle} source={item.image}/>
           </View>
             
              
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        flex:1,
        width:width,
        height:height / 3,
        marginTop:10,
        backgroundColor:"#fff",
        shadowColor:"#000",
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5
    },

    productsText:{
        marginLeft:20,
        marginTop:40,
    },

    offerText:{
        marginTop:10,
        width:"50%",
        marginLeft:0,
        color:"orange",
        fontWeight:"bold"
    },

   

    productName:{
        fontWeight:"bold",
        fontSize:25
    },

   productPrices:{
       marginTop:10,
       flexDirection:"row"
   },

    imageStyle:{
        width: 107,
        height: 165,
        padding:10
    },

    imgView:{
        position:"absolute",
        top:40,
        right:20,
    },

    offerPrice:{
        marginLeft:20,
        fontWeight:"bold"
    },

    prizeOfferView:{
        marginTop:50,
        marginRight:20,
    },

    priceOffer:{
        fontWeight:"bold",
        color:"green"
    },
   

    price:{
        fontWeight:"bold",
    }
})
