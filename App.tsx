import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Home/>
        </NavigationContainer>
      </ThemeProvider>
  );
}

