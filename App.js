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
import LearnScreen from './screens/PracticeScreen';
import QuizScreen2 from './screens/QuizScreen2';
import DummyQuizScreen from './screens/DummyQuizScreen';
import DummyQuizScreen1 from './screens/DummyQuizScreen1';
import LearnScreen1 from './screens/PracticeScreen1';
import PracticeScreen from './screens/PracticeScreen';
import PracticeScreen1 from './screens/PracticeScreen1';
import SpandanBook from './screens/SpandanBook';
import SpandanBookDescription from './screens/SpandanBookDescription';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './navigation/Main';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const App = () => {
    return (
        // <NavigationContainer theme={theme}>
        //     <Stack.Navigator
        //         screenOptions={{
        //             headerShown: false
        //         }}
        //         initialRouteName={'SignUp'}
        //     >
        //         <Stack.Screen name="SignUp" component={SignUp} />
        //         <Stack.Screen name="SignIn" component={SignIn} />


        //         {/* Tabs */}
        //         <Stack.Screen name="Home" component={Tabs} />
        //         <Stack.Screen name="Sankalp" component={Sankalp} />
        //         <Stack.Screen name="SankalpDescription" component={SankalpDescription}
        //          />
        //         <Stack.Screen name="SankalpDetails" component={SankalpSubDescription}
        //          />
        //          <Stack.Screen name="Selftest" component={PracticeTest}
        //          />
        //          <Stack.Screen name="SelfQuestions" component={PracticeQuestions}
        //          />
        //          {/* // modify naming conventions here... according to selftest and practice tests // */}

        //          <Stack.Screen name="Practicetest" component={PracticeTest1}
        //          />
        //            <Stack.Screen name="PracticeQuestions" component={PracticeQuestions1}
        //          />

        //          <Stack.Screen name="QuizScreen" component={QuizScreen} />
        //          <Stack.Screen name="QuizScreen1" component={QuizScreen1} />
        //          <Stack.Screen name="QuizScreen2" component={QuizScreen2} />
                 
        //          <Stack.Screen name="Results" component={ResultsScreen} />
        //          <Stack.Screen name="FilterScreen" component={FilterScreen} />
        //          <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
        //          <Stack.Screen name="PracticeScreen1" component={PracticeScreen1} />
        //          <Stack.Screen name="DummyQuiz" component={DummyQuizScreen} />
        //          <Stack.Screen name="DummyQuiz1" component={DummyQuizScreen1} />
        //          <Stack.Screen name="SpandanBook" component={SpandanBook} />
        //          <Stack.Screen name="SpandanBookDescription" component={SpandanBookDescription} />
                 
                 

        //         {/* <Stack.Screen name="Scan" component={Scan} /> */}
        //     </Stack.Navigator>
        //     <Toast/>
        // </NavigationContainer>
        <Provider store={store}>
            <Main/>

        </Provider>
    )
}

export default App;
