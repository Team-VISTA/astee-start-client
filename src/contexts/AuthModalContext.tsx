import { createContext, useState } from 'react';

export const AuthModalContext = createContext({});

const AuthModalProvider = ({ children }: any) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <AuthModalContext.Provider value={{ isAuthModalOpen, setIsAuthModalOpen }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalProvider;
