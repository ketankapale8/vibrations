import React , {useState , useEffect}from "react";
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
    Platform, 
    StyleSheet
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from "react-native-date-picker";
import { Button } from "react-native-paper";
import { useDispatch , useSelector} from "react-redux";
import { forgetPassword, register } from "../redux/action";
import { loadUser } from '../redux/action';

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import {OtpInput} from 'react-native-otp-entry';
import { verify } from '../redux/action';

const VerifyScreen = ({ navigation }) => {
  const { user, loading } = useSelector(state => state.auth);
    const [showPassword, setShowPassword] = React.useState(false)
    const [name , setName] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const [occupation , setOccupation] = React.useState("")
    const [mob , setMob] = React.useState("")
    // const [areas, setAreas] = React.useState([])
    // const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false);

    const [date, setDate] = useState(new Date())
    console.log(date)
    const [open, setOpen] = useState(false)

    const { error } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const [otp, setOtp] = useState();


    const verifyHandler = async () => {
      await dispatch(verify(otp));
      navigation.navigate("SignIn")
      dispatch(loadUser())
  }

    
    // useEffect(() => {
    //     if (error) {
    //         alert(error)
    //         dispatch({ type: "clearError" })
    //     }

    // }, [error, dispatch, alert,])

    // const registerHandler = () => {
    //     // const myForm = new FormData();
    //     // myForm.append("name", name);
    //     // myForm.append("email", email);
    //     // myForm.append("mob", mob);
    //     // myForm.append("password", password);
    //     // myForm.append("occupation", occupation);
    //     // myForm.append("date", date);

    //     console.log('pushed for register')
    //     dispatch(register(name, email , mob , password, occupation ,date));
    //     navigation.navigate("ForgetPassword")
    // }


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

                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Back</Text>
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
            // <View
            //     style={{
            //         marginTop: SIZES.padding * 3,
            //         marginHorizontal: SIZES.padding * 3,
            //     }}
            // >

<View style={{ padding: SIZES.padding * 4 }}>
                <Text style={{ color: COLORS.primary1, ...FONTS.body3 ,paddingBottom: SIZES.padding *2 }}>Verify your details</Text>
        
        <OtpInput
        numberOfDigits={6}
        onTextChange={(text) => setOtp(text)}
        theme={{
        pinCodeTextStyle : {color:COLORS.primary1}
        }}
        />
        <Button style={{width:120 , textColor:'white', height:40, backgroundColor: COLORS.primary1, marginTop: SIZES.padding * 2 }} onPress={verifyHandler}>Verify</Button>
        
        </View>

              
                
             



             


            // </View>
        )
    }

    // function renderDatePicker(){
    //     return (
    //         <>
    //           <>
    //             <Button onPress={() => setOpen(true)}>Select your BirthDate</Button>
    //         </>
    //         </>
    //     )
    // }

    // function renderButton() {
    //     return (
    //         <View style={{ margin: SIZES.padding  }}>
    //             <TouchableOpacity
    //                 style={{
    //                     height: 60,
    //                     backgroundColor: COLORS.black,
    //                     borderRadius: SIZES.radius / 1.5,
    //                     alignItems: 'center',
    //                     justifyContent: 'center'
    //                 }}
    //                 onPress={verifyHandler}
    //             >
    //                 <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Submit</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }



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
                    {/* {renderDatePicker()} */}
                    {/* {renderButton()} */}
                </ScrollView>
            </LinearGradient>
            {/* {renderAreaCodesModal()} */}
        </KeyboardAvoidingView>
    )
}

export default VerifyScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
  });