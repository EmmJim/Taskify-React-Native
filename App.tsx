import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { SideMenuNavigator } from './src/navigation/DrawerNavigator';
import { TabNavigator } from './src/navigation/TabNavigator';

type TaskStatus = {
  1: "In-progress",
  2: "Completed"
}

export default function App() {
  
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  );
}

