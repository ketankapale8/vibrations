import { StyleSheet, Text, View , Pressable , Image , SafeAreaView} from 'react-native';
import React, { useState, useEffect } from "react";
import questions from "../constants/DummyQuestions.js";
import {useRoute, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign.js"
import { COLORS, SIZES , FONTS , icons} from '../constants';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { color } from '@rneui/base';
// import { AntDesign } from "react-native-vector-icons";
const QuizScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const tag = route?.params.questions;
  const filterQuestions = route?.params?.filterQuestions;
  const data = filterQuestions?.filter(item=>item?.questionTag == tag);
  const totalQuestions = data?.length;



  // points
  const [points, setPoints] = useState(0);

  const [background , setBackground] = useState(COLORS.primary1);
  const [colors , setColors ] = useState('black')

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

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.goBack()
      // navigation.navigate("Results", {
      //   answers: answers,
      //   points: points,
      // });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(currentQuestion)

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
        <Text style={{color : COLORS.black, ...FONTS.h2}}>Quiz Challenge</Text>
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

  const renderExtraDesc = () =>{
    return (
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,

      }}
      >
        {/* <Text style={{...FONTS.h5, color: COLORS.primary1}}>Example No : 99</Text> */}
        <Text style={{...FONTS.h5 , color: COLORS.primary1, paddingRight: 180}}>{currentQuestion?.questionTag}</Text>


      </View>
    )
  }

  const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const AnswerOption = ({items, index}) =>{
  return (
    <>
  <View style={{ marginTop: 16 
           }}>
            <View style={{display:'flex', flexDirection: 'row' , marginHorizontal: 5,}}>
                <Pressable
                  onPress={() =>
                    // console.warn('pressed')
                    {selectedAnswerIndex === null && setSelectedAnswerIndex(index) 
                    correctAns === null & setCorrectAns(currentQuestion?.correctAnswerIndex)
                  }
                  }
                  
                  style={
                    
                    selectedAnswerIndex === index &&
                      index === currentQuestion?.correctAnswerIndex
                      ? {
                          flexDirection: "row",
                          alignItems: "center",
                          borderWidth: 0.5,
                          borderColor: "black",
                          marginVertical: 10,
                          backgroundColor: background,
                          // color : colors,
                          borderRadius: 20,
                          color: COLORS.white
                        }
                      : selectedAnswerIndex != null && selectedAnswerIndex === index
                      ? {
                          flexDirection: "row",
                          alignItems: "center",
                          marginHorizontal: 15,
                          borderWidth: 0.5,
                          // color:colors,
                          borderColor: "black",
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
                index === currentQuestion?.correctAnswerIndex ? (
                  <AntDesign
                  style={{
                    color : COLORS.primary,
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 10,
                    height: 20,
                    borderRadius: 20,
                    padding: 10,
                    
                  }}
                  name="check"
                  size={0}
                  color="black"
                />
                  ) : selectedAnswerIndex != null &&
                    selectedAnswerIndex === index ? (
                    <AntDesign
                      style={{
                        borderColor: "black",
                        color : COLORS.primary,
                        textAlign: "center",
                        borderWidth: 0.5,
                        width: 10,
                        height: 10,
                        padding: 10,
                        borderRadius: 20,
                      }}
                      name="closecircle"
                      size={0}
                      color="black"
                    />
                  ) : (
                    <Text
                      style={{
                        borderColor: "#00FFFF",
                        textAlign: "center",
                        color : COLORS.primary,
                        borderWidth: 0.5,
                        width: 25,
                        height: 25,
                        borderRadius: 10,
                        paddingTop: 4,
                        ...FONTS.body4
                        
                      }}
                    >
                      {items.options}
                    </Text>
                  )}
                <View style={{paddingLeft: 10 , display: 'flex' , flexDirection:'column' , alignItems:'center', width: 'auto', height:'auto', padding:4 , margin:3 }}>
                  {items?.imgOption && (<>
                    <Image source={items?.imgOption} style={{width: 55, height: 65 , objectFit:'contain' , borderRadius : 20 , paddingLeft: 20, flexDirection:'column'}}/>
                  
                  </>)}
                  <Text style={{ marginLeft: 0 , color:COLORS.primary , ...FONTS.body5}}>
                    {items?.answer}
                    
                    </Text>
            
                </View>
                </Pressable>

            </View>
  
  
  </View>
    </>
  )
}

  // const renderItem = ({item}) =>{
  //   return (
  //     <>

  //     </>
  //   )
  // }

  const renderMiddleScreen = () =>{
    return (
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
          marginVertical: 15
          

        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" , color:COLORS.black}}>
          {currentQuestion?.question}
        </Text>
        <View style={{display : 'flex', flexDirection: 'row', marginVertical: 15}}>
          <Image style={{width : SIZES.width -120 , height : 250 , objectFit:'cover' , borderRadius: 20 , padding:SIZES.padding , marginLeft: 10 , marginRight: 10}} source={currentQuestion?.QuestionImg}/>
          <View style={{display: 'flex', flexDirection:'column', marginVertical: 5 , marginHorizontal: 15 , gap: 15}}>
                <Image source={icons.camera} style={{width : 30 , height: 30, objectFit:'contain'}}/>
                <Image source={icons.video} style={{width : 30 , height: 30, objectFit:'contain'}}/>
                <Image source={icons.volume} style={{width : 30 , height: 30, objectFit:'contain'}}/>
                <Image source={icons.SankalpPractice} style={{width : 30 , height: 40, objectFit:'contain'}}/>
                <Image source={icons.information} style={{width : 30 , height: 30, objectFit:'contain'}}/>

          </View>
        </View>
        {/* <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap',  alignItems: 'center' }}> */}
      <View style={{flex: 1, marginHorizontal: 10,}}>

            <FlatList
            style={{margin: 5 , rowgap: 15}}
              data={data}
              horizontal
              showsHorizontalScrollIndicator={true}
              key={'_'}
            //   ItemSeparatorComponent={
            //     () => <View style={{ width: 16, backgroundColor: 'pink' }}/>
            // }
              keyExtractor={item => "_" + item.id}
              renderItem={({item})=>(
                item?.options.map((items, index)=>{
                  return (
                    <AnswerOption items={items} index={index}/>

                  )
                })
              )}
              // numColumns={2}  
            
              
            />

      </View>


            
          
          {/* </View> */}

        </View>
      // </View>

    )
  }
  const renderBttomScreen = () =>{
    return (

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 0,
                backgroundColor: "#F0F8FF",
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
            {(!!answerStatus && background == 'green') ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              // navigation.goBack()
              navigation.navigate("Home")
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
              marginTop: 5,
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
              marginTop: 5,
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
        marginTop: 10,
        borderRadius: 6,
      }} 
       onPress={()=> 
        {selectedAnswerIndex !== correctAns ? (setBackground(COLORS.lightGray) && setAnsText("Incorrect")) : selectedAnswerIndex == correctAns ? (setBackground('green') && setAnsText("Correct") ): null
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
        setAnswerStatus(null);
        setSelectedAnswerIndex(null)
        setAnsText("")
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
    <SafeAreaView style={{paddingBottom : 20}} >
      <ScrollView>
        {renderTitle()}
        {renderDesc()}
        {renderProgressBar()}
        {renderExtraDesc()}
        {renderMiddleScreen()}
        <View style={{display:'flex', flexDirection:'row', padding:SIZES.padding}}>
         {renderSubmitBtn()}
         {renderResetBtn()}
        </View>
        {renderBttomScreen()}

      </ScrollView>

    </SafeAreaView>

     
  );
};

export default QuizScreen;

// const styles = StyleSheet.create({});