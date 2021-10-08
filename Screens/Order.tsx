import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements'
import orderData from './OrderData'

export default function Order() {
    // console.log(orderData[0].count);
    return (
        <View style={styles.orderContainer}>
            <Text style={styles.orderTitle}>Your Order</Text>
            <Card containerStyle={{padding:0,width:"100%",elevation:10}}>
                <Text style={styles.product}>Product</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.productItems}>{orderData[0].productName}<Text style={styles.count}> × {orderData[0].count} </Text></Text>
             </Card>

            <Card containerStyle={{padding:0,width:"100%",elevation:10}}>
                <Text style={styles.shipping}>Shipping</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.addressValue}>{orderData[0].address}</Text>
            </Card>

             <Card containerStyle={{padding:0,width:"100%",elevation:10}}>
                <Text style={styles.pricing}>Pricing</Text>
                <Card.Divider style={styles.divider} />
                
                <View style={styles.rowSubTotal}>
                <Text style={styles.subTotal}>Subtotal</Text>
                <Text style={styles.subtotalValue}>{orderData[0].subTotal}</Text>
                </View>

                <View style={styles.rowGst}>
                    <Text style={styles.gst}>GST</Text>
                    <Text style={styles.gstValue}>{orderData[0].gst}</Text>
                </View>

                <View style={styles.rowTotal}>
                    <Text style={styles.totalPrice}>Total</Text>
                    <Text style={styles.totalPriceValue}>{orderData[0].total}</Text>
                </View>
                 
             </Card>
            <Button title={"Place Order"} buttonStyle={{marginTop:10,
                padding:10,
                width:350,
                backgroundColor:"green",
                borderRadius:12}} />
        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer:{
        flex:1,
        marginTop:25,
        alignItems:"center",
    },

    orderTitle:{
        fontSize:25,
        fontWeight:"bold"
    },
    
    divider:{
        marginTop:10
    },

    product:{
        fontWeight:"bold",
        marginLeft:10,
        marginTop:10,
        fontSize:20,
    },

     shipping:{
        marginTop:10,
        marginLeft:10,
        fontWeight:"bold",
        fontSize:20
    },

    pricing:{
        fontWeight:"bold",
        marginLeft:10,
        marginTop:10,
        fontSize:20
    },

    productItems:{
        marginLeft:10,
        marginBottom:20
    },

     addressValue:{
      marginLeft:10,
      marginBottom:20,
      width:"50%"  
    },


    subTotal:{
        marginLeft:10,
        marginBottom:20,
    },

    gst:{
        marginLeft:10,
        marginBottom:20
    },

    totalPrice:{
        marginLeft:10,
        marginBottom:20
    },

   

    count:{
        fontWeight:"bold"
    },

    rowSubTotal:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    rowGst:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    rowTotal:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    subtotal:{
        fontWeight:"bold",
        fontSize:20,
        marginLeft:10,
    },

     subtotalValue:{
        marginRight:10,
        fontWeight:"bold"
    },

    gstValue:{
        marginRight:10,
        fontWeight:"bold"
    },

    totalPriceValue:{
        marginRight:10,
        fontWeight:"bold"
    },

   
   
})
