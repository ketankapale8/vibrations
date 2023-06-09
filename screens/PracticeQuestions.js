import { View, Text, TouchableOpacity , Image } from 'react-native'
import React , {useState , useEffect} from 'react';
import { useRoute , useNavigation } from '@react-navigation/native';
import { COLORS, SIZES , FONTS , icons} from '../constants';

export default function PracticeQuestions() {
    const route = useRoute();
    const navigation = useNavigation();
    const questions = route.params?.questions;
    console.log(questions.length)

    const [currentQue , setCurrentQue] = useState(1);
    const [showFinish , setShowFinish] = useState(false);
    const [showNext , setShowNext] = useState(true);
    const [showPrevious , setShowPrevious] = useState(true);
    const [text , setText] = useState('Next')
    const currentQuestionNo = questions.filter((item)=> item?.QuestionNo == currentQue);

    const renderTopComponent = () =>{
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
            {currentQuestionNo.map(item=>{
                return (
                    <>
                <View style={{ width : SIZES.width -20, margin: SIZES.padding , padding: SIZES.padding , backgroundColor : COLORS.lightpurple , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.1 }}>
                     <Text style={{color : COLORS.black , fontSize : SIZES.body2, paddingLeft :SIZES.padding *0.8 }}>
                     Question Number : {item.QuestionNo}
                    </Text>
                    <Text style={{color : COLORS.black , fontSize : SIZES.body2, padding :SIZES.padding  }}>
                     {item.Question}
                    </Text>
                </View>
                    <View>
                        <Image style={{width : SIZES.width -30 , height : 250 , objectFit:'cover' , borderRadius: 20 , padding:SIZES.padding , marginLeft: 10 , marginRight: 10}} source={item?.QuestionImg}/>

                    </View>
                {item.AnswerArray.map(ans =>{
                    return (
                        <>
                        <View style={{display:'flex', flexDirection: 'row' , paddingTop: SIZES.padding +20}}>
                        <TouchableOpacity >
                            <View style={{ width : SIZES.width -220, margin: SIZES.padding , padding: SIZES.padding , backgroundColor : COLORS.lightpurple , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.1 }}>
                                <Text style={{color : COLORS.black , fontSize : SIZES.body2}}>{ans.Answer1}</Text>
                            </View>
                        {/* </TouchableOpacity> */}
                        {/* <TouchableOpacity > */}
                            <View style={{ width : SIZES.width -220, margin: SIZES.padding , padding: SIZES.padding , backgroundColor : COLORS.lightpurple , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.1 }}>
                                <Text style={{color : COLORS.black , fontSize : SIZES.body2}}>{ans.Answer2}</Text>
        
                            </View>
                        </TouchableOpacity>

                        </View>
                        
                        </>
                    )
                })
            }
                </>

                )
            })}
            
            </>
        )
    }


    function renderPreviousBtn() {
        return (
         
            <View style={{ paddingLeft : SIZES.padding * 0.6 ,margin: SIZES.padding * 2 }}>
                    <TouchableOpacity
                        style={{
                        height: 40,
                            width : 90,
                            backgroundColor: COLORS.emerald,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        title="English"
                        // value={items.SankalpDesc1}
                        onPress={() =>handlePrev()}
                    >
                        <Text style={{ color: COLORS.black, ...FONTS.h4 }}>Previous</Text>
                    </TouchableOpacity>
            </View>


        )
    }

    function renderNextButton() {
        return (
        
            <View style={{ paddingLeft : SIZES.padding * 0.6 ,margin: SIZES.padding * 2 }}>
                    <TouchableOpacity
                        style={{
                        height: 40,
                            width : 90,
                            backgroundColor: COLORS.emerald,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        title="English"
                        // value={items.SankalpDesc1}
                        onPress={()=>handleNext()}
                    >
                        <Text style={{ color: COLORS.black, ...FONTS.h4 }}>{text}</Text>
                    </TouchableOpacity>
            </View>
        )
    }

    
    const handleNext = () =>{
        if(currentQue>=1 && currentQue<questions.length){
            setCurrentQue(currentQue + 1)
            setText('Next')
            setShowPrevious(true)
            // console.log(currentQue)
      
        } else if(currentQue >= questions.length){
            setCurrentQue(currentQue)
            setShowFinish(true)
            setText('Finish')
            // setShowNext(!showNext)
            setShowFinish(!showFinish)
        }
    }

    const handlePrev = () =>{
        if(currentQue <= 1 ){
            setCurrentQue(1)
            setShowPrevious(!showPrevious)
        }else if(currentQue>1 && currentQue<=questions.length){
            setCurrentQue(currentQue-1)
            setText('Next')
        }
    }
    useEffect(()=>{
      handleNext()
    },[])


    
  return (
    <View style={{backgroundColor : COLORS.lightGray , paddingTop: SIZES.padding * 3 , borderRadius : 20 , height : SIZES.height}}>
    <View>
      
        {renderTopComponent()}
        <View style={{display:'flex', flexDirection:'row' , padding:SIZES.padding *6}}>
            {/* {BottomContainer()} */}
            {showPrevious && renderPreviousBtn()}
            {showNext && renderNextButton()}
            {/* {showFinish && <Text>End</Text>} */}

        </View>

    </View>
    </View>
  )
}