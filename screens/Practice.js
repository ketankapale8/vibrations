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
import DummyQuestions from '../constants/DummyQuestions';
import {PracticeCategories} from '../constants/PracticeCategories.js';
import Pic1 from '../assets/PracticeScreen/Pic1.png';
import Pic2 from '../assets/PracticeScreen/Pic2.jpg';
import Pic3 from '../assets/PracticeScreen/Pic3.png';
import Pic4 from '../assets/PracticeScreen/Pic4.png';
import Pic5 from '../assets/PracticeScreen/Pic5.png';
import Pic6 from '../assets/PracticeScreen/Pic6.png';
import Pic7 from '../assets/PracticeScreen/Pic7.jpg';

import { ScrollView } from 'react-native-gesture-handler';
import VastuQuestions from '../constants/VastuQuestions.js';
import NadiQuestions from '../constants/NadiQuestions.js';
import BodyPartsQuestions from '../constants/BodyPartsQuestions.js';
import DiseaseQuestions from '../constants/DiseaseQuestions';
import ChakraQuestions from '../constants/ChakraQuestions';


const Practice = () => {
  const navigation = useNavigation();

  const practiceArr = [
    {
      title : "Positive Negative",
      desc : "This is the first step for Spandan. Check the spandan of a given picture and mark it as positive or negative. Different types such as plants, objects and places are provided.",
      img: Pic1,
      questions : DummyQuestions
    }
    ,{
      title : "Nadi",
      desc: "Use this section to identify which Nadi of a person is active, determine if an object belongs to male or female. This can be used for checking positive or  negative spandan.      ",
      img: Pic2,
      questions : NadiQuestions
    },{
      title : "Chakra",
      desc: "All 5 fingers, center & base part of the palm consists of a subtle energy center of seven chakras. Identify the three major chakras active in a person, object or place.       ",
      img: Pic3, 
      questions : ChakraQuestions
    },{
      title : "Vastu",
      desc: "Check if the vastu is positive or negative. Check the spandan of a vastu and identify the direction where issues exists. This can used for house, office, shop or plots.      ",
      img: Pic4, 
      questions : VastuQuestions
    },{
      title : "Spandan Points of Body Organs ",
      desc: "Sadhak can check health of the body parts using spandan on the palm. There are specific areas on the palm denoting body parts. Learn the position for each body part      ",
      img: Pic5,
      questions : BodyPartsQuestions
    },{
      title : "Spandan points of Diseases      ",
      desc: "Learn specific positions on the fingers denoting various diseases. Each finger will have diseases related to its corresponding chakra.        ",
      img: Pic6, 
      questions : DiseaseQuestions
    },
    // {
    //   title : "Mix Bag",
    //   desc: "This section will give the real life spandan checking feel. Here questions will be asked on the random basis. Answer then and check how much prepared you are for next step.       ",
    //   img: Pic7
    // }
  ]

  const renderTitle = () => {
    return (
      <>
        <View
          style={{
            width: SIZES.width - 20,
            margin: SIZES.padding,
            padding: SIZES.padding,
            // backgroundColor: COLORS.white,
            borderRadius: 15,
            // justifyContent: 'center',
            display: 'flex',
            height: SIZES.height * 0.2,
          }}>
          <Text
            style={{
              color: COLORS.pink,
              fontSize: SIZES.body2,
              paddingLeft: SIZES.padding ,
            }}>
            Practice Mode
          </Text>
          <Text
            style={{
              color: COLORS.primary1,
              fontSize: SIZES.body4,
              paddingLeft: SIZES.padding ,
              paddingTop: 5
            }}>
            There are multiple categories in the practice mode. It is advised to follow the sequence for practicing. Each category will have multiple examples. Check the spandan and select your answer. You can reset the answer if you change your mind. Try the mix bag option to test your ability to check spandan randomly

          </Text>
        </View>
      </>
    );
  };

  const renderPracticeCategories = () => {
    return (
      <FlatList
        nestedScrollEnabled={true}
        style={{display :'flex' }}
        contentContainerStyle={{ alignItems:'center', width: SIZES.width-40}}
        data={practiceArr}
        key={'_'}
        keyExtractor={item => "_" + item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <Text
          style={{
            ...FONTS.h3,
            display : 'flex',
            alignContent:'center',
            justifyContent :'center',
            color: COLORS.pink,
            marginLeft: 80,
            // marginTop: 5,
            alignSelf:'center',
            textAlign:'center'
            
          }}>
          {item.title}
        </Text>
      <TouchableOpacity
      style={{
        marginVertical: SIZES.base -14,
        width: SIZES.width,
        paddingLeft : SIZES.padding + 30,
        paddingRight : SIZES.padding + 10
      }}
        onPress={()=> navigation.navigate('PracticeScreen1' , {questions : item.questions , title : item.title})}
        >
      
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 140,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius : 20,
          borderBottomRightRadius : 20,
          gap : 30,
          // backgroundColor: COLORS.white,
          // borderColor : COLORS.primary1,
          margin : SIZES.padding ,
          // borderWidth: 2
          
        }}>
          
          <View style={{flex : 0.3}}>
            <Image
              style={{
                width : 105,
                height : 120,
                objectFit: 'cover',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderRadius : 20,
                marginTop: 10,
                marginLeft :10
                
              }}
              source={item.img}
              />
          </View>
          <View style={{flex : 0.7 , borderTopLeftRadius: 10,
                flexDirection:'column',
                borderTopRightRadius: 20,
                borderTopLeftRadius : 20,
                borderBottomLeftRadius : 20,
                borderBottomRightRadius : 20,
                textAlign: 'justify',
                // borderRadius : 20,
                marginTop: 10,
                marginBottom: 10,
                marginLeft :25,
                borderWidth: 2}}>
                <ScrollView>
                  <Text style={{paddingLeft : 13 , 
                    paddingRight :10 ,
                    paddingBottom : 13 , 
                    paddingTop : 13,
                    color : COLORS.primary1,
                    ...FONTS.body5,
                    lineHeight: 17,

                    }}>
                      {item.desc}
                  </Text>

                </ScrollView>

                

          </View>

        
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
      
      </>

    )
  };

  return (
      <ScrollView>
      <SafeAreaView>
      {renderTitle()}
      {renderPracticeCategories()}
    </SafeAreaView>
      </ScrollView>
  );
};

export default Practice;
