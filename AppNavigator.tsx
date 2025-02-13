import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './src/navigation/DrawerNavigator';
import TaskVisualizerScreen from './src/screens/TaskVisualizerScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={SideMenuNavigator} />
                <Stack.Screen name="TaskVisualizer" component={TaskVisualizerScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};