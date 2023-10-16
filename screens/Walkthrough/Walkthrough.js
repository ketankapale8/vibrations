import React, { useState , useRef} from 'react';
import {
    View,
    Text ,
    Animated,
    FlatList
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import TextButton from '../../component/TextButton';
import { COLORS , SIZES , constants , FONTS } from '../../constants/index';
import Walkthrough1 from './Walkthrough1';
// import Walkthrough2 from './Walkthrough2';
import { useNavigation } from '@react-navigation/native';

const Walkthrough = () => {
    const navigation = useNavigation();
    const scrollX = React.useRef(new Animated.Value(0)).current;

    // walkthrough 2 animation
    const [walkthrough2Animate , setwalkthrough2Animate] = useState(false)

    const onViewChangeRef = useRef(({viewableItems , changed })=>{
        if(viewableItems[0].index ==1 ){
            setwalkthrough2Animate(true)
        }
    });
 
    // console.log(scrollX)
    const Dots = () =>{
         const dotPosition = Animated.divide(scrollX ,SIZES.width)
        return (
            <View style={{flexDirection: 'row', 
            alignItems:'center', 
            justifyContent:'center'}}>
                {
                    constants.walkthrough.map((item, index)=>{
                        const dotColor = dotPosition.interpolate({
                            inputRange : [index - 1 , index, index+2],
                            outputRange : [Colors.dark08 , COLORS.primary , COLORS.dark08],
                            extrapolate : "clamp"
                        })
                        return (
                            <Animated.View
                                key={`$dot-${index}`}
                                style={{
                                    borderRadius:5,
                                    marginHorizontal:6,
                                    width:10,
                                    height:10,
                                    backgroundColor: dotColor
                                }}
                            />

                            
                        )
                    })
                }
            </View>
        )
    }

    const renderFooter = () =>{
        return (
            <View style={{position:'absolute' , bottom: 0 , left:0 , right:0 , height : SIZES.height *0.2 , alignItems:'center' , justifyContent:'space-between' , paddingHorizontal: SIZES.padding,
            paddingVertical : SIZES.height > 700 ? SIZES.padding : 20
                
            }}>
                <Dots/>
                <View style={{
                    flexDirection:'row',
                    height:55

                }}>
                    <TextButton
                    onPress={()=>navigation.navigate("register")}
                        label="Join Now"
                        contentContainerStyle={{
                                flex:1,
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.lightGrey

                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                         }}
                        
                    />

                     <TextButton
                        label="Login"
                        onPress={()=>navigation.navigate("login")}
                        contentContainerStyle={{
                                flex:1,
                                marginLeft : SIZES.radius,
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.primary

                        }}
                        labelStyle={{
                            color : COLORS.lightGrey,
                            // color: COLORS.primary,
                            ...FONTS.h3
                         }}
                        
                    />


                </View>
            </View>
        )
    }
    return (
        <View style={{flex: 1 , backgroundColor: COLORS.light}}>
            <Animated.FlatList
                data={constants.walkthrough}
                keyExtractor={(item)=>item.id}
                horizontal
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onViewableItemsChanged={onViewChangeRef.current}
                onScroll={Animated.event(
                    [{nativeEvent : {contentOffset : {x: scrollX}}}],
                    {
                        useNativeDriver: false
                    }
                )}

                renderItem={({item, index})=>{
                    return (
                        <View style={{width: SIZES.width , justifyContent:'center'}} 
                        >
                            {/* Walkthrough Images */}
                            <View style={{
                                flex : 1,
                                justifyContent:'center',

    
                            }}>
                                {index == 0 && (<Walkthrough1/>)}
                                {index == 1 && (<Walkthrough1 />)}
                                {index == 2 && (<Walkthrough1 />)}
                                {index == 3 && (<Walkthrough1 />)}



                                {/* {index == 1 && <Walkthrough2 animate={walkthrough2Animate}/>} */}

                            </View>
                            {/* Title & Description */}
                            <View style={{
                                height : SIZES.height * 0.35,
                                alignItems:'center',
                                justifyContent:'flex-start',
                                paddingHorizontal: SIZES.padding
                            
                            }}>
                                <Text style={{...FONTS.h1 , color: COLORS.dark}}>
                                    {item.title}
                                </Text>
                                <Text style={{marginTop: SIZES.radius , textAlign: 'center', ...FONTS.body3, color: COLORS.grey}}>
                                    {item.sub_title}

                                </Text>
                            </View>

                        </View>
                    )
                }}
            >

            </Animated.FlatList>
            {renderFooter()}



            
        </View>

      
    )
}

export default Walkthrough;