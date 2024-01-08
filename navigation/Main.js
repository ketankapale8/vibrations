
import { View, Text } from 'react-native'
import React , {useEffect} from 'react';
import Loader from '../screens/Loader';
import { SignUp , SignIn, Sankalp, SankalpDescription, SankalpSubDescription , Welcome } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import PracticeTest from '../screens/PracticeTest';
import PracticeTest1 from '../screens/PracticeTest1';
import PracticeQuestions from '../screens/PracticeQuestions';
import PracticeQuestions1 from '../screens/PracticeQuestions1';
import QuizScreen from '../screens/QuizScreen';
import ResultsScreen from '../screens/ResultScreen';
import FilterScreen from '../screens/FilterScreen';
import QuizScreen1 from '../screens/QuizScreen1';
import LearnScreen from '../screens/PracticeScreen';
import QuizScreen2 from '../screens/QuizScreen2';
import DummyQuizScreen from '../screens/DummyQuizScreen';
import DummyQuizScreen1 from '../screens/DummyQuizScreen1';
import LearnScreen1 from '../screens/PracticeScreen1';
import PracticeScreen from '../screens/PracticeScreen';
import PracticeScreen1 from '../screens/PracticeScreen1';
import SpandanBook from '../screens/SpandanBook';
import SpandanBookDescription from '../screens/SpandanBookDescription';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tabs from './tabs';

import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/action';
import OnboardingScreen from '../component/OnBoardingScreen';
import VerifyScreen from '../screens/VerifyScreen';
import ForgetPassword from '../screens/ForgetPassword';
import ResetPassword from '../screens/ResetPassword';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser())

    }, [dispatch])

    const { isAuthenticated, loading } = useSelector(state => state.auth)
    
    return (
        loading ? <Loader/> : (
            <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={isAuthenticated ? "Home" : "Verify"}
            >

                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Verify" component={VerifyScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="OnBoarding" component={OnboardingScreen} />

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
                 <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
                 <Stack.Screen name="PracticeScreen1" component={PracticeScreen1} />
                 <Stack.Screen name="DummyQuiz" component={DummyQuizScreen} />
                 <Stack.Screen name="DummyQuiz1" component={DummyQuizScreen1} />
                 <Stack.Screen name="SpandanBook" component={SpandanBook} />
                 <Stack.Screen name="SpandanBookDescription" component={SpandanBookDescription} />
                {/* <Stack.Screen name="Scan" component={Scan} /> */}
            </Stack.Navigator>
            {/* <Toast/> */}
        </NavigationContainer>
    )
    )

}


export default Main