import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
  } from "react-native";
  import React , {useState} from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import AntDesign from "react-native-vector-icons/AntDesign.js"

  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCircleCheck ,faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from "../constants";
import { Image } from "react-native-svg";


  const ResultsScreen = () => {
    let [count , setCount ] = useState(0)
    const navigation = useNavigation();
    const route = useRoute();

    const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(route.params.answers.length)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);
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
            <FontAwesomeIcon icon={faShareNodes} style={{width:'45px', height:'30px', color : COLORS.primary }} size={20}  />
           
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
          <Text style={{color:COLORS.black}}>{route.params.answers.length}/{route.params.answers.length}</Text>
        </View>
  
        <Pressable
          style={{

            backgroundColor: "white",
            height: 320,
            borderRadius: 7,
            marginTop: 50,
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
            keyExtractor={(item, index) => index}
            renderItem={({ item, i }) => (
              <View
                style={{
                  flex: 1, flexDirection: 'row', 
                  // alignItems: "center",
                  justifyContent: "center",
                  margin: 10,

                  
                  // flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                {/* <View style={{ width :55 ,height: 55 , backgroundColor : 'white'}}> */}
                  <Text style={{color:COLORS.black}}>{item.question}</Text>
                  {item.answer === true ? (
                    
                    <View>
                      <FontAwesomeIcon icon={faCircleCheck} style={{width:'45px', height:'30px', color : COLORS.primary }} size={20}  />
                    </View>
                    // <AntDesign style={{marginLeft:5 ,color:COLORS.black}} name="checkcircle" size={20} color="green" />
                  ) : (
                    <FontAwesomeIcon icon={faCircleCheck} style={{width:'45px', height:'30px', color : COLORS.red , marginLeft : 5}} size={20}  />
                    // <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color />
                  )}

                {/* </View> */}
              </View>
            )}
          />
  
          <Pressable style={{backgroundColor:"green",padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}
            onPress={()=> navigation.navigate("Home")}
          >
            <Text style={{color:"white",textAlign:"center"}}>Return</Text>
          </Pressable>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default ResultsScreen;
  
  const styles = StyleSheet.create({});