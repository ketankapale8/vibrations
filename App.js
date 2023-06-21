/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SignUp , SignIn, Sankalp, SankalpDescription, SankalpSubDescription } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Toast from 'react-native-toast-message';

import Tabs from "./navigation/tabs";
import PracticeTest from './screens/PracticeTest';
import PracticeTest1 from './screens/PracticeTest1';
import PracticeQuestions from './screens/PracticeQuestions';
import PracticeQuestions1 from './screens/PracticeQuestions1';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultScreen';
import FilterScreen from './screens/FilterScreen';
import QuizScreen1 from './screens/QuizScreen1';
import LearnScreen from './screens/LearnScreen';
import QuizScreen2 from './screens/QuizScreen2';
import DummyQuizScreen from './screens/DummyQuizScreen';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />


                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Sankalp" component={Sankalp} />
                <Stack.Screen name="SankalpDescription" component={SankalpDescription}
                 />
                <Stack.Screen name="SankalpDetails" component={SankalpSubDescription}
                 />
                 <Stack.Screen name="Selftest" component={PracticeTest}
                 />
                 <Stack.Screen name="SelfQuestions" component={PracticeQuestions}
                 />
                 {/* // modify naming conventions here... according to selftest and practice tests // */}

                 <Stack.Screen name="Practicetest" component={PracticeTest1}
                 />
                   <Stack.Screen name="PracticeQuestions" component={PracticeQuestions1}
                 />

                 <Stack.Screen name="QuizScreen" component={QuizScreen} />
                 <Stack.Screen name="QuizScreen1" component={QuizScreen1} />
                 <Stack.Screen name="QuizScreen2" component={QuizScreen2} />
                 
                 <Stack.Screen name="Results" component={ResultsScreen} />
                 <Stack.Screen name="FilterScreen" component={FilterScreen} />
                 <Stack.Screen name="LearnScreen" component={LearnScreen} />
                 <Stack.Screen name="DummyQuiz" component={DummyQuizScreen} />








                {/* <Stack.Screen name="Scan" component={Scan} /> */}
            </Stack.Navigator>
            <Toast/>
        </NavigationContainer>
    )
}

export default App;
