import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements'
import orderData from './OrderData'

export default function Order() {
    // console.log(orderData[0].count);
    return (
        <View style={styles.orderContainer}>
            <Text style={styles.orderTitle}>Your Order</Text>
            <Card containerStyle={{padding:0,width:350,borderRadius:18,elevation:10}}>
                <Text style={styles.product}>Product</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.productItems}>{orderData[0].productName}<Text style={styles.count}> × {orderData[0].count} </Text></Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.subtotal}>Subtotal</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.priceEach}>{orderData[0].subTotal}</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.shipping}>Shipping</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.address}>{orderData[0].address}</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.gst}>GST</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.gstPrice}>{orderData[0].gst}</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.totalPrice}>Total</Text>
                <Card.Divider style={styles.divider} />
                <Text style={styles.totalPriceValue}>{orderData[0].total}</Text>
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

    productItems:{
        marginLeft:10,
        marginBottom:10
    },

    count:{
        fontWeight:"bold"
    },

    subtotal:{
        fontWeight:"bold",
        fontSize:20,
        marginLeft:10,
    },

    priceEach:{
        marginLeft:10,
        marginBottom:10,
        fontWeight:"bold",
        fontSize:20
    },

    shipping:{
        marginLeft:10,
        fontWeight:"bold",
        fontSize:20
    },

    address:{
        marginLeft:10,
        marginBottom:10
    },

    gst:{
        marginLeft:10,
        fontWeight:"bold",
        fontSize:20
    },

    gstPrice:{
        marginLeft:10,
        marginBottom:10,
        fontWeight:"bold",
        fontSize:20
    },

    totalPrice:{
        marginLeft:10,
        fontWeight:"bold",
        fontSize:20
    },

    totalPriceValue:{
        marginLeft:10,
        marginBottom:20,
        fontWeight:"bold",
        fontSize:20
    }
})
