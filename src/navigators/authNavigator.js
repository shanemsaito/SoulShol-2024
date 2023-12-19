// import React, { Component } from 'react';
// import { View } from 'react-native';
import LoginPage from '../screens/authentication/loginPage';
import RegisterPage from '../screens/authentication/registerPage';
import AppNavigator from '../navigators/appNavigator';
import ProfileSetupNavigator from '../navigators/profileSetupNavigator';
import ProfileSetup from '../screens/profileSetup/profileSetup';
import { createSwitchNavigator, createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator}  from '@react-navigation/native-stack';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
            <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="Login" component={LoginPage} />
                <AuthStack.Screen name="Register" component={RegisterPage} />
                <AuthStack.Screen name="MainApp" component={AppNavigator} />
                <AuthStack.Screen name="ProfileSetupNavigator" component={ProfileSetup} />
            </AuthStack.Navigator>
    ) 
}


// const AuthNavigator = createNativeStackNavigator({
//     Login: {
//         screen: LoginPage
//     },
//     Register: {
//         screen: RegisterPage
//     },
//     Home: {
//         screen: AppNavigator
//     },
//     ProfileSetupNavigator: {
//         screen: ProfileSetupNavigator
//     }
// },
//     {
//         initialRouteName: 'Login'
//     });

