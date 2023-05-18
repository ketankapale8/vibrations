import { View, Text , Image , TouchableOpacity,
    TouchableWithoutFeedback, FlatList , Pressable} from 'react-native'
import React from 'react'
import { COLORS, SIZES , icons , FONTS } from '../constants'
import { useRoute , useNavigation } from '@react-navigation/native';

const SankalpDescription = () => {
    const route = useRoute();
    const navigation = useNavigation()
    const items = route.params?.items;
    const groupTitle = route.params?.groupTitle;
    const group = route.params?.group;
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
                <View style={{ width : SIZES.width -20, margin: SIZES.padding , padding: SIZES.padding , backgroundColor : COLORS.lightpurple , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.07 }}>
                    <Text style={{color : COLORS.black , fontSize : SIZES.body2, paddingLeft: SIZES.padding *12 }}>
                     Sankalp List
                    </Text>
                </View>
            </>
        )
    }

    function renderMiddleComponent(){
      return (
        <>
          <View style={{width : SIZES.width -20 , height : SIZES.height * 0.09, margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20 , backgroundColor : COLORS.lightpurple , paddingTop : SIZES.padding2 *2}}>
            {/* <View style={{width : SIZES.width  , height : SIZES.height * 0.05   , borderRadius : 200 , backgroundColor : COLORS.lightpurple , display:'flex', flexDirection:'column' , position:'absolute', top:0}}> */}
              <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body3}}>Sankalp Number : {group}</Text>
              <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body3}}>Sankalp Purpose : {groupTitle}</Text>
            {/* </View> */}

          </View>
        </>
      )
    }

    function BottomFlatListComponent(){
      return (
        <>
        <View style={{width : SIZES.width -20 , height : SIZES.height *0.65 , margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20 , backgroundColor : COLORS.lightpurple , paddingTop : SIZES.padding2 *2}}>
          <FlatList
            data={items}
            // style={{ zIndex: 9, marginHorizontal: SIZES.margin - 110 }}
            keyExtractor={(item, idx) => idx}
            scrollEnabled={true}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, idx }) => {
              return (
                <>
                <Pressable onPress={()=>navigation.navigate("SankalpDetails", {items: item})}>
                  <View style={{ flexDirection: "row" , padding:SIZES.padding , display:"flex", justifyContent:"center"}} >
                    <View style={{ backgroundColor :item.groupId % 2 == 1 ? COLORS.lightGray : COLORS.lightGreen , width : SIZES.width-40, borderRadius: 20 , height: SIZES.height * 0.07 , padding : SIZES.padding-2 , alignSelf:'center' }}>
                      <Text style={{color:COLORS.black , paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2}}>{item.title}</Text>
                      <Text style={{color:COLORS.black , paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2}}>{item.purpose}</Text>
                    </View>
                  </View>

                </Pressable>
                </>
              )
            }
          }
            
          />
        </View>
        </>
      )
    }
  return (
    <View style={{backgroundColor : COLORS.lightGray ,paddingTop: SIZES.padding * 3 }}>
    {renderTopComponent()}
    {renderMiddleComponent()}
    {BottomFlatListComponent()}
  
  </View>
  )
}

export default SankalpDescription