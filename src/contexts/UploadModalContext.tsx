import { createContext, useState } from 'react';

export const UploadModalContext = createContext({});

const UploadModalProvider = ({ children }: any) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <UploadModalContext.Provider
      value={{ isUploadModalOpen, setIsUploadModalOpen }}
    >
      {children}
    </UploadModalContext.Provider>
  );
};

export default UploadModalProvider;
