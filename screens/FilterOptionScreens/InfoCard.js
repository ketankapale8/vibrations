import * as React from 'react';
import { Text, View, StyleSheet, Image , Pressable } from 'react-native';
import {useRoute, useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from '../../constants';

const InfoCard = ({result, filterQuestions}) => {
  const navigation = useNavigation();
  const [path , setPath] = React.useState('')


  React.useEffect(()=>{
    filterQuestions?.map((item,idx)=> 
   { item.category == "Positive Negative"  && setPath('QuizScreen')
   item.category == "Body Parts"  && setPath('QuizScreen')
   item.category == "Disease"  && setPath('QuizScreen')
    item.category == "Nadi" && setPath("DummyQuiz1")
    item.category == "Chakra" && setPath("DummyQuiz1")
    item.category == "Vastu" && setPath('QuizScreen')
  }
    )

  },[path])
  return (
    <Pressable 
    onPress={() => navigation.navigate( path , {questions : result.questionTag , filterQuestions: filterQuestions})}
    >
    <View style={{backgroundColor: COLORS.white, padding: 2, margin: 5, borderRadius: 10 , height:105 , borderColor : COLORS.primary1 , borderWidth: 2 , display: 'flex', flexDirection:'column', gap: 30}}>
      <View style={{ paddingHorizontal: 15 , paddingVertical : 13 , borderRadius: 3, borderColor:'black'  , display: 'flex', gap: 20 , width: '100%'}}>
        <View style={{ display : 'flex', flexDirection: 'row' , gap: 20}}>
          <View>
            <Image style={{width: 75,height: 75 , borderRadius : 5 }} source={result?.QuestionImg}/>

          </View>
          <View style={{display: 'flex', flexDirection: 'column'}}>
      <View style={{ display:'flex', flexDirection: 'row' ,paddingLeft: 40 , gap: 60}}>
        <Text style={{fontWeight: 700, fontSize: 12 , color: COLORS.primary1 }}>Level No: {result?.level}</Text>
        <Text style={{fontWeight: 700, fontSize: 12 , color: COLORS.primary1 , }}>Example No: {result?.level}</Text>
      </View>
              <Text style={{fontWeight: 700, fontSize: 15 , color: COLORS.primary1 , marginVertical: 10 , paddingLeft: 90}}>{result?.questionTag}</Text>
            
      <View style={{justifyContent: 'space-around', display:'flex', flexDirection: 'row' ,paddingLeft: 20 , gap: 20 , marginVertical: 10}}>
        <Text style={{fontWeight: 700, fontSize: 12 , color: COLORS.primary1}}>category: {result?.category}</Text>
        <Text style={{fontWeight: 700, fontSize: 12 , color: COLORS.primary1}}>Type:  {result?.Type}</Text>
      </View>
          </View>
        </View>
       
      </View>
      {/* <View style={{flex : 0.5 , }}>

        <View style={{alignItems: 'center'}}>
          </View>

      </View> */}
    </View>


    </Pressable>
  )
}

export default InfoCard