import React , {useEffect, useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useNavigation, useRoute } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SliderBox } from "react-native-image-slider-box"
import one from '../assets/guruImage/01.jpg';
import two from '../assets/guruImage/02.jpg';
import three from '../assets/guruImage/03.jpg';
import four from '../assets/guruImage/04.jpg';
import Picture1 from '../assets/HomeScreenIcons/Picture1.jpg'
import Picture2 from '../assets/HomeScreenIcons/Picture2.png'
import Picture3 from '../assets/HomeScreenIcons/Picture3.png'
import Picture4 from '../assets/HomeScreenIcons/Picturee4.jpg'
import Picture5 from '../assets/HomeScreenIcons/Pic5.png'
import Picture6 from '../assets/HomeScreenIcons/Pic6.png'
import Picture8 from '../assets/HomeScreenIcons/Pic8New.jpg'
import Picture9 from '../assets/HomeScreenIcons/picnine.png'
import Picture10 from '../assets/HomeScreenIcons/Pic10.png';
import Picture11 from '../assets/HomeScreenIcons/Pic11.png';

import newPicture1 from '../assets/HomeScreenNewIcons/1.png';
import newPicture2 from '../assets/HomeScreenNewIcons/2.png';
import newPicture3 from '../assets/HomeScreenNewIcons/3.png';
import newPicture4 from '../assets/HomeScreenNewIcons/4.png';
import newPicture5 from '../assets/HomeScreenNewIcons/5.png';
import newPicture6 from '../assets/HomeScreenNewIcons/6.png';
import newPicture7 from '../assets/HomeScreenNewIcons/7.png';
import newPicture9 from '../assets/HomeScreenNewIcons/9.png';
import newPicture10 from '../assets/HomeScreenNewIcons/10.png';
import newPicture11 from '../assets/HomeScreenNewIcons/11.png';

import CommonHeader from "../component/common/CommonHeader";

import {menu} from 'react-native-vector-icons/Entypo'






import { useSelector } from "react-redux";

const Home = ({navigation}) => {
    const Navigation = useNavigation();
    const [username , setUser] = useState('')
    const { user, loading } = useSelector(state => state.auth);
    useEffect(()=>{
        setUser(user?.name)
    },[])
    console.log(username)
    const route = useRoute();
    const [images , setImages] = useState([one, two , three , four])

    const SliderComponent = () =>{
        return(
            <View>
                <SliderBox
                    images={images}
                    sliderBoxHeight={220}
                    ImageComponentStyle={{borderRadius: 3, width: SIZES.width , objectFit:'contain'}}
                    autoplay
                    circleLoop
                    // paginationBoxVerticalPadding={20}
                    dotColor={`${COLORS.pink}`}
                    inactiveDotColor="#90A4AE"
                    imageLoadingColor="#2196F3"
    />


            </View>
        )
    }

    const featuresData = [
        {
            id: 1,
            // icon: Picture1,
            icon: newPicture5,
            // color: COLORS.purple,
            // backgroundColor: COLORS.lightpurple,
            description: "Create Case",
            path : "Create Case"
        },
        {
            id: 2,
            // icon: Picture2,
            icon : newPicture10,
            // color: COLORS.yellow,
            // backgroundColor: COLORS.lightyellow,
            description: "Sankalp",
            path : "Sankalp"
        },
        {
            id: 3,
            // icon: Picture3,
            icon : newPicture11,
            // color: COLORS.primary,
            // backgroundColor: COLORS.lightGreen,
            description: "Vibration Points",
            path : "VibrationPoints"
        },
        {
            id: 4,
            // icon: Picture4,
            icon : newPicture9,
            // color: COLORS.red,
            // backgroundColor: COLORS.lightRed,
            description: "Practice",
            path : "Practice"
        },
        
    ]

    const specialPromoData = [
        {
            id: 1,
            // img: Picture5,
            img: newPicture1,

            title: "Learn Spandan",
            // description: "Understand your Oscillations!",
            path : "Learn"
        },
        {
            id: 2,
            // img: Picture6,
            img: newPicture7,

            title: "Practice Spandan",
            // description: "Check your capabilities under practice mode",
            path : "Practice"
            // path : "LearnScreen"
        },
        {
            id: 3,
            // img: Picture11,
            img: newPicture5,

            title: "Case Management ",
            // description: "Check for references.",
            path : ""
            
            },
        {
            id: 4,
            // img: Picture8,
            img: newPicture6,

            title: "Reference Material",
            // description: "Add your infomation and check for your overall profile",
            path : ""
        },
       
        {
            id: 6,
            // img:Picture9,
            img: newPicture3,

            title: "Discussion Forum",
            // description: "Please look for any queries",
            path : ""
        },

        {
            id: 7,
            // img:Picture10,
            img: newPicture4,

            title: "My Dairy",
            // description: "Please look for any queries",
            path : ""
        },
    ]

    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)


    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 , flexDirection:'column'}}>
                    {/* <Text style={{ ...FONTS.body2 , color:COLORS.black }}>Hi!</Text> */}
                    <Text style={{ ...FONTS.body2, color: COLORS.pink }}> Hari Om! {user?.name} </Text>
                </View>
                {/* {SliderComponent()} */}

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                    }}
                />
            </View>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 , color: COLORS.pink }}>Easy Access</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding+10 , width: 60, alignItems: 'center' , marginTop: 10}}
                // onPress={() => Navigation.navigate(item.path)}
            >
                <View
                    style={{
                        height: 70,
                        width: 70,
                        marginBottom: 15,
                        borderRadius: 20,
                        gap: 4,
                        display:'flex',
                        flexDirection:'column',
                        // backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        // justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius : 10
                            // tintColor: item.color
                        }}
                    />
                <Text style={{ textAlign: 'center', flexWrap: 'nowrap', ...FONTS.body5 , color: COLORS.primary1 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function renderPromos() {
        
        const HeaderComponent = () => (
            <View>
                {<CommonHeader title={"Home"} icon={menu} style={{width:'100%'}}/>}

                {renderHeader()}
                {SliderComponent()}
                {/* {renderBanner()} */}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        )
        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h3 , color : COLORS.pink }}>Offerings</Text>
                </View>
                {/* <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity> */}
            </View>
    
        )


        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 3
                }}
                onPress={() => Navigation.navigate(item.path)}
            >
                <View
                    style={{
                        // marginTop: 30,
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        width: 100,
                        height: 110,
                        marginRight: 10,
                        marginLeft: 0,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        // backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        
                        style={{
                            width: 60,
                            height: 60,
                            // marginBottom: 15,
                        borderRadius: 10,
                            
                            // borderTopLeftRadius: 10,
                            // borderTopRightRadius: 10,
                        }}
                        
                    />
                        <Text style={{ fontSize: 11.5 , color : COLORS.primary1 , paddingTop:5, marginLeft: 15, marginRight: 15 ,textAlign:'center'}}>{item.title}</Text>
                </View>

                {/* <View
                    style={{
                        padding: SIZES.padding,
                        // backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.body6 , color:'black' }}>{item.description}</Text>
                </View> */}
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding  }}
                numColumns={3}
                // columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>
                    </View>
                }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white ,}}
            
        >
            
            {/* {HeaderComponent()} */}
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;