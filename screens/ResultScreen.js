import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
  } from "react-native";
  import React from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import AntDesign from "react-native-vector-icons/AntDesign.js"
import { COLORS } from "../constants";


  const ResultsScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    // console.log(route.params);
    return (
      <SafeAreaView style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{color:COLORS.black}}>Your Results</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 14,
            }}
          >
            <Text style={{color:COLORS.darkgray}}>Share</Text>
            <AntDesign
              style={{ marginLeft: 4 }}
              name="sharealt"
              size={18}
              color="black"
            />
          </View>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{color:COLORS.black}}>Questions Answered</Text>
          <Text style={{color:COLORS.black}}>(5/5)</Text>
        </View>
  
        <Pressable
          style={{
            backgroundColor: "white",
            height: 220,
            borderRadius: 7,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "magenta",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Score Card
          </Text>
          <FlatList
            numColumns={2}
            data={route.params.answers}
            renderItem={({ item, i }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                <Text style={{color:COLORS.black}}>{item.question}</Text>
                {item.answer === true ? (
                  <AntDesign style={{marginLeft:5 ,color:COLORS.black}} name="checkcircle" size={20} color="green" />
                ) : (
                  <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
                )}
              </View>
            )}
          />
  
          <Pressable style={{backgroundColor:"green",padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}
            onPress={()=> navigation.navigate("Home")}
          >
            <Text style={{color:"white",textAlign:"center"}}>Continue</Text>
          </Pressable>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default ResultsScreen;
  
  const styles = StyleSheet.create({});