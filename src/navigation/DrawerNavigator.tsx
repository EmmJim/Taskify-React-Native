import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{
                headerShown: false,
                drawerType: 'front',

                drawerActiveBackgroundColor: '#2E3A59',
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#2E3A59',
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Add/Edit task" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}