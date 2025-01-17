import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from './src/contexts/authContext';
import { Routes } from './src/routes';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontLoader] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });


  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          {fontLoader ? <Routes /> : <ActivityIndicator />}
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

