import {     View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform} from 'react-native'
import React , {useState , useEffect} from 'react'
import { SIZES ,COLORS , FONTS , icons} from '../constants';
import { useDispatch , useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { logout } from '../redux/action';
import { verify } from '../redux/action';
import Icon from 'react-native-vector-icons/AntDesign';




import {OtpInput} from 'react-native-otp-entry'




const More = ({navigation , route}) => {
  const { user, loading } = useSelector(state => state.auth);
  const [showPassword, setShowPassword] = React.useState(false);
  const [profileDetails , setProfileDetails] = useState('profile')
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [mob, setmob] = useState(user?.mob);

  const [otp, setOtp] = useState();
  console.log(user)

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout())
}

const verifyHandler = async () => {
    await dispatch(verify(otp));
    dispatch(loadUser())
}

const TabModifier = () => {
    return (
        <>
            <View style={{display:'flex', flexDirection:'row' , alignItems:'center', paddingTop: SIZES.padding * 2}}>
                <Button style={{width:140 , textColor:'white', height:40, backgroundColor: COLORS.primary1 ,marginLeft:SIZES.padding * 4, borderRadius:6, color:COLORS.white, textAlign:'center' , fontSize :SIZES.body2 , alignContent:'center'}} onPress={()=> setProfileDetails('profile')} >Profile</Button>
                <Button style={{width:140 , textColor:'white', height:40, backgroundColor: COLORS.primary1 , marginLeft:SIZES.padding * 4 ,color:COLORS.white , borderRadius:6, textAlign:'center' , fontSize :SIZES.body2 , alignContent:'center'}}  onPress={()=> setProfileDetails('verifications')}>Verifications</Button>


            </View>
        </>
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
              <Text style={{ color: COLORS.primary1, ...FONTS.body3 }}>Full Name</Text>
              <TextInput
                  style={{
                      marginVertical: SIZES.padding,
                      borderBottomColor: COLORS.primary2,
                      borderBottomWidth: 1,
                      height: 40,
                      color: COLORS.primary2,
                      ...FONTS.body3
                  }}
                  
                  value={name}
                  placeholder="Enter Full Name"
                  placeholderTextColor={COLORS.white}
                  selectionColor={COLORS.white}
              />
          </View>

          {/* Phone Number */}
          <View style={{ marginTop: SIZES.padding * 2 }}>
              <Text style={{ color: COLORS.primary1, ...FONTS.body3 }}>Phone Number</Text>

              <View style={{ flexDirection: 'row' }}>
               

                  {/* Phone Number */}
                  <TextInput
                      style={{
                          flex: 1,
                          marginVertical: SIZES.padding,
                          borderBottomColor: COLORS.primary2,
                          borderBottomWidth: 1,
                          height: 40,
                          color: COLORS.primary2,
                          ...FONTS.body3
                      }}
                      value={user?.mob.toString()}
                      // placeholder="Enter Phone Number"
                      placeholderTextColor={COLORS.white}
                      selectionColor={COLORS.primary2}
                  />
              </View>
          </View>

          {/* // Email */}
          <View style={{ marginTop: SIZES.padding * 2 }}>
              <Text style={{ color: COLORS.primary1, ...FONTS.body3 }}>Email</Text>
              <TextInput
                  style={{
                      marginVertical: SIZES.padding,
                      borderBottomColor: COLORS.primary2,
                      borderBottomWidth: 1,
                      height: 40,
                      color: COLORS.primary2,
                      ...FONTS.body3
                  }}
                  value={email}
                  selectionColor={COLORS.white}
              />
          </View>

          <View style={{ marginTop: SIZES.padding * 2 }}>
              <Text style={{ color: COLORS.primary1, ...FONTS.body3 }}>Occupation</Text>
              <TextInput
                  style={{
                      marginVertical: SIZES.padding,
                      borderBottomColor: COLORS.primary2,
                      borderBottomWidth: 1,
                      height: 40,
                      color: COLORS.primary2,
                      ...FONTS.body3
                  }}
                  value={user?.occupation}
                  selectionColor={COLORS.white}
              />
          </View>

          <View style={{ marginTop: SIZES.padding  , display:'flex' , flexDirection:'row'}}>
              <Text style={{ color: COLORS.primary1, ...FONTS.body3 }}>Verified :</Text>
              <Text style={{ color: COLORS.primary1, ...FONTS.body3}}>{user?.verified == true ? 'true': 'false'}</Text>
          </View>
            

          

          {/* Password */}
          
      </View>
  )
}

function renderVerificationOptions(){
    return (
        <>
        { user?.verified == true ? 
            (
                <View style={{ padding: SIZES.padding * 4 , paddingLeft :SIZES.padding * 10}}>
                    <Text style={{ color: COLORS.primary1, ...FONTS.body1 ,paddingBottom: SIZES.padding *2 }}>Already Verified</Text>

                </View>
            ) : (

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
            )
    }
        

    
            
            </>
            )
}

  return (
    <ScrollView>
        <View style={{width : SIZES.width , flex: 1 }} >
        {/* {user != null && 
        (
            <> */}

            {TabModifier()}
            {profileDetails == "profile" && (
                renderForm()

            )  }
            {profileDetails == "verifications" && (
                renderVerificationOptions()

            )  }
            
           
          <View style={{flex : 1 , padding:SIZES.padding2 * 2 , marginLeft : SIZES.padding * 12}}>
            <Button style={{width:120 , textColor:'white', height:40, backgroundColor: COLORS.primary1 }} onPress={logoutHandler}>Logout</Button>

          </View>
        </View>

    </ScrollView>

  )
}



export default More