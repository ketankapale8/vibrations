import { View, Text , Image , TouchableOpacity,
    TouchableWithoutFeedback, FlatList , Pressable} from 'react-native'
  import React from 'react'
  import { COLORS, SIZES , icons , FONTS } from '../constants'
  import { useNavigation } from '@react-navigation/native';
import { SankalpBookData } from '../constants/SankalpBookData';

  
  const SankalpBook = () => {
    const navigation = useNavigation();
      function renderTopComponent(){
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
                  {/* <View style={{ width : SIZES.width -20, margin: SIZES.padding , padding: SIZES.padding , backgroundColor : COLORS.lightpurple , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.07 }}>
                      <Text style={{color : COLORS.black , fontSize : SIZES.body2, paddingLeft: SIZES.padding *12 }}>
                       Our Sankalp
                      </Text>
                  </View> */}
              </>
          )
      }
  
      function renderMiddleComponent(){
        return (
          <>
            <View style={{width : SIZES.width -20 , height : SIZES.height * 0.1, margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20 , paddingTop : SIZES.padding2 *2}}>
              {/* <View style={{width : SIZES.width  , height : SIZES.height * 0.05   , borderRadius : 200 , backgroundColor : COLORS.lightpurple , display:'flex', flexDirection:'column' , position:'absolute', top:0}}> */}
                <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2, color: COLORS.pink}}>Spandan Books</Text>
                <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body3}}>Below are some of the reference books that Sadhak can use as a reference</Text>
              {/* </View> */}
  
            </View>
          </>
        )
      }
  
      function BottomFlatListComponent(){
        return (
          <>
          <View style={{width : SIZES.width -20 , height : SIZES.height *0.66 , margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20  , paddingTop : SIZES.padding2 *2}}>
            <FlatList
              data={SankalpBookData}
              // style={{ zIndex: 9, marginHorizontal: SIZES.margin - 110 }}
              keyExtractor={(item, idx) => idx}
              scrollEnabled={true}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, idx }) => {
                return (
                  <>
                  <TouchableOpacity onPress={()=>navigation.navigate('SpandanBookDescription', {title: item.groupTitle , desc : item.desc})}>
                    <View style={{ flexDirection: "row" , padding:SIZES.padding , display:"flex", justifyContent:"center"}} >
                      <View style={{ backgroundColor : item.id % 2 == 1 ? '#CBCBCB' : "#EAEAEA" , width : SIZES.width-40, borderRadius: 5 , height: SIZES.height * 0.07 , padding : SIZES.padding-2 , alignSelf:'center' }}>
                        <Text style={{color:COLORS.black , paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2, paddingHorizontal: 5}}>{item.Title}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
  
                  </>
                )
              }
            }
              
            />
          </View>
          </>
        )
      }
  
      // const pressed = () =>{
      //   navigation.navigate("SankalpDescription" , {data : })
      // }
    return (
      <View style={{backgroundColor : COLORS.lightGray , paddingTop: SIZES.padding * 3 , borderRadius : 20 , height : SIZES.height}}>
        {renderTopComponent()}
        {renderMiddleComponent()}
        {BottomFlatListComponent()}
      </View>
    )
  }
  
  export default SankalpBook