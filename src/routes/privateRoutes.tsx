import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';


export function PrivateRoutes() {
    const { Navigator, Screen } = createStackNavigator()

    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name='home'
                component={Home}
            />
     
        </Navigator>
    )
}