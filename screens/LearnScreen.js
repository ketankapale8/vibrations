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
//   import {PracticeCategories} from '../constants/PracticeCategories.js';
  import Pic1 from '../assets/Learn/Picture1.png';
  import Pic2 from '../assets/Learn/Picture2.jpg';
  import Pic3 from '../assets/Learn/Picture3.jpg';
  import Pic4 from '../assets/Learn/Picture4.png';

  
  import { ScrollView } from 'react-native-gesture-handler';
  
  
  const LearnScreen = () => {
    const navigation = useNavigation();
  
    const practiceArr = [
      {
        title : "Spandan Book",
        desc : "With Guruvar’s blessings there are multiple books that Sadhak can refer to. This section provides a snapshot of these books        ",
        img: Pic1,
        path: "SpandanBook"
      }
      ,{
        title : "Spandan Sankalp",
        desc: "Sankalp is the integral part of Spandan. Only a correct Sankalp will provide the correct Spandan. This section details out the various Sankalps for different situations        ",
        img: Pic2, 
        path: "Sankalp"
      },{
        title : "Spandan Points",
        desc: "This section provides the details the spandan that we feel. Sadhak will start learning from basics of spandan and grow up to an expert level",
        img: Pic3, 
        path: ""
      },{
        title : "Contribute",
        desc: "If you have more examples that can help others to practice, then submit you entry here. After review team will add your entry in this section        ",
        img: Pic4, 
        path: ""
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
              Learn Spandan
            </Text>
            <Text
              style={{
                color: COLORS.primary1,
                fontSize: SIZES.body4,
                paddingLeft: SIZES.padding ,
                paddingTop: 5
              }}>
              When Sadhak is looking at an object with ‘Sakshi Bhav’ (witnessing attitude) and concentrate on his palm, he forms a virtual triangle between the object, his eyes and palm. At this point he feels sensations of subtle energy on his palm. These sensations are called ‘Spandan’ 

  
            </Text>
          </View>
        </>
      );
    };
  
    const renderLearnCategories = () => {
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
          onPress={()=> navigation.navigate(item.path)}
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
        {renderLearnCategories()}
      </SafeAreaView>
        </ScrollView>
    );
  };
  
  export default LearnScreen;
  