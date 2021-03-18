import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import api from '../services/api';

interface User{
  id:number;
  avatar_url:string;
  name:string;
  email:string
}

interface AuthState{
  token:string;
  user:User;
}

interface SignInCredentials{
  email:string;
  password:string
}

interface AuthContextData{
  user:User,
  signIn(credentials: SignInCredentials):Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider:React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@hlocation:token');
    const user = localStorage.getItem('@hlocation:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    console.log(response.data);

    localStorage.setItem('@hlocation:token', token);
    localStorage.setItem('@hlocation:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth():AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
