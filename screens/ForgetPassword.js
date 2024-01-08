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

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import {forgetPassword} from '../redux/action'

const ForgetPassword = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false)
    const { message, error } = useSelector(state => state.message)

    const [areas, setAreas] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email , password)



    // const { error } = useSelector(state => state.auth)

    const dispatch = useDispatch();


    const forgetHandler = async () => {
       await dispatch(forgetPassword(email));
       navigation.navigate("ResetPassword")
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
                    onPress={forgetHandler}
                    disabled={!email}
                    // onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Submit</Text>
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
                    onPress={()=> navigation.navigate("Verify")}
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
                    {/* {ForgetPasswordComp()} */}
                </ScrollView>
            </LinearGradient>
            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
    )
}

export default ForgetPassword;