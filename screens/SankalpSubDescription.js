import { View, Text , Image , TouchableOpacity,
  TouchableWithoutFeedback, FlatList , Pressable , Button , StyleSheet , ScrollView} from 'react-native'
import React , {useState} from 'react';
import { COLORS, SIZES , icons , FONTS } from '../constants'
import { useRoute , useNavigation } from '@react-navigation/native';

const SankalpSubDescription = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const items = route.params?.items;
  console.log(items)
  const [ language , setLanguage] = useState(items.SankalpEngDesc);

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
            <View style={{ width : SIZES.width -20, margin: SIZES.padding , padding: 2 , borderRadius: 20 , justifyContent:"center" , display:"flex" , height : SIZES.height * 0.07 }}>
                <Text style={{color : COLORS.black , fontSize : SIZES.body1, paddingLeft: SIZES.padding *14 }}>
                 Sankalp 
                </Text>
            </View>
        </>
    )
}
function renderMiddleComponent(){
  return (
    <>
      <View style={{width : SIZES.width -20 , height : SIZES.height * 0.07, margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20  , paddingTop : 5 , display: 'flex' , flexDirection: 'row'}}>
          <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2, color: COLORS.pink}}> {items.groupId}.</Text>
          <Text style={{color : COLORS.black, paddingLeft: SIZES.padding *2 , fontSize : SIZES.body2,  color: COLORS.pink}}>{items.purpose}</Text>
      </View>
      <Text style={{color : COLORS.black ,paddingLeft: SIZES.padding *5}}>This Sankalp is used for balancing the body. It is advised to balance the body at least once in the day. 
</Text>
     
    </>
  )
}

const showContent = (value) =>{
  console.log(value)
  if(value =="Hindi"){
      setLanguage(items.SankalpHindiDesc)
  }
  else if (value == "Gujrati"){
    setLanguage(items.SankalpGujratiDesc)
  }else if(value == "English"){
    setLanguage(items.SankalpEngDesc)
  }

}

function BottomContainer(){
  return (
    <>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
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
                    value={items.SankalpDesc1}
                    onPress={() => showContent(items.SankalpDesc1)}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h4 }}>English</Text>
                </TouchableOpacity>
        </View>
        <View style={{  paddingLeft : SIZES.padding * 0.6 ,margin: SIZES.padding * 2  }}>
                <TouchableOpacity
                    style={{
                        height: 40,
                        width : 90,
                        backgroundColor: COLORS.yellow,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Hindi"
                    value={items.SankalpDesc2}
                    onPress={() => showContent(items.SankalpDesc2)}
                    
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h4 }}>Hindi</Text>
                </TouchableOpacity>
        </View>
        <View style={{ margin: SIZES.padding * 2 }}>
                <TouchableOpacity
                    style={{
                        height: 40,
                        width : 90,
                        backgroundColor: COLORS.gray,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    title="Gujrati"
                    value={items.SankalpDesc3}
                    onPress={() => showContent(items.SankalpDesc3)}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h4 }}>Gujrati</Text>
                </TouchableOpacity>
        </View>
        </View>

        <View style={{width : SIZES.width -20 , height : SIZES.height *0.4, margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20 , paddingTop : SIZES.padding2 *2}}>
            <View style={{width : SIZES.width -40 , height : SIZES.height *0.35  , borderRadius : 20 , backgroundColor : COLORS.white , paddingTop : SIZES.padding2 *2 , borderWidth : 2 , borderColor: COLORS.primary1}}>
              <Text style={{color: COLORS.black , padding : SIZES.padding , fontSize: SIZES.body3}}>
                {language}
              </Text>

            </View>
        </View>

        <View  style={{width : SIZES.width -20 , height : SIZES.height *0.4, margin :SIZES.padding , padding : SIZES.padding , borderRadius : 20 , paddingTop : SIZES.padding2 *2 , display:'flex', flexDirection:'column'}}>
        <View style={{width : SIZES.width -40 , height : SIZES.height *0.25  , borderRadius : 20 , backgroundColor : COLORS.white , paddingTop : SIZES.padding2 *1 , borderWidth : 2 , borderColor: COLORS.primary1}}>
              <Text style={{color: COLORS.black , padding : SIZES.padding , fontSize: SIZES.body3}}>Notes</Text>
              <Text style={{color: COLORS.black , padding : SIZES.padding , fontSize: SIZES.body3}}>{items.Notes}</Text>

            </View>         
        </View>

      </View>
    </>
  )
}

  return (
    <View style={{backgroundColor : COLORS.lightGray ,paddingTop: SIZES.padding * 3 , height : SIZES.height}}>
    {renderTopComponent()}
    <ScrollView>
      {renderMiddleComponent()}
      {BottomContainer()}

    </ScrollView>
  
  
  </View>
  )
}



export default SankalpSubDescription

const styles = StyleSheet.create({
  buttons : {
    height: 40,
        width : 90,
        backgroundColor: COLORS.darkgray,
        borderRadius: SIZES.radius / 1.5,
        alignItems: 'center',
        justifyContent: 'center'

  }
})