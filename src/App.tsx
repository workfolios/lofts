import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Music from './pages/Music';
import Editorial from './pages/Editorial';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="editorial" element={<Editorial />} />
          <Route path="community" element={<Navigate to="/#thread" replace />} />
          <Route path="archive" element={<Navigate to="/editorial" replace />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
