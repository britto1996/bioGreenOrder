import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Button } from 'react-native-elements';

import DropDownPicker from "react-native-dropdown-picker";

export default function Body({navigation}:{navigation:any}) {

    /** email and phone regex */

    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const phnumberRegex = /^([+]\d{2})?\d{10}$/;
    const postalCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    /**dropdown picker contents */

    const [open,setOpen] = useState(false);
    const [stateOpen,setStateOpen] = useState(false)
    const [value,setValue] = useState("");
    const [countryValue,setCountryValue] = useState("");
    const [stateValue,setStateValue] = useState("");
    const [countryIndex,setCountryIndex] = useState([
        {label:"India",value:"India"},
        {label:"USA",value:"USA"}
    ]);
    const [stateIndex,setStateIndex] = useState([
        {label:"Kerala",value:"Kerala"},
        {label:"Banglore",value:"Banglore"}
    ])

    /** text input fields */
    
    const [name,setName] = useState(false);
    const [country,setCountry] = useState(false);
    const [address,setAddress] = useState(false);
    const [state,setState] = useState(false);
    const [code,setCode] = useState(false);
    const [phone,setPhone] = useState(false);
    const [email,setEmail] = useState(false);
    
    const [nameError,setNameError] = useState("");
    const [countryError,setCountryError] = useState("");
    const [addressError,setAddressError] = useState("");
    const [stateError,setStateError] = useState("");
    const [codeError,setCodeError] = useState("");

    const [emailError,setEmailError] = useState("");
    const [phoneError,setPhoneError] = useState("");


    /** text input fields values */

    const [nameValue,setNameValue] = useState("");
    const [addressValue,setAddressValue] = useState("");
    const [codeValue,setCodeValue] = useState("");
    const [phoneValue,setPhoneValue] = useState("");
    const [emailValue,setEmailValue] = useState("");

  
  
    const nameStyle = name ? styles.textInputFocus : styles.textInput;
    const countryStyle = country ? styles.dropInputFocus : styles.dropInput;
    const addressStyle = address ? styles.textInputFocus : styles.textInput;
    const stateStyle = state ? styles.dropInputFocus : styles.dropInput;
    const codeStyle = code ? styles.textInputFocus : styles.textInput;
    const phoneStyle = phone ? styles.textInputFocus : styles.textInput;
    const emailStyle = email ? styles.textInputFocus : styles.textInput;

    /** error text below text input field */

    const nameErrorStyle = nameError ? styles.errorInputFocus : styles.successMessage;
    const countryErrorStyle = countryError ? styles.errorInputFocus : styles.successMessage;
    const addressErrorStyle = addressError ? styles.errorInputFocus : styles.successMessage;
    const stateErrorStyle = stateError ? styles.errorInputFocus : styles.successMessage;
    const codeErrorStyle = codeError ? styles.errorInputFocus : styles.successMessage;
    const emailErrorStyle = emailError ? styles.emailErrorInputFocus : styles.successMessage;
    const phoneErrorStyle = phoneError ? styles.phoneErrorInputFocus : styles.successMessage;
   
    const nameBorder = () => {
        setName(true);
        setCountry(false);
        setAddress(false);
        setState(false);
        setCode(false);
        setPhone(false);
        setEmail(false);    
    }


    // console.log(phnumberRegex.test(phoneValue))
   

    const countryBorder = () => {
        setName(false);
        setCountry(true);
        setAddress(false);
        setState(false);
        setCode(false);
        setPhone(false);
        setEmail(false);
    }
    const addressBorder = () => {
        setName(false);
        setCountry(false);
        setAddress(true);
        setState(false);
        setCode(false);
        setPhone(false);
        setEmail(false);
    }
    const stateBorder = () => {
        setName(false);
        setCountry(false);
        setAddress(false);
        setState(true);
        setCode(false);
        setPhone(false);
        setEmail(false);
    }
    const codeBorder = () => {
        setName(false);
        setCountry(false);
        setAddress(false);
        setState(false);
        setCode(true);
        setPhone(false);
        setEmail(false);
    }
    const phoneBorder = () => {
        setName(false);
        setCountry(false);
        setAddress(false);
        setState(false);
        setCode(false);
        setPhone(true);
        setEmail(false);
    }
    const emailBorder = () => {
        setName(false);
        setCountry(false);
        setAddress(false);
        setState(false);
        setCode(false);
        setPhone(false);
        setEmail(true);
    }

    const placeOrder = () => {

       
    //     if(!nameValue || 
    //     !countryValue || 
    //     !addressValue || 
    //     !stateValue || 
    //     !codeValue || 
    //     !phoneValue || 
    //     !emailValue){
    //         setNameError("Please enter your name");
    //         setCountryError("Please select your Country");
    //         setAddressError("Please enter your address");
    //         setStateError("Please select your State");
    //         setCodeError("Please enter your post code");
    //         setEmailError("Please enter your email");
    //         setPhoneError("Please enter your mobile number");

            
    //    }
        if(!nameValue){
            setNameError("Please enter your name");
        }else if(nameValue){
            setNameError("")
        }

        if(!countryValue){
            setCountryError("Please select your country");
        }else if(countryValue){
            setCountryError("");
        }

        if(!addressValue){
            setAddressError("Please enter your address");
        }else if(addressValue){
            setAddressError("");
        }

        if(!stateValue){
            setStateError("Please select your state");
        }else if(stateValue){
            setStateError("");
        }

        if(!codeValue){
            setCodeError("Please enter your postal code")
        }else if(postalCodeRegex.test(codeValue)===false){
            setCodeError("Please enter a valid postal code")
        }else if(codeValue){
            setCodeError("");
        }

        if(!emailValue){
            setEmailError("Please enter your email");
        }else if(checkEmail.test(emailValue)===false){
            setEmailError("Please enter a valid email");
        }else if(checkEmail){
            setEmailError("");
        }

        if(!phoneValue){
            setPhoneError("Please enter your mobile number");
        }else if(phnumberRegex.test(phoneValue)===false){
            setPhoneError("Please enter a valid phone number");
        }else if(phoneValue){
            setPhoneError("");
        }

        if(nameValue!=="" &&
          countryValue!=="" &&
          addressValue!=="" &&
          stateValue!=="" &&
          codeValue!=="" &&
          phoneValue!=="" &&
          emailValue!=="" &&
          phnumberRegex.test(phoneValue)===true &&
          checkEmail.test(emailValue)===true &&
          postalCodeRegex.test(codeValue)===true){
            console.log(nameValue);
            navigation.navigate("Order");
        }
        
       }
       
    

    return (
         <ScrollView style={styles.bodyContainer}>
        <View>
            <Text style={{paddingLeft:8,fontWeight:"bold"}}>Full Name</Text>
            <TextInput 
            onTouchStart={()=>nameBorder()}
            onChangeText={(text)=>setNameValue(text)}
            value={nameValue}
            placeholder="Enter your name" 
            style={nameStyle} />

            <Text style={nameErrorStyle}>{nameError}</Text> 

           

            <Text style={{paddingLeft:8,fontWeight:"bold"}}>Country</Text>
            {/* <TextInput onChange={()=>countryBorder()} placeholder="India" style={countryStyle} /> */}
            <DropDownPicker 
            onChangeValue={()=>countryBorder()} 
            style={countryStyle} 
            open={open} 
            value={countryValue} 
            items={countryIndex} 
            setOpen={setOpen} 
            setValue={setCountryValue} 
            setItems={setCountryIndex} />

             <Text style={countryErrorStyle}>{countryError}</Text>
           
            <Text style={{paddingLeft:8,fontWeight:"bold"}}>Street Address</Text>
            <TextInput 
            onTouchStart={()=>addressBorder()} 
            onChangeText={(text)=>setAddressValue(text)}
            value={addressValue}
            placeholder="House number and street name" 
            style={addressStyle} />

             <Text style={addressErrorStyle}>{addressError}</Text>

            <Text style={{paddingLeft:8,fontWeight:"bold"}}>State</Text>
            {/* <TextInput onChange={()=>stateBorder()} placeholder="Enter your State" style={stateStyle} />  */}
            <DropDownPicker 
            onChangeValue={()=>stateBorder()} 
            style={stateStyle} 
            open={stateOpen} 
            value={stateValue} 
            items={stateIndex} 
            setOpen={setStateOpen} 
            setValue={setStateValue} 
            setItems={setStateIndex} /> 

            <Text style={stateErrorStyle}>{stateError}</Text>

           
            <Text style={{paddingLeft:8,fontWeight:"bold"}}>Post code/zip</Text>
            <TextInput 
            onTouchStart={()=>codeBorder()} 
            placeholder="Enter your code" 
            onChangeText={(text)=>setCodeValue(text)}
            value={codeValue}
            style={codeStyle} />
             
             <Text style={codeErrorStyle}>{codeError}</Text>

            <Text style={{paddingLeft:8,fontWeight:"bold"}}>Phone</Text>
            <TextInput 
            onTouchStart={()=>phoneBorder()} 
            onChangeText={(text)=>setPhoneValue(text)}
            value={phoneValue}
            placeholder="Mobile number" 
            style={phoneStyle} />

             
             <Text style={phoneErrorStyle}>{phoneError}</Text>

            <Text style={{paddingLeft:8,fontWeight:"bold"}}>Email</Text>
            <TextInput 
            onChangeText={(text)=>setEmailValue(text)}
            value={emailValue}
            onTouchStart={()=>emailBorder()} 
            placeholder="Enter your email" 
            style={emailStyle} />

            
             <Text style={emailErrorStyle}>{emailError}</Text>

            <Button onPress={()=>placeOrder()} 
            title="Add your address" 
            buttonStyle={{marginLeft:10,marginRight:10,marginBottom:25,marginTop:10,
            backgroundColor:"green",padding:12,
            borderRadius:8}} />
        </View>
         </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    bodyContainer:{
        flex:1,
        marginTop:5,
        backgroundColor:"#fff"
    },

    textInputFocus:{
        borderWidth:2,
        borderColor:"green",
        padding:12,
        margin:10,
        
    },

    textInput:{
        borderWidth:1,
        borderColor:"gray",
        padding:12,
        margin:10,
        
    },

    dropInputFocus:{
        borderColor:"green",
        padding:12,
        margin:10,
        width:"95%"
    },

    dropInput:{
        borderColor:"gray",
        padding:12,
        margin:10,
        width:"95%"
    },

    errorInputFocus:{
        marginTop:0,
        marginLeft:8,
        fontWeight:"bold",
        color:"red"
    
    },

    emailErrorInputFocus:{
        marginTop:0,
        marginLeft:8,
        fontWeight:"bold",
        color:"red"
    },

    phoneErrorInputFocus:{
        marginTop:0,
        marginLeft:8,
        fontWeight:"bold",
        color:"red"
    },
    


    successMessage:{
        color:"green"
    }
})
