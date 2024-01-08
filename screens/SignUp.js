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
import { register } from "../redux/action";

import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const SignUp = ({ navigation }) => {

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

    
    useEffect(() => {
        if (error) {
            alert(error)
            dispatch({ type: "clearError" })
        }

    }, [error, dispatch, alert,])

    const registerHandler = () => {
        // const myForm = new FormData();
        // myForm.append("name", name);
        // myForm.append("email", email);
        // myForm.append("mob", mob);
        // myForm.append("password", password);
        // myForm.append("occupation", occupation);
        // myForm.append("date", date);

        navigation.navigate("Verify");
        // console.log('pressed')
        dispatch(register(name, email , mob , password, occupation ,date));
    }


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
                onPress={() => navigation.navigate("SignIn")}
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

                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign In</Text>
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
                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Full Name"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Phone Number */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text>

                    <View style={{ flexDirection: 'row' }}>
                   

                        {/* Phone Number */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            value={mob}
                            onChangeText={setMob}
                            placeholder="Enter Phone Number"
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

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

                  {/* Occupation*/}
                  <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Occupation</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Occupation"
                        value={occupation}
                        onChangeText={setOccupation}
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                    />
                </View>
                

                {/* //dateofbirth// */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                {/* <TextInput style={{ color: COLORS.lightGreen, ...FONTS.body3 }} value={date} onChangeText={setDate}/> */}
             
                    
                <DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                    
                    />
                </View>



             


            </View>
        )
    }

    function renderDatePicker(){
        return (
            <>
              <>
                <Button onPress={() => setOpen(true)}>Select your BirthDate</Button>
            </>
            </>
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding  }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={registerHandler}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // function renderAreaCodesModal() {

    //     const renderItem = ({ item }) => {
    //         return (
    //             <TouchableOpacity
    //                 style={{ padding: SIZES.padding, flexDirection: 'row' }}
    //                 onPress={() => {
    //                     setSelectedArea(item)
    //                     setModalVisible(false)
    //                 }}
    //             >
    //                 <Image
    //                     source={{ uri: item.flag }}
    //                     style={{
    //                         width: 30,
    //                         height: 30,
    //                         marginRight: 10
    //                     }}
    //                 />
    //                 <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
    //             </TouchableOpacity>
    //         )
    //     }

    //     return (
    //         <Modal
    //             animationType="slide"
    //             transparent={true}
    //             visible={modalVisible}
    //         >
    //             <TouchableWithoutFeedback
    //                 onPress={() => setModalVisible(false)}
    //             >
    //                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //                     <View
    //                         style={{
    //                             height: 400,
    //                             width: SIZES.width * 0.8,
    //                             backgroundColor: COLORS.lightGreen,
    //                             borderRadius: SIZES.radius
    //                         }}
    //                     >
    //                         <FlatList
    //                             data={areas}
    //                             renderItem={renderItem}
    //                             keyExtractor={(item) => item.code}
    //                             showsVerticalScrollIndicator={false}
    //                             style={{
    //                                 padding: SIZES.padding * 2,
    //                                 marginBottom: SIZES.padding * 2
    //                             }}
    //                         />
    //                     </View>
    //                 </View>
    //             </TouchableWithoutFeedback>
    //         </Modal>
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
                    {renderDatePicker()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
            {/* {renderAreaCodesModal()} */}
        </KeyboardAvoidingView>
    )
}

export default SignUp;

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