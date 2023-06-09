import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useRoute , useNavigation } from '@react-navigation/native';
import { COLORS, SIZES , FONTS} from '../constants';
import Lottie from 'lottie-react-native';
import QuizAnime from '../assets/icons/quiz.json'

const PracticeTest = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const questions = route.params?.questions;
    const title = route.params?.title;

    const renderTitle = () => {
      return (
        <>
          <View
            style={{
              width: SIZES.width - 30,
              margin: SIZES.padding,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
              justifyContent: 'center',
              display: 'flex',
              height: SIZES.height * 0.09,
              display:'flex',
              alignContent:'center',
              justifyContent:"center"
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.h3,
                paddingLeft : SIZES.padding+20,
                paddingRight: SIZES.padding+20,
                // paddingLeft: SIZES.padding +40,
                alignContent:'center',
                justifyContent:'center'
              }}>
              Practice Test for {title}
            </Text>
          </View>
        </>
      );
    };

    function renderStartButton() {
      return (
          <View style={{ margin: SIZES.padding * 10 , paddingTop: '20%' }}>
              <TouchableOpacity
                  style={{
                      height: 60,
                      backgroundColor: COLORS.primary,
                      borderRadius: SIZES.radius / 1.5,
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}
                  onPress={() => navigation.navigate("QuizScreen" , {questions : questions})}
              >
                  <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start</Text>
              </TouchableOpacity>
          </View>
      )
  }

    
  return (
    <View style={{backgroundColor : COLORS.lightGray , paddingTop: SIZES.padding * 3 , borderRadius : 20 , height : SIZES.height}}>
      {renderTitle()}
      <View style={{flex: 1 ,alignItems:'center', justifyContent:'center' , paddingTop: '55%' }}>
        <Lottie source={require("../assets/icons/quiz.json")} style={{width: '100%' , aspectRatio: 1}} autoPlay loop/>
      </View>
      {renderStartButton()}

    </View>
  )
}

export default PracticeTest