import React,{useState} from 'react'
import { View, Text,Image, StyleSheet, Dimensions, ScrollView, FlatList, TextInput } from 'react-native'
import offerData from './offerData'
import Slideshow from "react-native-slideshow-improved"
import Carousel,{Pagination} from "react-native-snap-carousel"
import IconData from './IconData'
import { Button, SearchBar } from 'react-native-elements'

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const {width,height} = Dimensions.get("window");
export default function Offer({navigation}:{navigation:any}) {
    // console.log(offerData[0].image)

    const [slidesActive,setSlidesActive] = useState(0);
    // console.log(slidesActive);



    function pagination(){
        return(
            <Pagination
               dotsLength={offerData.length}
               activeDotIndex={slidesActive}
               containerStyle={{backgroundColor:'#EDEDED'}}
               dotStyle={{
                   width:10,
                   height:10,
                   borderRadius:5,
                   marginHorizontal:8,
                   backgroundColor:"green"
               }}
               inactiveDotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#C36A2D' 
               }} 
               inactiveDotOpacity={0.4}
               inactiveDotScale={0.6} />
        )
    }

    return (
        <View style={styles.offerContainer}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <View style={styles.imgText}>
                        <Image style={styles.img} source={IconData[0].image} />
                        <Text style={styles.iconTxt}>Glasses</Text>
                    </View>
                    <View style={styles.imgText}>
                        <Image style={styles.img} source={IconData[1].image} />
                        <Text style={styles.iconTxt}>Bio plates</Text>
                    </View>
                    <View style={styles.imgText}>
                         <Image style={styles.img} source={IconData[2].image} />
                          <Text style={styles.iconTxt}>Bio Drinks</Text>
                    </View>
                   
                     
                </View>
                {/* <CarouselComponent data={offerData} /> */}

                <View>
                    <Carousel data={offerData}
                        renderItem={({item})=>{
                            return <View style={styles.carouselCardView}>
                                <View style={styles.carouselProductTxt}>
                                     <Text style={styles.carouselProductName}>{item.productName}</Text>
                                     <View style={styles.carouselProductPrices}>
                                         <Text style={styles.carouselProductPrice}>{item.price}</Text>
                                         <Text style={styles.carouselOfferPrice}>| {item.offerPrice}</Text>
                                     </View>
                                     <Text style={styles.carouselOfferTxt}>{item.offerText}</Text>
                                </View>
                               <View style={styles.carouselImgView}>
                                    <Image style={styles.carouselProductImg} source={item.image} />
                               </View>
                            </View>
                        }} 
                            autoplay
                            enableMomentum={false}
                            lockScrollWhileSnapping
                            useScrollView
                            loop
                            autoPlayInterval={5000}
                            inactiveSlideOpacity={0.4}
                            swipeThreshold={100}
                            layoutCardOffset={-12}
                            onSnapToItem={index=>setSlidesActive(index)}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                        />
                        {pagination()}
                </View>

                <View style={styles.blockbusterStyles}>
                    <Text style={styles.cardHeader}>Blockbuster Deals</Text>
                    <View>
                        <FlatList
                            data={offerData}
                            keyExtractor={(item,index)=>'key' + index}
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            snapToAlignment='center'
                            scrollEventThrottle={16}
                            decelerationRate={"fast"}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item})=>{
                                return (
                                    <View style={styles.cardView}>
                                        <View style={styles.imgView}>
                                              <Image style={styles.image} source={item.image} /> 
                                        </View>
                                        <View style={styles.offers}>
                                            <Text style={styles.offerPriceTxt}>Price : {item.price}</Text>
                                            <Text style={styles.description}>{item.description}</Text>
                                           
                                            <View style={styles.couponCode}>
                                                <TextInput 
                                                style={styles.input}
                                                placeholder={`Enter your code to buy at ${item.offerPrice}`}/>
                                                 <Text style={styles.coupon} onPress={()=>navigation.navigate("Coupon")}>Apply 🎟️ </Text>
                                            </View>
                                            
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={styles.explore}>
                         <Text style={styles.exploreTxt}>Explore</Text>
                         <View> 
                              <FlatList  
                                data={offerData}
                                numColumns={2}
                                keyExtractor={(item,index)=>'key' + index}
                                renderItem={({item})=>{
                                    return(
                                            <View style={styles.exploreCardView}>
                                            <View style={styles.exploreImageView}>
                                                <Image style={styles.exploreImage} source={item.image} />  
                                            </View>
                                            <Text style={styles.exploreOffer}>Offer Price : {item.offerPrice}</Text>
                                            <Text style={styles.exploreProduct}>Apply your coupon and get product in {item.offerPrice}</Text>
                                            {/* <Button title={"BUY"} buttonStyle={{marginTop:5,width:"95%",backgroundColor:"green",marginLeft:5}} /> */}
                                        </View>
                                       
                                    )
                                }}  /> 
                            <View style={styles.exploreAllView}>
                                 <Text onPress={()=>console.log("see all button")} style={styles.exploreAllTxt}>See all</Text>
                            </View>
                           
                         </View>
                    </View>
                   
                </View>
            </ScrollView>
            <View style={styles.offerFooter}>
                <Text style={styles.footerTxt}>Add your footer here</Text>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    offerContainer:{
        flex:1,
        backgroundColor:"#C1FFD7"
    },

    imgText:{
        flexDirection:"column"
    },

    iconTxt:{
        fontWeight:"bold",
        marginLeft:10
    },

    carouselCardView:{
        flex:1,
        height:height / 4,
        marginTop:10,
        backgroundColor:"#fff",
        shadowColor:"#000",
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5
    },

    carouselProductTxt:{
        marginLeft:10,
        marginTop:20
    },

    carouselProductName:{
        fontSize:25
    },

    carouselProductPrices:{
        marginTop:20,
        flexDirection:"row"
    },

    carouselProductPrice:{
        textDecorationLine:"line-through",
        fontSize:15
    },

    carouselOfferPrice:{
        marginLeft:10,
        fontWeight:"bold",
        fontSize:20
    },

    carouselOfferTxt:{
        marginTop:10,
        width:"50%",
        color:"green",
        fontWeight:"bold"
    },

    carouselProductImg:{
        width:107,
        height:165
    },

    carouselImgView:{
        position:"absolute",
        top:"5%",
        right:"10%"
    },
    

    imgContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:10,
    },


    img:{
    width: 75,
    height: 75,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 75,
    },


    blockbusterStyles:{
        backgroundColor:"#EDEDED",
    },

    cardHeader:{
        marginTop:10,
        marginLeft:10,
        fontSize:25,
    },

    cardView:{
        flex:1,
        marginLeft:10,
        width:width - 20,
        margin:10,
        height:height / 3,
        backgroundColor:"#fff",
    },

    imgView:{
        alignItems:"center"
    },

    image:{
       width: 125,
       height: 125,
       padding:10
    },

    exploreImageView:{
        alignItems:"center",
        justifyContent:"center",
    },

    exploreImage:{
        width: 125,
       height: 125,
    },

    offers:{
        marginTop:5,
        marginLeft:10
    },

    offerPriceTxt:{
        fontSize:20  
    },

    exploreOffer:{
        marginTop:5,
        marginLeft:10,
        fontSize:20
    },

    description:{
        marginTop:5,
        fontWeight:"bold"
    },

    exploreProduct:{
        marginLeft:10,
        fontWeight:"bold",
        width:"90%"
    },

    coupon:{
        marginTop:10,
        marginLeft:10,
        fontWeight:"bold",
        color:"green",
    },

    input:{
        height:40,
        borderWidth:1,
        paddingLeft:5,
        borderColor:"green",
        width:"75%",
    },

    couponCode:{
        marginTop:10,
        flexDirection:"row"
    },

    explore:{
        backgroundColor:"#EDEDED"
    },

    exploreTxt:{
        marginTop:25,
        marginLeft:10,
        fontSize:25,
    },

    exploreCardView:{
        flex:1,
        width:width - 20,
        margin:10,
        height:height / 4,
        backgroundColor:"#fff",
    },

    exploring:{
        marginTop:10,
        marginLeft:5,
        marginRight:5
    },

    exploreAllView:{
        marginLeft:10
    },

    exploreAllTxt:{
        color:"green"
    },

    offerFooter:{
        padding:15,
        backgroundColor:"#fff"
    },

    footerTxt:{
        fontWeight:"bold"
    }
})