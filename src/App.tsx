import { Route, Routes } from 'react-router-dom';
import Analysis from './pages/Analysis';
import Main from './pages/Main';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
