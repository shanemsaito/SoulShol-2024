import ProfileSetup from '../screens/profileSetup/profileSetup';
// import BioInfo from '../screens/profileSetup/bioInfo';
// import BeliefsOne from '../screens/profileSetup/beliefsOne';
// import BeliefsTwo from '../screens/profileSetup/beliefsTwo';
// import PersonalityOne from '../screens/profileSetup/personalityOne';
// import About from '../screens/profileSetup/about';
// import Interests from '../screens/profileSetup/interests';
import AppNavigator from '../navigators/appNavigator'
import { createSwitchNavigator, createAppContainer, withNavigation } from '@react-navigation/native';
import { createNativeStackNavigator}  from '@react-navigation/native-stack';

/*TODO

*/

const ProfileSetupStack = createNativeStackNavigator();

export default function ProfileSetupNavigator() {
    return (
        <ProfileSetupStack.Navigator initialRouteName="ProfileSetup" screenOptions={{headerShown: false}}>
            <ProfileSetupStack.Screen name="ProfileSetup" component={ProfileSetupNavigator}/>
            <ProfileSetupStack.Screen name="Home" component={AppNavigator}/>
        </ProfileSetupStack.Navigator>
    )
    
}

/* const ProfileSetupNavigator = createNativeStackNavigator({
    ProfileSetup: {
        screen: ProfileSetup
    },
    // BioInfo: {
    //     screen: BioInfo
    // },
    // BeliefsOne: {
    //     screen: BeliefsOne
    // },
    // BeliefsTwo: {
    //     screen: BeliefsTwo
    // },
    // PersonalityOne: {
    //     screen: PersonalityOne
    // },
    // Interests: {
    //     screen: Interests
    // },
    // About: {
    //     screen: About
    // },
    Home: {
        screen: AppNavigator
    }
},
    {
        initialRouteName: 'ProfileSetup'
    });

export default ProfileSetupNavigator; */
