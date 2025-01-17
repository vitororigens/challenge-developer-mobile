import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Models } from '../screens/Models';


export function PrivateRoutes() {
    const { Navigator, Screen } = createStackNavigator()

    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name='home'
                component={Home}
            />
             <Screen
                name='models'
                component={Models}
            />
     
        </Navigator>
    )
}