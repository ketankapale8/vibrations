import { StyleSheet, Text, View , Pressable , Image} from 'react-native';

import React, { useState, useEffect } from "react";
import questions from "../constants/DummyQuestions.js";
import { useNavigation , useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign.js"
import { COLORS, SIZES , FONTS , icons} from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { AntDesign } from "react-native-vector-icons";
const QuizScreen1 = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const data = route?.params?.questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  const [correctAnsCount , setcorrectAnsCount] = useState(0)

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  console.log(selectedAnswerIndex)

  // Counter
  const [counter, setCounter] = useState(5);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setcorrectAnsCount(correctAnsCount + 1)
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);


  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  // useEffect(() => {
  //   const myInterval = () => {
  //     if (counter >= 1) {
  //       setCounter((state) => state - 1);
  //     }
  //     if (counter === 0) {
  //       setIndex(index + 1);
  //       setCounter(5);
  //     }
  //   };

  //   interval = setTimeout(myInterval, 1000);

  //   // clean up
  //   return () => {
  //     clearTimeout(interval);
  //   };
  // }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.goBack()
      // navigation.navigate("Results", {
      //   answers: answers,
      //   points: points,
      //   correctAnsCount : correctAnsCount
      // });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(10);
    }
  }, [index]);

  const currentQuestion = data[index];

  const renderTitle = () =>{
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{color : COLORS.black}}>Quiz Challenge</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: COLORS.black, textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

    )
  }

  const renderDesc = () =>{
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={{color : COLORS.black}}>Your Progress</Text>
        <Text style={{color:COLORS.black}}>
          ({index}/{totalQuestions}) questions answered
        </Text>
      </View>

    )
  }

  const renderProgressBar = () =>{
    return (

        <View
            style={{
              backgroundColor: "white",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              height: 10,
              borderRadius: 20,
              justifyContent: "center",
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                backgroundColor: "#FFC0CB",
                borderRadius: 12,
                position: "absolute",
                left: 0,
                height: 10,
                right: 0,
                width: `${progressPercentage}%`,
                marginTop: 20,
                color:COLORS.black
              }}
            />
      </View>
    )
  }

  const renderMiddleScreen = () =>{
    return (
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" , color:COLORS.black}}>
          {currentQuestion?.question}
        </Text>
        <View>
          <Image style={{width : SIZES.width -30 , height : 250 , objectFit:'cover' , borderRadius: 20 , padding:SIZES.padding , marginLeft: 10 , marginRight: 10}} source={currentQuestion?.QuestionImg}/>
        </View>
        <View style={{ marginTop: 12 , display: 'flex', flexDirection: 'row' , gap: 10}}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                // console.warn('pressed')
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
              
              style={
                selectedAnswerIndex === index &&
                  index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                      color: COLORS.black
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      color:COLORS.black,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
            index === currentQuestion.correctAnswerIndex ? (
              <AntDesign
              style={{
                borderColor: "#00FFFF",
                textAlign: "center",
                borderWidth: 0.5,
                width: 40,
                height: 40,
                borderRadius: 20,
                padding: 10,
                
              }}
              name="check"
              size={20}
              color="white"
            />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    color:COLORS.black,
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}

<View style={{display:'flex', flexDirection: 'row' , marginHorizontal: 5,}}>

<View style={{paddingLeft: 10 , display: 'flex' , flexDirection:'column' , alignItems:'center', width: 'auto', height:'auto', padding:4 , margin:3 }}>
                  {item?.imgOption && (<>
                    <Image source={item?.imgOption} style={{width: 55, height: 65 , objectFit:'contain' , borderRadius : 20 , paddingLeft: 20, flexDirection:'column'}}/>
                  
                  </>)}
                  <Text style={{ marginLeft: 0 , color:COLORS.primary , ...FONTS.body5}}>
                    {item?.answer}
                    
                    </Text>
            
</View>

</View>
            </Pressable>
          ))}
        </View>
      </View>

    )
  }
  const renderBttomScreen = () =>{
    return (

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: COLORS.white,
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" , color:COLORS.black }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.goBack()
              // navigation.navigate("Results", {
              //   points: points,
              //   answers: answers,
              // })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    )
  }
  
  return (
    <SafeAreaView style={{paddingBottom:20 , paddingTop:20}}>
        {renderTitle()}
        {renderDesc()}
        {renderProgressBar()}
        {renderMiddleScreen()}
        {renderBttomScreen()}
    </SafeAreaView>

     
  );
};

export default QuizScreen1;

// const styles = StyleSheet.create({});