// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithRouter from './App.jsx'; // <-- Importa AppWithRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);