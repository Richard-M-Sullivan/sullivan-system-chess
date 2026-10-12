import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home.tsx';
import Login from './Pages/Login.tsx';
import Statistics from './Pages/Statistics.tsx';
import Study from './Pages/Study.tsx';
import Tournaments from './Pages/Tournament.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="study" element={<Study />} />
        <Route path="tournaments" element={<Tournaments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
