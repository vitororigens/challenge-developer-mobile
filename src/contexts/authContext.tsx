import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthProviderProps {
  children: ReactNode;
}

interface SigninData {
  user: string;
  password: string;
}

interface AuthData {
  id: string;
  user: string;
}

export interface AuthContextDataProps {
  user: AuthData | null;
  signIn: (data: SigninData) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthData | null>(null);

  const signIn = async (credentials: SigninData) => {
    try {
      const response = await axios.post('https://test-api-y04b.onrender.com/signIn', credentials);
      const { data } = response;
      setUser(data);
      await AsyncStorage.setItem('user', JSON.stringify(data));
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Login failed');
      } else {
        throw new Error('Login failed');
      }
    }
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn: signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
