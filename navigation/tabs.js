import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Svg, {
    Path
} from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper'

import { Home , User , Practice , Contribute, HomeScreen, Sankalp , More , Cases} from "../screens"
import { COLORS, SIZES, icons } from "../constants"
import { red200 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import LearnScreen from "../screens/LearnScreen";
import PracticeScreen1 from "../screens/PracticeScreen1";
import QuizScreen1 from "../screens/QuizScreen1";
import FilterScreen from "../screens/FilterScreen";
import QuizScreen from "../screens/QuizScreen";
import DummyQuizScreen1 from "../screens/DummyQuizScreen1";
import DummyQuizScreen from "../screens/DummyQuizScreen";
import QuizScreen2 from "../screens/QuizScreen2";

const Tab = createBottomTabNavigator();

// const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {

//     var isSelected = accessibilityState.selected

//     if (isSelected) {
//         return (
//             <View style={{ flex: 1, alignItems: 'center' }}>
//                 <View
//                     style={{
//                         flexDirection: 'row',
//                         position: 'absolute',
//                         top: 0
//                     }}
//                 >
//                     <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
//                     <Svg
//                         width={75}
//                         height={61}
//                         viewBox="0 0 75 61"
//                     >
//                         <Path
//                             d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
//                             fill={COLORS.white}
//                         />
//                     </Svg>
//                     <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
//                 </View>

//                 <TouchableOpacity
//                     style={{
//                         top: -22.5,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         width: 50,
//                         height: 50,
//                         borderRadius: 25,
//                         backgroundColor: COLORS.primary,
//                         ...styles.shadow
//                     }}
//                     onPress={onPress}
//                 >
//                     {children}
//                 </TouchableOpacity>
//             </View>
//         )
//     } else {
//         return (
//             <TouchableOpacity
//                 style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     width: 50,
//                     height: 50,
//                     backgroundColor: COLORS.white
//                 }}
//                 activeOpacity={1}
//                 onPress={onPress}
//             >
//                 {children}
//             </TouchableOpacity>
//         )
//     }
// }

// const CustomTabBar = (props) => {
//     if (isIphoneX()) {
//         return (
//             <View>
//                 <View
//                     style={{
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         height: 30,
//                         backgroundColor: COLORS.white
//                     }}
//                 ></View>
//                 <BottomTabBar {...props.props} />
//             </View>
//         )
//     } else {
//         return (
//             <BottomTabBar {...props.props} />
//         )
//     }
// }
const PracticeScreen = createStackNavigator()
function PracticeStackScreen(){
    return (
        <PracticeScreen.Navigator>
            <PracticeScreen.Screen name="Practice" component={Practice} 
            options={{ headerShown :true , headerStyle :{
                backgroundColor: COLORS.primary2,
                color : COLORS.white 
            }}}
    
                
                
                />


            <PracticeScreen.Screen name="PracticeScreen1" component={PracticeScreen1}  
                options={{ headerShown: false}}
            />

            <PracticeScreen.Screen name="FilterScreen" component={FilterScreen}  
                options={{ headerShown: false}}
            />

            <PracticeScreen.Screen name="QuizScreen" component={QuizScreen}  
                options={{ headerShown: false}}
            />

<PracticeScreen.Screen name="DummyQuiz1" component={DummyQuizScreen1}  
                options={{ headerShown: false}}
            />

<PracticeScreen.Screen name="DummyQuiz" component={DummyQuizScreen  }  
                options={{ headerShown: false}}
            />

<PracticeScreen.Screen name="QuizScreen1" component={QuizScreen1}  
                options={{ headerShown: false}}
            />

<PracticeScreen.Screen name="QuizScreen2" component={QuizScreen2}  
                options={{ headerShown: false}}
            />


        </PracticeScreen.Navigator>
    )
}

// const LearnScreen = createStackNavigator();
// function LearnStackScreen(){
//     return (
//         <LearnScreen.Navigator>
//             <LearnScreen.Screen />
//         </LearnScreen.Navigator>
//     )
// }

const Tabs = () => {
    return (
        <Tab.Navigator
                tabBarOptions={{
                    showLabel : false,
                    style:{
                        position: 'absolute',
                        bottom : 25,
                        left : 20, 
                        right : 20,
                        backgroundColor : "#fffff",
                        elevation : 0,
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow
                    }
                }}
            // tabBarOptions={{
            //     showLabel: true,
            //     style: {
            //         position: 'absolute',
            //         bottom: 0,
            //         left: 0,
            //         right: 0,
            //         backgroundColor: "transparent",
            //         elevation: 0
            //     }
            // }}
            // tabBar={(props) => (
            //     <CustomTabBar
            //         props={props}
            //     />
            // )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    // headerTitle : "Dashboard",
                    // headerTitleStyle : {paddingLeft : SIZES.padding * 1 , color :COLORS.white},
                    // headerStyle: {
                    //     backgroundColor: COLORS.primary2,
                    //   },
                    tabBarIcon : ({focused}) => (
                        <View style={{alignItems : 'center', justifyContent:'center', top: 0}}>
                            <Image
                            source={icons.Home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.pink : COLORS.primary1,
                                }}
                            />
                            <Text style={{color: focused ? COLORS.pink : COLORS.primary1, fontSize : 12}}>Home</Text>

                        </View>
                    )
                }}
                // options={{
                //     tabBarIcon: ({ focused }) => (
                //         <Image
                //             source={icons.Home}
                //             resizeMode="contain"
                //             style={{
                //                 width: 25,
                //                 height: 25,
                //                 tintColor: focused ? COLORS.white : COLORS.secondary
                //             }}
                //         />
                //     ),
                //     tabBarButton: (props) => (
                //         <TabBarCustomButton
                //             {...props}
                //         />
                //     )
                // }}
            />
            {/* <Tab.Screen
                name="Scan"
                component={Scan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.scan}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            /> */}

<Tab.Screen
                name="Learn"
                component={LearnScreen}
                options={{
                    headerTitle : "Learn Spandan",
                    headerTitleStyle : {paddingLeft : SIZES.padding * 10 , color :COLORS.white},
                    headerStyle: {
                        backgroundColor: COLORS.primary2,
                      },
                    tabBarIcon : ({focused}) => (
                        <View style={{alignItems : 'center', justifyContent:'center', top: 0}}>
                            <Image
                            source={icons.book}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.pink : COLORS.primary1,
                                }}
                            />
                            <Text style={{color: focused ? COLORS.pink : COLORS.primary1, fontSize : 12}}>Learn</Text>

                        </View>
                    )
                }}
                // options={{
                //     headerShown: false,
                //     tabBarIcon: ({ focused }) => (
                //         <Image
                //             source={icons.Learn}
                //             resizeMode="contain"
                //             style={{
                //                 width: 25,
                //                 height: 25,
                //                 tintColor: focused ? COLORS.white : COLORS.secondary
                //             }}
                //         />
                //     ),
                //     tabBarButton: (props) => (
                //         <TabBarCustomButton
                //             {...props}
                //         />
                //     )
                // }}
            />

<Tab.Screen
                name="PracticeStack"
                component={PracticeStackScreen}
                options={{
                    headerShown: false,
                    headerTitle : "Practice",
                    headerTitleStyle : {paddingLeft : SIZES.padding * 14 , color :COLORS.white},
                    headerStyle: {
                        backgroundColor: COLORS.primary2,
                      },
                    tabBarIcon : ({focused}) => (
                        <View style={{alignItems : 'center', justifyContent:'center', top: 0}}>
                            <Image
                            source={icons.target}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.pink : COLORS.primary1,
                                }}
                            />
                            <Text style={{color: focused ? COLORS.pink : COLORS.primary1, fontSize : 12}}>Practice</Text>

                        </View>
                    )
                }}
            />

            
            <Tab.Screen
                name="Cases"
                component={Cases}
                options={{
                    headerTitle : "Cases",
                    headerTitleStyle : {paddingLeft : SIZES.padding * 14 , color :COLORS.white},
                    headerStyle: {
                        backgroundColor: COLORS.primary2,
                      },
                    tabBarIcon : ({focused}) => (
                        <View style={{alignItems : 'center', justifyContent:'center', top: 0}}>
                            <Image
                            source={icons.writing}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.pink : COLORS.primary1,
                                }}
                            />
                            <Text style={{color: focused ? COLORS.pink : COLORS.primary1, fontSize : 12}}>Cases</Text>

                        </View>
                    )
                }}
            />

<Tab.Screen
                name="Profile"
                component={More}
                options={{
                    headerTitle : "Profile",
                    headerTitleStyle : {paddingLeft : SIZES.padding * 14 , color :COLORS.white},
                    headerStyle: {
                        backgroundColor: COLORS.primary2,
                      },
                    tabBarIcon : ({focused}) => (
                        <View style={{alignItems : 'center', justifyContent:'center', top: 0}}>
                            <Image
                            source={icons.discover}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.pink : COLORS.primary1,
                                }}
                            />
                            <Text style={{color: focused ? COLORS.pink : COLORS.primary1 , fontSize : 12}}>Profile</Text>

                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary1,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;