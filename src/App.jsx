// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback} from '@okta/okta-react';

import HomePage from './Components/HomePage.jsx';
import AdminDashboard from './components/AdminDashboard';
import { RequiredAuth } from './components/RequiredAuth.jsx';

// 1. Configuración de Okta (reemplaza con tus datos)
const oktaAuth = new OktaAuth({
  
  issuer: 'https://integrator-2408382.okta.com/oauth2/default',
  clientId: '0oau5a39hlQTiIeIE697',
  redirectUri: window.location.origin + '/login/callback'
});

// 2. Componente App que define las rutas y la lógica
const App = () => {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login/callback' element={<LoginCallback />} />
        <Route 
          path='/dashboard' 
          element={
            <RequiredAuth>
              <AdminDashboard />
            </RequiredAuth>
          } 
        />
      </Routes>
    </Security>
  );
};

// 3. Componente principal que envuelve todo en el Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;