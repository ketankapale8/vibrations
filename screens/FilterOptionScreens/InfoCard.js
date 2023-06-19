import * as React from 'react';
import { Text, View, StyleSheet, Image , Pressable } from 'react-native';
import {useRoute, useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from '../../constants';

const InfoCard = ({result}) => {
  const navigation = useNavigation();
  console.log('Componente Card')
  return (
    <Pressable 
    onPress={() => navigation.navigate("QuizScreen" , {questions : result.questionTag})}
    >
    <View style={{backgroundColor: COLORS.primary, padding: 16, margin: 15, borderRadius: 10 , height:75}}>
    <Text style={{fontWeight: 700, fontSize: 25}}>{result.questionTag}</Text>
    </View>


    </Pressable>
  )
}

export default InfoCard