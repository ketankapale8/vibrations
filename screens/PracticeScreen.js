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
  
  const PracticeScreen = () => {
    const navigation = useNavigation();
  
    const learnArr = [
        {
            title : "Practice",
            path : "FilterScreen",
        },
        {
            title : "Self Test",
            // path : "QuizScreen2",
            path :"DummyQuiz"
        },
        {
            title : "Take Exam",
            path : "QuizScreen1",
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
              Learn Spandan
            </Text>
          </View>
        </>
      );
    };


  
    const renderTest = () => {
      return (
        <FlatList
          contentContainerStyle={{paddingVertical: SIZES.padding * 3}}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'center' , alignItems:"center"}}
          data={learnArr}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          // ListFooterComponent={<View style={{marginBottom: 20}}></View>}
        />
      );
    };
  
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.4,
        }}
          onPress={()=> navigation.navigate(item.path)}
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
        {renderTest()}
      </SafeAreaView>
    );
  };
  
  export default PracticeScreen;
  