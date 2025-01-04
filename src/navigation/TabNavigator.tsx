import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { globalColors } from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                tabBarInactiveBackgroundColor: globalColors.primary,
                tabBarActiveBackgroundColor: globalColors.primary,
                tabBarInactiveTintColor: globalColors.secondary,
                tabBarActiveTintColor: globalColors.secondaryPurple,
                tabBarStyle: {
                    backgroundColor: globalColors.primary,
                    elevation: 0,
                    borderColor: "transparent",
                    shadowColor: "transparent",
                }
            }}

        >
            <Tab.Screen name="Home" options={{tabBarIcon: ({focused}) => <Ionicons name="home-sharp" size={24} color={focused ?  globalColors.secondaryPurple : globalColors.secondary} />}} component={HomeScreen} />
            <Tab.Screen name="Task List" options={{tabBarIcon: ({focused}) => <FontAwesome5 name="clipboard-list" size={24} color={focused ?  globalColors.secondaryPurple : globalColors.secondary} />}} component={ProfileScreen} />
            <Tab.Screen name="Add Task" options={{tabBarIcon: ({focused}) => <Entypo name="add-to-list" size={24} color={focused ?  globalColors.secondaryPurple : globalColors.secondary} />}} component={ProfileScreen} />
        </Tab.Navigator>
    );
}