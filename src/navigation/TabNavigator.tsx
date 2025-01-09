import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddTask from '../screens/AddTask';
import { globalColors } from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                tabBarInactiveBackgroundColor: route.name === 'Add Task' ? globalColors.white : globalColors.primary,
                tabBarActiveBackgroundColor: route.name === 'Add Task' ? globalColors.white : globalColors.primary,
                tabBarInactiveTintColor: globalColors.secondary,
                tabBarActiveTintColor: globalColors.secondaryPurple,

                tabBarStyle: {
                    backgroundColor: route.name === 'Add Task' ? globalColors.white : globalColors.primary,
                    elevation: 0,
                    borderColor: "transparent",
                    shadowColor: "transparent",
                },
                statusBarStyle: route.name === 'Add Task' ? 'light-content' : 'dark-content'
            })}

        >
            <Tab.Screen name="Home" options={{tabBarIcon: ({focused}) => <Ionicons name="home-sharp" size={24} color={focused ?  globalColors.secondaryPurple : globalColors.secondary} />}} component={HomeScreen} />
            <Tab.Screen name="Task List" options={{tabBarIcon: ({focused}) => <FontAwesome5 name="clipboard-list" size={24} color={focused ?  globalColors.secondaryPurple : globalColors.secondary} />}} component={ProfileScreen} />
            <Tab.Screen name="Add Task" options={{tabBarIcon: ({focused}) => <Entypo name="add-to-list" size={24} color={focused ?  globalColors.secondaryPurple : globalColors.secondary} />}} component={AddTask} />
        </Tab.Navigator>
    );
}