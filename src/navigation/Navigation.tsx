import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Anime } from '../interfaces/animeInterface';

export type RootStackParams = {
  Home: undefined;
  Detail: Anime
}

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor: '#eee'
        }
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}