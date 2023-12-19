import { createBottomTabNavigator, createAppContainer, withNavigation, createSwitchNavigator } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import ResultsPage from '../screens/mainApp/searchPage/resultsPage';
import FilterTab from '../screens/mainApp/searchPage/filterTab';

const SearchStack = createNativeStackNavigator();

export default function SearchNavigator() {
    return (
        <SearchStack.Navigator initialRouteName="Results" screenOptions={{headerShown: false}}>
            <SearchStack.Screen name="Results" component={ResultsPage}/>
            <SearchStack.Screen name="Filter" component={FilterTab}/>
        </SearchStack.Navigator>
    )
    

}

// const SearchNavigator = createNativeStackNavigator({
//     Results: {
//         screen: ResultsPage
//     },
//     Filter: {
//         screen: FilterTab
//     }
// },
//     {
//         initialRouteName: 'Results'
//     });

// export default (SearchNavigator);
