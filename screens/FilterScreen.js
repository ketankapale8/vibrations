import { View, Text, TouchableOpacity , SafeAreaView , StyleSheet, Image} from 'react-native'
import React , {useState} from 'react';

import questions from '../constants/DummyQuestions.js'
import { useRoute , useNavigation } from '@react-navigation/native';
import { COLORS, SIZES , FONTS, icons} from '../constants';
import Lottie from 'lottie-react-native';
import QuizAnime from '../assets/icons/quiz.json';
import { initialFilter } from './FilterOptionScreens/InitialFilter.js';
import AppBar from './FilterOptionScreens/AppBar.js';
import InfoCard from './FilterOptionScreens/InfoCard.js';
import CustomModal from './FilterOptionScreens/Modal.js';
import QuestionsWrapper from './FilterOptionScreens/QuestionsWrapper.js';

const FilterScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    // const questions = route.params?.questions;

    const [initialQuestions, setInitialQuestions] = useState(questions);
    const [filter, setFilter] = useState(initialFilter);
    const [intermediateFilter, setIntermediateFilter] = useState(initialFilter)
     const [modalVisible, setModalVisible] = useState(false);

    const allQuestions = Object.values(initialQuestions);

  const quefilterResult = allQuestions.map(item => item.questionTag)
  .filter((value, index, self) => self.indexOf(value) === index)
  
  console.log(quefilterResult)


    const title = route.params?.title;

    const renderTitle = () => {
      return (
        <>
          <View
            style={{
              width: SIZES.width - 30,
              margin: SIZES.padding,
              padding: SIZES.padding,
              backgroundColor : COLORS.lightpurple,
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
                color: COLORS.black,
                fontSize: SIZES.h1,
                paddingLeft : SIZES.padding+70,
                paddingRight: SIZES.padding+70,
                // paddingLeft: SIZES.padding +40,
                alignContent:'center',
                justifyContent:'center'
              }}>
              Practice Test 
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
          
        </>
    )
}



    
  return (
    // <View style={{backgroundColor : COLORS.lightGray , paddingTop: SIZES.padding * 3 , borderRadius : 20 , height : SIZES.height}}>
    //   {renderTitle()}
    //   <View style={{flex: 1 ,alignItems:'center', justifyContent:'center' , paddingTop: '55%' }}>
    //     <Lottie source={require("../assets/icons/quiz.json")} style={{width: '100%' , aspectRatio: 1}} autoPlay loop/>
    //   </View>
    //   {renderStartButton()}

    // </View>

    <SafeAreaView style={{backgroundColor: 'rgba(255, 159, 69, 0.5)', flex: 1, flexDirection:'column', justifyContent: 'flex-start'}}>

    <View style={styles.container}>
      {renderTopComponent()}
      {renderTitle()}
    <AppBar setModalVisible={setModalVisible} modalVisible={modalVisible}/>
    <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} filter={filter} setFilter={setFilter} intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter} quefilterResult={quefilterResult} allQuestions={allQuestions}/>
    <QuestionsWrapper allQuestions={allQuestions} filter={filter} />
    </View>
    </SafeAreaView>
  )
}

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});