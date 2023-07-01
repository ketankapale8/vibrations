import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import React , {useState , useEffect} from 'react';
import { useRoute , useNavigation } from '@react-navigation/native';
import { COLORS, SIZES , FONTS} from '../constants';
import { Dropdown } from 'react-native-element-dropdown';
import {PracticeCategories} from '../constants/PracticeCategories'

import Lottie from 'lottie-react-native';
// import DropdownComponent from '../component/DropdownComponent';
// import QuizAnime from '../assets/icons/quiz.json'

const PracticeTest1 = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const questions = PracticeCategories;
    const title = route.params?.title;
    const [showall , setshowAll] = useState(true);
    let categories = [...new Set(questions.map(item=>({'label':item.QuestionTag , 'value': item.QuestionTag})))]
    // const [filterArr , setFilterArr] = useState([])
    
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState("");

    
    // const [filterArr , setFilterArr] = useState(questions.filter(item=>item?.QuestionTag == value))
    const [filterArr , setFilterArr] = useState([])
    
    useEffect(()=>{
      setFilterArr(questions?.filter(item=>item?.QuestionTag == value))
      },[value])

    
      
      const DropdownComponent = () => {
        const renderLabel = () => {
          if (value || isFocus) {
            return (
              <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                Selector
              </Text>
            );
          }
          return null;
        };
      
        return (
          <View style={styles.container}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              itemTextStyle={styles.itemText}
              iconStyle={styles.iconStyle}
              data={categories}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                // setFilterArr([questions.filter(item=>item?.QuestionTag ===`${item.value}`)])
              }}
              
            />
          </View>
        );
      };
    const renderTitle = () => {
      return (
        <>
          <View
            style={{
              width: SIZES.width - 30,
              margin: SIZES.padding,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
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
                color: COLORS.white,
                fontSize: SIZES.h1,
                paddingLeft : SIZES.padding+120,
                paddingRight: SIZES.padding+120,
                // paddingLeft: SIZES.padding +40,
                alignContent:'center',
                justifyContent:'center'
              }}>
              Practice 
            </Text>
          </View>
        </>
      );
    };

    function renderFilterQuestions(){
      return (
        <View style={{
          width: SIZES.width - 80,
            margin: SIZES.padding+20,
            padding: SIZES.padding,
            paddingLeft : SIZES.padding+60,
            // backgroundColor: COLORS.primary,
            borderRadius: 15,
            // justifyContent: 'center',
            height: SIZES.height * 0.06,
            display:'flex',
            flexDirection:'column'
        }}>

          {<DropdownComponent data={categories}/>}
          {/* {categories.map((item,idx)=>{
            return (
              <>
              <View style={{display:'flex' , flexDirection:'column', padding :SIZES.padding }}>
                
                <Text style={{color:COLORS.black , backgroundColor: COLORS.green , height:30 , width:140 ,borderRadius: SIZES.radius / 1.5,
                        display:'flex',
                        fontSize: SIZES.h4,
                        textAlign:'center',
                        alignItems: 'center',
                        justifyContent: 'center'}} key={idx} >
                  {item}
                </Text>

              </View>
              
              </>
            )
          })} */}

        </View>
      )
    }



    function renderfilterComponent(){
      return (
        <View 
        style={{
          width: SIZES.width - 30,
          margin: SIZES.padding,
          padding: SIZES.padding,
          // backgroundColor: COLORS.lightpurple,
          borderRadius: 15,
          // justifyContent: 'center',
          display: 'flex',
          height: SIZES.height * 0.6,
          display:'flex',
          // alignContent:'center',
          // justifyContent:"center"
        }}
        > 
        {/* // Title // */}
          <View style={{
            width: SIZES.width - 80,
            margin: SIZES.padding,
            padding: SIZES.padding,
            // backgroundColor: COLORS.primary,
            borderRadius: 15,
            // justifyContent: 'center',
            height: SIZES.height * 0.06,
            display:'flex',
            // alignContent:'flex-start',
          }}>
              <Text style={{color: COLORS.black, fontSize: SIZES.h2}}>Categories for {title}</Text>
          </View>
        {/* // Filter Buttons // */}
          <View style={{
            width: SIZES.width - 80,
            margin: SIZES.padding,
            padding: SIZES.padding,
            paddingLeft : SIZES.padding+40,
            // backgroundColor: COLORS.primary,
            borderRadius: 15,
            // justifyContent: 'center',
            height: SIZES.height * 0.06,
            display:'flex',
            flexDirection:'row'
            // alignContent:'flex-start',
          }}>
              <View style={{ paddingLeft : SIZES.padding * 0.6 ,margin: SIZES.padding  }}>
                <TouchableOpacity
                    style={{
                      height: 40,
                        width : 90,
                        backgroundColor: COLORS.gray,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="All"
                    // value={items.SankalpDesc1}
                    // onPress={() => showContent(items.SankalpDesc1)}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h4 }}>All</Text>
                </TouchableOpacity>
        </View>
        <View style={{  paddingLeft : SIZES.padding * 0.6 ,margin: SIZES.padding }}>
                <TouchableOpacity
                    style={{
                        height: 40,
                        width : 90,
                        backgroundColor: COLORS.yellow,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Filter"
                   
                    
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h4 }}>Filter</Text>
                </TouchableOpacity>
        </View>
          </View>

          {renderFilterQuestions()}
        </View>


      )
    }

    function renderStartButton() {
      return (
          <View style={{ margin: SIZES.padding * 2 , paddingTop: '10%' }}>
              <TouchableOpacity
                  style={{
                      height: 60,
                      backgroundColor: COLORS.primary,
                      borderRadius: SIZES.radius / 1.5,
                      alignItems: 'center',
                      justifyContent: 'center'
                  }}
                  onPress={() => navigation.navigate("PracticeQuestions" , {questions : questions})}
              >
                  <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start</Text>
              </TouchableOpacity>
          </View>
      )
  }

    
  return (
    <View style={{backgroundColor : COLORS.lightGray , paddingTop: SIZES.padding * 3 , borderRadius : 20 , height : SIZES.height}}>
      {renderTitle()}
      {renderfilterComponent()}
      {/* <View style={{flex: 1 ,alignItems:'center', justifyContent:'center' , paddingTop: '55%' }}>
        <Lottie source={require("../assets/icons/quiz.json")} style={{width: '100%' , aspectRatio: 1}} autoPlay loop/>
      </View> */}
      {renderStartButton()}

    </View>
  )
}

export default PracticeTest1;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    width: 195,
    height: 85,
    color:"black",
    
  },
  itemText:{
    color:'black'
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    color:"green",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,

  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    color: 'black',
    left: 22,
    top: 10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color:'black'
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'black'
  },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'black'
  },
});