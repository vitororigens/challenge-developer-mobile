import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/authContext';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
         <AuthProvider>
         <Home/>
         </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
  );
}

