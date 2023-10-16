import React, { useState , useRef, useEffect} from "react";
import { View , Image} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {SIZES, constants}   from "../../constants";

const ITEM_WIDTH = 120;

const Walkthrough1 = () =>{
    //row 1
    const [row1Images , setRow1Images] = useState([
       ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_02_images
    ])

    const [currentPostiton , setCurrentPosition] = useState(0)

    //row2

    const [row2Images , setRow2mages] = useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images,

    ])

    const [row2CurrentPosition , setrow2CurrentPosition] = useState(0);

    // Ref
    const row1FlatlistRef = useRef();
    const row2FlatlistRef = useRef();

    useEffect(()=>{
        let positionTimer;

        const timer = () =>{
            positionTimer = setTimeout(()=>{
                //incrementing autoscrolling

                //slider 1
                setCurrentPosition(prevPosition=>{
                   const position =  Number(prevPosition) + 1; 
                   row1FlatlistRef?.current?.scrollToOffset({offset: position , animated:false})
                   const maxOffset = constants.walkthrough_01_01_images. length * ITEM_WIDTH;
                   if(prevPosition > maxOffset){
                    const offset = prevPosition -maxOffset;
                    row1FlatlistRef?.current?.scrollToOffset({offset:offset , animated:false })
                    return offset
                   }else{
                    return position
                   }

                })

                //slider 2
                setrow2CurrentPosition(prevPosition=>{
                    const position = Number(prevPosition)+1;
                    row2FlatlistRef?.current?.scrollToOffset({offset: position , animated:false})
                    const maxOffset = constants.walkthrough_01_02_images.length * ITEM_WIDTH;
                    if(prevPosition > maxOffset){
                        const offset = prevPosition - maxOffset
                        row2FlatlistRef?.current?.scrollToOffset({offset:offset , animated:false})
                        return offset
                    }else{
                        return position
                    }
                })

                timer() 
                

            }, 32)
        }
        timer();

        return () =>{
            clearTimeout(positionTimer)
        }

    },[])

    // Render

    return(
       <View>
         {/* slider1 */}
         <FlatList
            ref={row1FlatlistRef}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
            horizontal
            listKey="Slider1"
            scrollEnabled={false}

            keyExtractor={(_,index)=>   `Slider1_${index}`}
            data={row1Images}
            renderItem={({item , index})=>{
                return (
                    <View style={{
                        width: ITEM_WIDTH,
                        alignItems:'center',
                        justifyContent:'center'
                    
                    }}>
                        <Image 
                            source={item}
                            style={{
                                width : 110,
                                height: 110
                            }}
                        />
                    </View>
                )
            }}

         />

         {/* slider2 */}

         <FlatList
            ref={row2FlatlistRef}
            data={row2Images}
            style={{
                marginTop: SIZES.padding,
                transform: [{rotate : "180deg"}]
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate='fast'
            scrollEnabled={false}
            listKey="Slider2"
            keyExtractor={(_,index)=>   `Slider2_${index}`}
            renderItem={({item,index})=>{
                return (
                    <View style={{
                        width: ITEM_WIDTH,
                        alignItems:'center',
                        justifyContent:'center',
                        transform : [{rotate : "180deg"}]
                    }}>
                        <Image
                            source={item}
                            style={{
                                width:110,
                                height:110
                            }}
                        />

                    </View>
                )
            }}
         />

       </View>
    )
}

export default Walkthrough1