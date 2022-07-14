import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Four04 from './Components/404/Four04';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<Four04 />} />
    </Routes>
  </BrowserRouter>
);
