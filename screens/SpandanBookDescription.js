import { View, Text ,  TouchableOpacity,Image ,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES , icons , FONTS } from '../constants'
import { useNavigation , useRoute } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";

const SpandanBookDescription = () => {
    const navigation = useNavigation();
    const [imgno , setimgno] = useState(0)
    const [imgs , setImgs] = useState({images : [icons.VibrationBook1, icons.VibrationBook2 , icons.VibrationBook3 , icons.VibrationBook4 , icons.VibrationBook5]}) 
    const slides = [
        {
          key: 1,
          title: 'Title 1',
        //   text: 'Description.\nSay something cool',
        image: icons.VibrationBook1,

          backgroundColor: '#59b2ab',
        },
        {
          key: 2,
          title: 'Title 2',
        //   text: 'Other cool stuff',
        image: icons.VibrationBook2,
          backgroundColor: '#febe29',
        },
        {
          key: 3,
          title: 'Rocket guy',
        //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
          image: icons.VibrationBook3,
          backgroundColor: '#22bcb5',
        },
        {
            key: 4,
            title: 'Rocket guy',
          //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            image: icons.VibrationBook4,
            backgroundColor: '#22bcb5',
          } , {
            key: 5,
            title: 'Rocket guy',
          //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            image: icons.VibrationBook5,
            backgroundColor: '#22bcb5',
          }
      ];
    const route = useRoute();
    
      function renderTopComponent(){
          return (
              <>
                <TouchableOpacity
                  style={{
                      flexDirection: 'row',
                      alignItems: "center",
                      marginTop: SIZES.padding * 2,
                      paddingHorizontal: SIZES.padding * 2
                  }}
                  onPress={() => navigation.goBack()}
              >
                  <Image
                      source={icons.back}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.black
                      }}
                  />
  
                  {/* <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>Sign Up</Text> */}
              </TouchableOpacity>
                  {/* <View style={{ width : SIZES.width -20, margin: SIZES.padding , padding: SIZES.padding , backgroundColor : COLORS.lightpurple , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.07 }}>
                      <Text style={{color : COLORS.black , fontSize : SIZES.body2, paddingLeft: SIZES.padding *12 }}>
                       Our Sankalp
                      </Text>
                  </View> */}
              </>
          )
      }
      function renderMiddleComponent(){
        return (
          <>
            <View style={{width : SIZES.width -20 , height : SIZES.height * 0.1, margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20 , paddingTop : SIZES.padding2 *2}}>
              {/* <View style={{width : SIZES.width  , height : SIZES.height * 0.05   , borderRadius : 200 , backgroundColor : COLORS.lightpurple , display:'flex', flexDirection:'column' , position:'absolute', top:0}}> */}
                <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2, color: COLORS.pink}}>{route?.params?.title}</Text>
                <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body3 ,}}>{route?.params?.desc}</Text>
              {/* </View> */}
  
            </View>
          </>
        )
      }
      function renderBottomContainer(){
      
        return (
            <View style={{paddingVertical: 40}}>
                <SliderBox
                sliderBoxHeight={450}
                images={imgs.images}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                currentImageEmitter={index => setimgno(index)}
                autoplay
                circleLoop
                autoplayInterval={2000}
                />
                <Text style={{...FONTS.h3 , color: COLORS.pink , paddingLeft: '40%' , paddingVertical:  15}}>Page No {imgno}</Text>
            </View>
        )
  }

  return (
    <View>
       <View style={{backgroundColor : COLORS.lightGray , paddingTop: SIZES.padding * 3 , borderRadius : 20 , height : SIZES.height}}>
        {renderTopComponent()}
        {renderMiddleComponent()}
        {renderBottomContainer()}
        
      </View>
    </View>
  )
}

export default SpandanBookDescription

const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    //[...]
  });