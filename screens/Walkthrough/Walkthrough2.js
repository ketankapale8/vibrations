import {View , Text , StyleSheet} from 'react-native';
import {useDynamicAnimation ,MotiImage } from 'moti'
import React from 'react';
import {SIZES ,images} from '../../constants';

const Walkthrough2 = ({animate}) =>{
    // Moti initial positions

    // const motiImage1 = useDynamicAnimation(()=>{
    //        return{ top:"30%",
    //         left: "10%"
    // }
    // })

    // const motiImage1 = useDynamicAnimation(()=>({
    //     top:'30%',
    //     left:'25%'
    // }))
    // const motiImage2 = useDynamicAnimation(()=>({
    //     top: "45%",
    //     left : "15%"
    // }))

    // const motiImage3 = useDynamicAnimation(()=>({
    //     top: "58%",
    //     left : "25%"
    // }))

    // const motiImage4 = useDynamicAnimation(()=>({
    //     top: "61%",
    //     left : "40%"
    // }))

    // const motiImage5 = useDynamicAnimation(()=>({
    //     top: "27%",
    //     left : "50%"
    // }))


return(
    <View >
        <Text style={{color:'black'}}>
                TEST
        </Text>
    </View>
)
}

const styles = StyleSheet.create({
    image:{
        position: 'absolute',
        width : 86,
        height:112,
        zIndex:0,
        borderRadius : SIZES.radius
    }
})

export default Walkthrough2