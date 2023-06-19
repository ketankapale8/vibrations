import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {SIZES, COLORS, FONTS, icons, images} from '../constants';
import {PracticeCategories} from '../constants/PracticeCategories.js';

const Practice = () => {
  const navigation = useNavigation();
  // const practiceCategories = [
  //   {
  //     id: 1,
  //     img: images.promoBanner,
  //     title: 'Positive Negative',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         QuestionImg : icons.Tulsi,
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Lemon Plant",
  //         QuestionImg : icons.Lemon,
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 3,
  //         Question : "Check the vibrations of Tamarind Plant",
  //         QuestionTag : "Tamarind Plant",
  //         QuestionImg : icons.Tamarind,
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     img: images.promoBanner,
  //     title: 'Nadi',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Nadi Plant",
  //         QuestionTag : "Nadi",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Nadi Plant",
  //         QuestionTag : "Nadi",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     img: images.promoBanner,
  //     title: 'Chakra',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     img: images.promoBanner,
  //     title: 'Vastu',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     img: images.promoBanner,
  //     title: 'Body Organs',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 6,
  //     img: images.promoBanner,
  //     title: 'Diseases',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "-ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 7,
  //     img: images.promoBanner,
  //     title: 'Random',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     id: 8,
  //     img: images.promoBanner,
  //     title: 'Self Tests',
  //     testQuestions :[
  //       {
  //         QuestionNo : 1,
  //         Question : "Check the vibrations of Tulsi Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       },
  //       {
  //         QuestionNo : 2,
  //         Question : "Check the vibrations of Lemon Plant",
  //         QuestionTag : "Tulsi Plant",
  //         AnswerArray : [
  //           {
  //             CorrectAns : "+ve",
  //             Answer1 : "+ve",
  //             Answer2 : '-ve'
  //             // Answer1Correct : 'true'
  //           }
  //         ],
  //       }
  //     ]
  //   },
  // ];

  const renderTitle = () => {
    return (
      <>
        <View
          style={{
            width: SIZES.width - 20,
            margin: SIZES.padding,
            padding: SIZES.padding,
            backgroundColor: COLORS.lightpurple,
            borderRadius: 15,
            justifyContent: 'center',
            display: 'flex',
            height: SIZES.height * 0.07,
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: SIZES.body2,
              paddingLeft: SIZES.padding * 12,
            }}>
            Practice Category
          </Text>
        </View>
      </>
    );
  };

  const renderPracticeCategories = () => {
    return (
      <FlatList
        contentContainerStyle={{paddingHorizontal: SIZES.padding * 3}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={PracticeCategories}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
      style={{
        marginVertical: SIZES.base+10,
        width: SIZES.width / 2.4,
      }}
        onPress={()=> navigation.navigate('LearnScreen' , {questions : item.testQuestions , title : item.title})}
        >
      
      <View
        style={{
          height: 120,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius : 20,
          borderBottomRightRadius : 20,
          backgroundColor: COLORS.primary,
          margin : SIZES.padding
        }}>
        <Text
          style={{
            ...FONTS.h3,
            display : 'flex',
            alignContent:'center',
            justifyContent :'center',
            color: COLORS.white,
            padding: SIZES.padding * 3,
            alignSelf:'center',
            textAlign:'center'
            
          }}>
          {item.title}
        </Text>
      </View>
      {/* <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={{...FONTS.body4, color: 'black'}}>{item.title}</Text>
      </View> */}
    </TouchableOpacity>

    )
  };

  return (
    <SafeAreaView>
      {renderTitle()}
      {renderPracticeCategories()}
    </SafeAreaView>
  );
};

export default Practice;
