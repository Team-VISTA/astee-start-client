import { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
