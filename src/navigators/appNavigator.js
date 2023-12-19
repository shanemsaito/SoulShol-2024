import React from 'react';
import { StyleSheet, Image, Text, Icon } from 'react-native';
import { NavigationContainer, withNavigation, createSwitchNavigator } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/mainApp/homePage';
import SearchNavigator from '../navigators/searchNavigator';
import MessagesPage from '../screens/mainApp/messaging/messagesPage';

const AppTab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <AppTab.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName = "Home"
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ?
                        require('../resources/icons/homeTabIconSelected.png') :
                        require('../resources/icons/homeTabIconUnselected.png')
                } else if (route.name === "SearchTab") {
                    iconName = focused ?
                        require('../resources/icons/searchTabIconSelected.png') :
                        require('../resources/icons/searchTabIconUnselected.png')
                } else if (route.name === "Messages") {
                    iconName = focused ?
                        require('../resources/icons/messagesTabIconSelected.png') :
                        require('../resources/icons/messagesTabIconUnselected.png')
                }

                return <Image source={iconName} style={styles.icon} resizeMode="center"/>
            }
        })}>
        <AppTab.Screen name="Home" component={HomePage} />
        <AppTab.Screen name="SearchTab" component={SearchNavigator}/>
        <AppTab.Screen name="Messages" component={MessagesPage}/>

    </AppTab.Navigator>
    )

}

// const AppNavigator = createBottomTabNavigator({
//     Home: {
//         screen: HomePage,
//         navigationOptions: {
//             tabBarIcon: (({focused}) => {
//                 return <Image
//                     style={styles.icon}
//                     resizeMode='center'
//                     source={
//                         focused ?
//                             require('../resources/icons/homeTabIconSelected.png') :
//                             require('../resources/icons/homeTabIconUnselected.png')
//                     }
//                 />
//             })
//         }
//     },
//     SearchTab: {
//         screen: SearchNavigator,
//         navigationOptions: {
//             tabBarIcon: (({focused}) => {
//                 return <Image
//                     style={styles.icon}
//                     resizeMode='center'
//                     source={
//                         focused ?
//                             require('../resources/icons/searchTabIconSelected.png') :
//                             require('../resources/icons/searchTabIconUnselected.png')
//                     }
//                 />
//             })
//         }
//     },
//     Messages: {
//         screen: MessagesPage,
//         navigationOptions: {
//             tabBarIcon: (({focused}) => {
//                 return <Image
//                     style={styles.icon}
//                     resizeMode='center'
//                     source={
//                         focused ?
//                             require('../resources/icons/messagesTabIconSelected.png') :
//                             require('../resources/icons/messagesTabIconUnselected.png')
//                     }
//                 />
//             })
//         }
//     }
// },
//     {
//         initialRouteName: 'Home',
//         tabBarOptions: {
//             showLabel: false,
//             style: {
//                 paddingHorizontal: 20
//             }
//         }
//     }
// );

const styles = StyleSheet.create({
    icon: {
        height: 20
    },
    tabBar: {
        paddingHorizontal: 10
    }
});
