import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    Image,
  } from 'react-native';
  import React ,{useEffect} from 'react';
  import { useNavigation , useRoute } from '@react-navigation/native';
  import {SIZES, COLORS, FONTS, icons, images} from '../constants';
  import {PracticeCategories} from '../constants/PracticeCategories.js';
  import Pic1 from '../assets/LearnScreen/Pic1.png';
  import Pic2 from '../assets/LearnScreen/Pic2.jpg';
  import Pic3 from '../assets/LearnScreen/Pic3.jpg';
  import Pic4 from '../assets/LearnScreen/Pic4.png';
//   import Pic5 from '../assets/PracticeScreen/Pic5.png';
//   import Pic6 from '../assets/PracticeScreen/Pic6.png';
//   import Pic7 from '../assets/PracticeScreen/Pic7.jpg';
  
  import { ScrollView } from 'react-native-gesture-handler';
  
  
  const PracticeScreen1 = () => {
    const navigation = useNavigation();
    
    const route = useRoute();
    const questions = route.params?.questions
    const [path , setPath] = React.useState('')
    const [path1 , setPath1] = React.useState(false)


    useEffect(()=>{
      questions.map((item,idx)=> 
     { item.category == "Positive Negative"  && setPath('QuizScreen1') 
      item.category == "Nadi"  && (setPath("DummyQuiz"), setPath1(true))
      item.category == "Chakra" && (setPath("DummyQuiz") , setPath1(true))
      item.category == "Vastu" && setPath('QuizScreen1')
      item.category == "Body Parts" && setPath('QuizScreen1')
      item.category == "Disease"  && setPath('QuizScreen1')
    }
      )

    },[path, path1])

    const LearnArr = [
      {
        id : 1,
        title : "Practice Mode",
        desc : "There are multiple categories in the practice mode. In each category, questions with multiple choice answers will be given. Check the spandan and select your answer        ",
        img: Pic1,
        path : "FilterScreen"
      }
      ,{
        id : 2,
        title : "Self Test",
        desc: "Test your ability with self test. Random questions within categories will be asked. There is a time limit for giving the answer.         ",
        img: Pic2,
        // path : "QuizScreen1"
        path : path
      },{
        id : 3,
        title : "Evaluation",
        desc: "Multiple exams will be conducted to evaluate Sadhak’s ability. This will be formally recorded and reported. Enhance your level with each exam        ",
        img: Pic3, 
        path : path1 == true ? 'DummyQuiz' : "QuizScreen2"
        // path : "QuizScreen2",
      },{
        id : 4,
        title : "Contribute",
        desc: "If you have more examples that can help others to practice, then submit you entry here. After review team will add your entry in the practice section        ",
        img: Pic4, 
        path: "Home"
      }
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
              Practice Spandan
            </Text>
            <Text
              style={{
                color: COLORS.primary1,
                fontSize: SIZES.body4,
                paddingLeft: SIZES.padding ,
                paddingTop: 5,
                textAlign: 'justify'
              }}>
              Practice makes man perfect !!! Sadhak has learned about the spandan in the previous section. Now is the time to practice it and gain mastery over it. First start with practicing on your own and when you are confident, check your ability using self test. After you are ready for evaluation take the exam.   

  
            </Text>
          </View>
        </>
      );
    };

    const listHeader = () =>{
        return (
            <>
                <View style={{width : SIZES.width , height : 55 , backgroundColor : COLORS.primary2 , display:'flex' , justifyContent:'center', flexDirection:'row'}}>
                    <Text style={{color: COLORS.white , marginLeft: SIZES.padding , ...FONTS.body2}}>Practice Spandan</Text>
                </View>
            </>
        )
    }
  
    const renderLearnCategories = () => {
      return (
        <FlatList
          nestedScrollEnabled={true}
          style={{display :'flex' }}
          contentContainerStyle={{ alignItems:'center', width: SIZES.width-25 }}
          data={LearnArr}
          key={'_'}
          keyExtractor={item => "_" + item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{marginBottom: 40}}></View>}
        />
      );
    };
  
    const renderItem = ({ item }) => {
      return (
        <>
          <Text
            style={{
              ...FONTS.h4,
              display : 'flex',
              alignContent:'center',
              justifyContent :'center',
              color: COLORS.pink,
              marginLeft: 145,
              // marginTop: 5,
              alignSelf:'center',
              textAlign:'center'
              
            }}>
            {item.title}
          </Text>
        <TouchableOpacity
        style={{
          marginVertical: SIZES.base -16,
          width: SIZES.width,
          paddingLeft : SIZES.padding + 30,
          paddingRight : SIZES.padding + 24,
        }}
        // {questions : item.testQuestions , title : item.title}
          onPress={()=> navigation.navigate(item.path , {title : item.title , questions: questions})}
          >
        
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 145,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius : 20,
            borderBottomRightRadius : 20,
            // backgroundColor: COLORS.white,
            // borderColor : COLORS.primary1,
            margin : SIZES.padding ,
            gap : 40
            // borderWidth: 2
            
          }}>
            
            <View style={{flex : 0.4 }} >
              <Image
                style={{
                  width : 120,
                  height : 100,
                  objectFit: 'cover',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderRadius : 20,
                  marginTop: 2,
                  marginLeft :0,
                  borderWidth: 2,
                  borderColor: COLORS.black
                }}
                source={item.img}
                />
            </View>
            <View style={{flex : 0.6 , borderTopLeftRadius: 10,
                  flexDirection:'column',
                  borderTopRightRadius: 10,
                  height: 100,
                  width : 180 ,
                  borderColor: COLORS.black,
                  borderTopLeftRadius : 10,
                  borderBottomLeftRadius : 10,
                  borderBottomRightRadius : 10,
                  // textAlign: 'justify',
                  // borderRadius : 20,
                  marginTop: 2,
                  marginBottom: 10,
                  marginLeft :5,
                  borderWidth: 2}}>
                  <ScrollView>
                    <Text style={{paddingLeft : 13 , 
                      paddingRight :10 ,
                      paddingBottom : 13 , 
                      paddingTop : 7,
                      color : COLORS.primary1,
                      ...FONTS.body4,
                      lineHeight: 15,  
                      textAlign: 'justify'                    
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
        {listHeader()}
        {renderTitle()}
        {renderLearnCategories()}
      </SafeAreaView>
        </ScrollView>
    );
  };
  
  export default PracticeScreen1;
  