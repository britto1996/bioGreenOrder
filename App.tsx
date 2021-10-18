import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Body from './Screens/Body';
import Header from './Screens/Header';
import Order from './Screens/Order';
import Offer from './Screens/Offer';
import ApplyCoupon from './Screens/ApplyCoupon';


// const Stack = createNativeStackNavigator()

const {Navigator,Screen} = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Header/>
    //   <Body/>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Header/>
      <Navigator>
        <Screen options={{headerShown:false}} name="Checkout" component={Body} />
        <Screen options={{headerShown:false}} name="Order" component={Order} />
        <Screen options={{headerShown:false}} name="Offer" component={Offer} />
        <Screen options={{headerShown:false}} name="Coupon" component={ApplyCoupon} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
