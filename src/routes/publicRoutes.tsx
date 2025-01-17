import { } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { createStackNavigator } from '@react-navigation/stack';


export function PublicRoutes() {
     const { Navigator, Screen } = createStackNavigator()

    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name='Signin'
                component={SignIn}
            />
     
        </Navigator>
    )
}