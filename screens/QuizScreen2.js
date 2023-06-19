import { StyleSheet, Text, View , Pressable , Image , SafeAreaView} from 'react-native';

import React, { useState, useEffect } from "react";
import questions from "../constants/DummyQuestions.js";
import {useRoute, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign.js"
import { COLORS, SIZES , FONTS , icons} from '../constants';
// import { AntDesign } from "react-native-vector-icons";
const QuizScreen2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
//   const tag = route?.params.questions
  const data = questions
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  const [background , setBackground] = useState(COLORS.darkgray)

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  
  
  // console.log(selectedAnswerIndex)
  
  const [correctAns , setCorrectAns] = useState(null)
  const [ansText , setAnsText] = useState("")

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
        // setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        // setAnswerStatus(false); 
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
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(answerStatus)

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
        <Text style={{color:COLORS.black}}>Your Progress</Text>
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
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                // console.warn('pressed')
              
                {selectedAnswerIndex === null && setSelectedAnswerIndex(index) 
                correctAns === null & setCorrectAns(currentQuestion?.correctAnswerIndex)
              }
              }
              
              style={
                selectedAnswerIndex === index &&
                  index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: background,
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
                      backgroundColor: background,
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

              <Text style={{ marginLeft: 10 , color:COLORS.black}}>{item.answer}</Text>
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
            {/* {(!!answerStatus && background == 'green') ? "Correct Answer" : "Wrong Answer"} */}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
            //   navigation.goBack()
              navigation.navigate("Results", {
                points: points,
                answers: answers,
              })
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
            <Text style={{ color: "white" }}>{index + 1 >= questions.length ? "Done": "Next Question"}</Text>
          </Pressable>
        )} 
      </View>
    )
  }
  

  const renderSubmitBtn = () =>{
    return (
      <Pressable style={{
        backgroundColor: "green",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 6,
      }} 
       onPress={()=> 
        {selectedAnswerIndex !== correctAns ? (setBackground('yellow') && setAnsText("")) : selectedAnswerIndex == correctAns ? (setBackground('yellow') && setAnsText("") ): null
        index + 1 >= questions.length ? setAnswerStatus(false) : 
        setAnswerStatus(true)
       }
       
      
      // setAnswerStatus(true);
      //  setAnswerStatus(true);
      }
      
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </Pressable>
    )
  }

  const renderResetBtn = () =>{
    return (
      <Pressable style={{
        backgroundColor: "green",
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 6,
      }} 

      onPress={()=>{
        setAnswerStatus(!answerStatus);
        setSelectedAnswerIndex(null)
      }}
      //  onPress={()=> 
      //   {selectedAnswerIndex !== correctAns ? (setBackground('red') && setAnsText("Incorrect")) : selectedAnswerIndex == correctAns ? (setBackground('green') && setAnsText("Correct") ): null
      //   index + 1 >= questions.length ? setAnswerStatus(false) : 
      //   setAnswerStatus(true)
      //  }
       
      
      // // setAnswerStatus(true);
      // //  setAnswerStatus(true);
      // }
      
      >
        <Text style={{ color: "white" }}>Reset</Text>
      </Pressable>
    )

  }
   
  return (
    <SafeAreaView>
        {renderTitle()}
        {renderDesc()}
        {renderProgressBar()}
        {renderMiddleScreen()}
        <View style={{display:'flex', flexDirection:'row', padding:SIZES.padding}}>
         {renderSubmitBtn()}
         {renderResetBtn()}
        </View>
        {renderBttomScreen()}

    </SafeAreaView>

     
  );
};

export default QuizScreen2;

// const styles = StyleSheet.create({});