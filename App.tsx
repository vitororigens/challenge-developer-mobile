import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from './src/contexts/authContext';
import { Routes } from './src/routes';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
         <AuthProvider>
         <Routes/>
         </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
  );
}

