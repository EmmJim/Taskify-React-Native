import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddTask from '../screens/AddTask';
import { globalColors } from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SettingsScreen from '../screens/SettingsScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                tabBarInactiveBackgroundColor: route.name === 'Add Task' ? globalColors.white : globalColors.secondary,
                tabBarActiveBackgroundColor: route.name === 'Add Task' ? globalColors.white : globalColors.secondary,
                tabBarInactiveTintColor: globalColors.secondaryWhite,
                tabBarActiveTintColor:  route.name === 'Add Task' ? globalColors.secondary : globalColors.white,

                tabBarStyle: {
                    backgroundColor: route.name === 'Add Task' ? globalColors.white : globalColors.secondary,
                    elevation: 0,
                    borderColor: "transparent",
                    shadowColor: "transparent",
                    paddingTop: 5
                },
                statusBarStyle: route.name === 'Add Task' ? 'light-content' : 'dark-content'
            })}

        >
            <Tab.Screen name="Home" options={{tabBarIcon: ({focused}) => <Ionicons name="home-sharp" size={24} color={focused ?  globalColors.white : globalColors.secondaryWhite} />}} component={HomeScreen} />
            <Tab.Screen name="Add Task" options={{tabBarIcon: ({focused}) => <Entypo name="add-to-list" size={24} color={focused ?  globalColors.secondary : globalColors.secondaryWhite} />}} component={AddTask} />
            <Tab.Screen name="Profile" options={{tabBarIcon: ({focused}) => <FontAwesome5 name="user" size={24} color={focused ?  globalColors.white : globalColors.secondaryWhite} />}} component={ProfileScreen} />
            <Tab.Screen name="Settings" options={{tabBarIcon: ({focused}) => <FontAwesome name="gear" size={24} color={focused ?  globalColors.white : globalColors.secondaryWhite} />}} component={SettingsScreen} />
        </Tab.Navigator>
    );
}