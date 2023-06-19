import { View, Text , Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Options = ({item , color , currentIdx , correctSeqAns , pressed , selectedOption}) => {
  console.log(correctSeqAns.includes(currentIdx))
  return (
    <View style={{flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    marginVertical: 10,
    backgroundColor: selectedOption && 'red',
    borderRadius: 20,
    color: COLORS.black}}>
       <Text style={{ marginLeft: 10 , color:COLORS.black}}>{item.answer}</Text>
    </View>
  )
}

export default Options