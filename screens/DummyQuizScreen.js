import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import questions from '../constants/DummyQuestions.js';
import {useRoute, useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import Options from './Options.js';
// import { AntDesign } from "react-native-vector-icons";
const DummyQuizScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const questions = route?.params?.questions

  const renderMultiSelectQuiz = () => {
    const [data , setData] = useState(questions);
    //   const tag = route?.params.questions;
    //   const data = questions.filter(item=>item.questionTag == tag);
    const totalQuestions = data.length;

    // points
    const [points, setPoints] = useState(0);
    const [reset , setReset] = useState(false)
    const [background, setBackground] = useState(COLORS.lightGray);

    // index of the question
    const [index, setIndex] = useState(0);

    // answer Status (true or false)
    const [answerStatus, setAnswerStatus] = useState(null);

    // answers
    const [answers, setAnswers] = useState([]);
    // console.log(answers);


    // selected answer
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    const [selectedOption, setSelectedOption] = useState(false);

    // console.log(selectedAnswerIndex)

    const [correctAns, setCorrectAns] = useState(null);
    const [ansText, setAnsText] = useState('');
    const [color, setColor] = useState('white');
    const [pressed, isPressed] = useState(false);
    let selectedtempArr = [];

    // const [selectedtempArr , setSelectedtempArr] = useState([])



    const [currentIdx, setCurrentIdx] = useState();

    // Counter
    const [counter, setCounter] = useState(5);
    const [resettingVal , setResettingVal] = useState(false)

    // interval
    let interval = null;

    // progress bar
    const progressPercentage = Math.floor((index / totalQuestions) * 100);

    const [correctSeqAns, setCorrectSeqAns] = useState([]);
    ////////// multiselect logic /////////
    const [tempAnsArr, setTempAnsArr] = useState('');
    let tempArr = [];
    useEffect(() => {
      // if (selectedAnswerIndex !== null) {
      //   if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
      //     setPoints((points) => points + 10);
      //     // setAnswerStatus(true);
      //     answers.push({ question: index + 1, answer: true });
      //   } else {
      //     // setAnswerStatus(false);
      //     answers.push({ question: index + 1, answer: false });
      //   }
      // }
      // if(selectedAnswerIndex!== null){
      if ((correctSeqAns.toString() === tempAnsArr.toString()) === true) {
        setPoints(points => points + 10);
        setAnswerStatus(true);
        temporaryArr.isSelected = ""
        // setTempAnsArr([])
        answers.push({question: index + 1, answer: true});
      } else {
        setAnswerStatus(false);
        setTempAnsArr([]);
        answers.push({question: index + 1, answer: false});
      }

      // }
    }, [selectedAnswerIndex]);

    useEffect(() => {
      setSelectedAnswerIndex(null);
      setAnswerStatus(null);
    }, [index]);

    useEffect(() => {
      if (index + 1 > data.length) {
        clearTimeout(interval);
        navigation.goBack();
        navigation.navigate('Results', {
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

    // const [currentQuestion, setCurrentQuestion] = useState(data[index]);
    //   console.log(answerStatus)
    currentQuestion = data[index]
    let temporaryArr = [{isSelected : ""}];

    const handleReset = () =>{
      setReset(true);
      currentQuestion?.options.map((item, idx)=>{
        if(item.isSelected == true){
          temporaryArr.push(item.isSelected = false)
        }else if(item.isSelected == false){
          temporaryArr.push(item.isSelected = false)
        }
      
      })

      currentQuestion = temporaryArr;



      // console.log(currentQuestion?.options.map(item=>item))

      // currentQuestion = temporaryArr;
      
      // temporaryArr[{isSelected : ""}]
      
      // setResettingVal(true)
      //  currentQuestion = data[index]
      //  console.log(currentQuestion?.options.map(item=>item.isSelected))
    }

    const handlePress = (index, resettingVal) => {
      currentQuestion?.options.map((item, idx)=>{
        if(idx == index){
          if(item.isSelected == true){
            temporaryArr.push(item.isSelected = false)
          }else{
            temporaryArr.push(item.isSelected = true)
          }
          // temporaryArr.push(item.isSelected = true)
        }
        
        else{
          if(item.isSelected == true){
            temporaryArr.push(item.isSelected = true)
          }else{
            temporaryArr.push(item.isSelected = false)
            
          }
          // temporaryArr.push(item.isSelected = false)
        }

      }
      )
      currentQuestion = temporaryArr;
      // if(resettingVal == false){
      //   currentQuestion = temporaryArr

      // }else if(resettingVal == true){
      //   currentQuestion = data[index] && temporaryArr.isSelected == []
      // }

      // console.log(temporaryArr)
      // setCurrentQuestion(...currentQuestion ,temporaryArr)
      
    };

  

    const renderTitle = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{color: COLORS.black}}>Quiz Challenge</Text>
          <Pressable
            style={{padding: 10, backgroundColor: 'magenta', borderRadius: 20}}>
            <Text
              style={{
                color: COLORS.black,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {counter}
            </Text>
          </Pressable>
        </View>
      );
    };

    const renderDesc = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={{color: COLORS.black}}>Your Progress</Text>
          <Text style={{color: COLORS.black}}>
            ({index}/{totalQuestions}) questions answered
          </Text>
        </View>
      );
    };

    const renderProgressBar = () => {
      return (
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            height: 10,
            borderRadius: 20,
            justifyContent: 'center',
            marginTop: 20,
            marginLeft: 10,
          }}>
          <Text
            style={{
              backgroundColor: '#FFC0CB',
              borderRadius: 12,
              position: 'absolute',
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
              color: COLORS.black,
            }}
          />
        </View>
      );
    };

    const renderMiddleScreen = () => {
      return (
        <View
          style={{
            marginTop: 30,
            backgroundColor: '#F0F8FF',
            padding: 10,
            borderRadius: 6,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
            {currentQuestion?.question}
          </Text>
          <View>
            <Image
              style={{
                width: SIZES.width - 30,
                height: 250,
                objectFit: 'cover',
                borderRadius: 20,
                padding: SIZES.padding,
                marginLeft: 10,
                marginRight: 10,
              }}
              source={currentQuestion?.QuestionImg}
            />
          </View>
          <View style={{marginTop: 12 , display: 'flex', flexDirection: 'row' , gap: 10 }}>
          <ScrollView horizontal={true}
              >
            {currentQuestion?.options.map((item, index) => (
              <Pressable
                onPress={() =>
                  // console.warn('pressed')
                  {
                    setTempAnsArr([...tempAnsArr, index]);
                    setCorrectSeqAns(currentQuestion?.correntMultiSelectOption);
                    handlePress(index , resettingVal);
                    setCurrentIdx(index);
                    setReset(false)
                  }
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderColor: '#00FFFF',
                    marginVertical: 10,
                    marginHorizontal : 10,
                    backgroundColor: reset == false && item.isSelected == true ? 'green' : 'white',
                    borderRadius: 20,
                    color: COLORS.black,
                  }}>
                  <Text
                    style={{
                      borderColor: '#00FFFF',
                      textAlign: 'center',
                      color: COLORS.black,
                      borderWidth: 0.5,
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      padding: 10,
                    }}>
                    {item.options}
                  </Text>
                  <View style={{paddingLeft: 10 , display: 'flex' , flexDirection:'column' , alignItems:'center', width: 'auto', height:'auto', padding:4 , margin:3 }}>
                  {item?.imgOption && (<>
                    <Image source={item?.imgOption} style={{width: 55, height: 65 , objectFit:'contain' , borderRadius : 20 , paddingLeft: 20, flexDirection:'column'}}/>
                  
                  </>)}
                  <Text style={{marginLeft: 0, color:COLORS.primary , ...FONTS.body5}}>
                    {item?.answer}
                  </Text>
                  </View>
                </View>
                {/* <Options item={item} currentIdx={currentIdx} color={color} correctSeqAns={correctSeqAns} selectedOption={selectedOption} setCorrectSeqAns={setCorrectSeqAns} setCurrentIdx={setCurrentIdx} index={index}/> */}
              </Pressable>
            ))}


              </ScrollView>
          </View>
        </View>
      );
    };
    const renderBttomScreen = () => {
      return (
        <View
          style={
            answerStatus === null
              ? null
              : {
                  marginTop: 5,
                  backgroundColor: '#F0F8FF',
                  padding: 10,
                  borderRadius: 7,
                  height: 120,
                }
          }>
          {answerStatus === null ? null : (
            <Text
              style={
                answerStatus == null
                  ? null
                  : {
                      fontSize: 17,
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: COLORS.black,
                    }
              }>
              {!!answerStatus && background == 'green'
                ? 'Correct Answer'
                : 'Wrong Answer'}
            </Text>
          )}

          {index + 1 >= questions.length ? (
            <Pressable
              onPress={() =>
                // navigation.goBack()
                navigation.navigate('Results', {
                  points: points,
                  answers: answers,
                })
              }
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,
                borderRadius: 6,
              }}>
              <Text style={{color: 'white'}}>Done</Text>
            </Pressable>
          ) : answerStatus === null ? null : (
            <Pressable
              onPress={() => {setIndex(index + 1)
                setReset(true)
              }
              }
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,
                borderRadius: 6,
              }}>
              <Text style={{color: 'white'}}>
                {index + 1 >= questions.length ? 'Done' : 'Next Question'}
              </Text>
            </Pressable>
          )}
        </View>
      );
    };

    const renderSubmitBtn = () => {
      return (
        <Pressable
          style={{
            backgroundColor: 'green',
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            borderRadius: 6,
          }}
          onPress={
            () => {
              // console.warn(correctSeqAns.toString() === tempAnsArr.toString())
              (correctSeqAns.toString() === tempAnsArr.toString()) === true
                ? setBackground('green') && setAnsText('Correct')
                : correctSeqAns.toString() !== tempAnsArr.toString()
                ? setBackground(COLORS.lightGray) && setAnsText('Incorrect')
                : null;
              index + 1 >= questions.length
                ? setAnswerStatus(false)
                : setAnswerStatus(true);
              setTempAnsArr([]);
              //     selectedAnswerIndex !== correctAns ? (setBackground(COLORS.lightGray) && setAnsText("Incorrect")) : selectedAnswerIndex == correctAns ? (setBackground('green') && setAnsText("Correct") ): null
              // setAnswerStatus(true)
            }

            // setAnswerStatus(true);
            //  setAnswerStatus(true);
          }>
          <Text style={{color: 'white'}}>Submit</Text>
        </Pressable>
      );
    };

    const renderResetBtn = () => {
      return (
        <Pressable
          style={{
            backgroundColor: 'green',
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
            borderRadius: 6,
          }}
          onPress={() => {
            setAnswerStatus(null);
            setSelectedAnswerIndex(null);
            setAnsText('');
            handleReset()
            // currentQuestion?.options.map(item=>item.isSelected == false)
            
            // temporaryArr([{isSelected : ""}])
            // tempArr = [];
            setTempAnsArr([]);
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
          <Text style={{color: 'white'}}>Reset</Text>
        </Pressable>
      );
    };
    return (
      <>
        <SafeAreaView>
          {renderTitle()}
          {renderDesc()}
          {renderProgressBar()}
          {renderMiddleScreen()}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: SIZES.padding,
            }}>
            {renderSubmitBtn()}
            {renderResetBtn()}
          </View>
          {renderBttomScreen()}
        </SafeAreaView>
      </>
    );
  };

  ////changed ///

  return <>{renderMultiSelectQuiz()}</>;
};

export default DummyQuizScreen;

// const styles = StyleSheet.create({});
