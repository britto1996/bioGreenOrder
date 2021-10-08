import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Avatar} from "react-native-elements";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Add your header here</Text>
      {/* <Image style={styles.profile} source={require("../assets/profile.png")} /> */}
      <Avatar rounded
        icon={{name:"user",type:"font-awesome"}}
       source={{
       uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
       }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingTop:45,
    paddingBottom:30,
    paddingHorizontal:30,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  headerText:{
    fontSize:20,
    fontWeight:"bold"
  },
  profile:{
    width:100,
    height:100
  }
})
