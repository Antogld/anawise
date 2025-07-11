import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WebApp from './apps/web/src/app';
import WebsiteApp from './apps/website/app';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Percorsi pubblici del sito web */}
        <Route path="/" element={<WebsiteApp />} />
        
        {/* Percorsi di autenticazione */}
        <Route path="/login" element={<WebApp />} />
        <Route path="/register" element={<WebApp />} />
        
        {/* Percorsi autenticati dell'app */}
        <Route path="/dashboard/*" element={<WebApp />} />
        
        {/* Reindirizzamento per percorsi non trovati */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
