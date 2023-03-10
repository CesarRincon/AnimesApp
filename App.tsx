import { Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { Fade } from './src/screens/Fade';
import { GradientProvider } from './src/api/context/GradientContext';


const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>

        <Navigation />
      </AppState>
      {/* <Fade /> */}
    </NavigationContainer>

  )
}

export default App
