import React from "react";
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

const Home = () => {
    const Navigation = useNavigation();

    const featuresData = [
        {
            id: 1,
            icon: icons.sankalp,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Sankalp",
            path : "Sankalp"
        },
        {
            id: 2,
            icon: icons.book,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Book",
            path : "Book"
        },
        {
            id: 3,
            icon: icons.documents,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Documents",
            path : "Documents"
        },
        {
            id: 4,
            icon: icons.vibrationpts,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Vibrations",
            path : "Vibrations"
        },
        
    ]

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Know Your Spandans",
            description: "Understand your Oscillations!",
            path : ""
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Learn Spandan",
            description: "Check your capabilities under practice mode",
            path : ""
            // path : "LearnScreen"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Reference Documents",
            description: "Check for references.",
            path : ""
            
            },
        {
            id: 4,
            img: images.promoBanner,
            title: "Case Summary",
            description: "Add your infomation and check for your overall profile",
            path : ""
        },
        {
            id: 5,
            img: images.promoBanner,
            title: "Discussion Forums",
            description: "Look what others have to offer",
            path : ""
        },
        {
            id: 5,
            img: images.promoBanner,
            title: "Support",
            description: "Please look for any queries",
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
                    <Text style={{ ...FONTS.body2, color: COLORS.black }}> Hi! Abhijit</Text>
                </View>

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
                <Text style={{ ...FONTS.h3 }}>Features</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => Navigation.navigate(item.path)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body5 , color:'black' }}>{item.description}</Text>
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
                    <Text style={{ ...FONTS.h3 }}>Offerings</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>

        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 2.5
                }}
                onPress={() => Navigation.navigate(item.path)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Text style={{ ...FONTS.h5 , color : COLORS.white , padding:SIZES.padding *2  }}>{item.title}</Text>
                    {/* <Image
                        source={images.promoBanner}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                        
                    /> */}
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.body4 , color:'black' }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;