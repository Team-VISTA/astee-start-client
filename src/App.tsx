import { Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import AuthModalProvider from './contexts/AuthModalContext';
import UploadModalProvider from './contexts/UploadModalContext';
import Analysis from './pages/Analysis';
import Main from './pages/Main';
import Projects from './pages/Projects';

function App() {
  return (
    <AuthProvider>
      <AuthModalProvider>
        <UploadModalProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </UploadModalProvider>
      </AuthModalProvider>
    </AuthProvider>
  );
}

export default App;
