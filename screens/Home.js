import React , {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useNavigation } from "@react-navigation/native";
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
import Picture9 from '../assets/HomeScreenIcons/Pic9.png'






const Home = () => {
    const Navigation = useNavigation();
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
            icon: Picture1,
            // color: COLORS.purple,
            // backgroundColor: COLORS.lightpurple,
            description: "Create Case",
            path : "Create Case"
        },
        {
            id: 2,
            icon: Picture2,
            // color: COLORS.yellow,
            // backgroundColor: COLORS.lightyellow,
            description: "Sankalp",
            path : "Sankalp"
        },
        {
            id: 3,
            icon: Picture3,
            // color: COLORS.primary,
            // backgroundColor: COLORS.lightGreen,
            description: "Vibration Points",
            path : "VibrationPoints"
        },
        {
            id: 4,
            icon: Picture4,
            // color: COLORS.red,
            // backgroundColor: COLORS.lightRed,
            description: "Practice",
            path : "Practice"
        },
        
    ]

    const specialPromoData = [
        {
            id: 1,
            img: Picture5,
            title: "Learn Spandan",
            // description: "Understand your Oscillations!",
            path : ""
        },
        {
            id: 2,
            img: Picture6,
            title: "Practice Spandan",
            // description: "Check your capabilities under practice mode",
            path : ""
            // path : "LearnScreen"
        },
        {
            id: 3,
            img: Picture1,
            title: "Reference Material ",
            // description: "Check for references.",
            path : ""
            
            },
        {
            id: 4,
            img: Picture8,
            title: "Discussion Forum",
            // description: "Add your infomation and check for your overall profile",
            path : ""
        },
       
        {
            id: 6,
            img:Picture9,
            title: "My Diary",
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
                    <Text style={{ ...FONTS.body2, color: COLORS.pink }}> Hari Om! Abhijit</Text>
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
                        height: 50,
                        width: 90,
                        marginBottom: 15,
                        borderRadius: 20,
                        // backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="cover"
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius : 10
                            // tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'nowrap', ...FONTS.body5 , color: COLORS.primary1 }}>{item.description}</Text>
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
                    width: SIZES.width / 2.8
                }}
                // onPress={() => Navigation.navigate(item.path)}
            >
                <View
                    style={{
                        // marginTop: 30,
                        width: 120,
                        height: 150,
                        marginRight: 20,
                        marginLeft: 0,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        // backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={item.img}
                        
                        style={{
                            width: 110,
                            height: 120,
                            objectFit: 'contain',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderRadius : 10
                        }}
                        
                    />
                        <Text style={{ ...FONTS.body3 , color : COLORS.primary1 , marginLeft: 20, marginRight: 20}}>{item.title}</Text>
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        // backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.body5 , color:'black' }}>{item.description}</Text>
                </View>
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