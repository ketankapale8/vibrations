import React , {useState , useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch , useSelector } from "react-redux";
import { login } from "../redux/action.js";

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const SignIn = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false)

    const [areas, setAreas] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email , password)

    // React.useEffect(() => {
    //     fetch("https://restcountries.eu/rest/v2/all")
    //         .then(response => response.json())
    //         .then(data => {
    //             let areaData = data.map(item => {
    //                 return {
    //                     code: item.alpha2Code,
    //                     name: item.name,
    //                     callingCode: `+${item.callingCodes[0]}`,
    //                     flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
    //                 }
    //             })

    //             setAreas(areaData)

    //             if (areaData.length > 0) {
    //                 let defaultData = areaData.filter(a => a.code == "US")

    //                 if (defaultData.length > 0) {
    //                     setSelectedArea(defaultData[0])
    //                 }
    //             }
    //         })
    // }, [])

    const { error } = useSelector(state => state.auth)

    const dispatch = useDispatch();


    const loginHandler = () => {
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (error) {
            alert(error)
            dispatch({ type: "clearError" })
        }

    }, [error, dispatch, alert,])





    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 2,
                    paddingHorizontal: SIZES.padding * 2
                }}
                onPress={() => navigation.navigate("SignUp")}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />

                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* <Image
                    source={images.wallieLogo}
                    resizeMode="contain"
                    style={{
                        width: "60%"
                    }}
                /> */}

                <Text style={{
                    fontSize : SIZES.h1 * 2,
                    fontWeight : 'bold',
                    color : COLORS.white
                }}>Spandan</Text>
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3,
                }}
            >
                {/* Full Name */}
                

                {/* Phone Number */}
              

                {/* // Email */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Email</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter your Email"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                

                {/* Password */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={loginHandler}
                    disabled={!email || !password}
                    // onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function ForgetPasswordComp() {
        return (
            <View style={{ margin: SIZES.padding * 3 , display:'flex', flexDirection:'column' ,alignItems:'center', gap:10 }}>
                <View>
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Don't Remember your password? </Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 60,
                        width: 190,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.radius / 2.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={()=> navigation.navigate("ForgetPassword")}
                    // disabled={!email || !password}
                    // onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Click Here</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderAreaCodesModal() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.lightGreen,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{ flex: 1 }}
            >
                <ScrollView style={{backgroundColor : COLORS.primary2}}>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                    {ForgetPasswordComp()}
                </ScrollView>
            </LinearGradient>
            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
    )
}

export default SignIn;