// src/components/RequiredAuth.jsx
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Navigate, useLocation } from 'react-router-dom';

export const RequiredAuth = ({ children }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const location = useLocation();

  if (!authState) {
    return <div>Cargando autenticación...</div>;
  }

  if (!authState.isAuthenticated) {
    // Guarda la ubicación actual para redirigir después del login
    oktaAuth.setOriginalUri(location.pathname);
    // Inicia el flujo de login
    oktaAuth.signInWithRedirect();
    return null; // O un spinner de carga
  }

  return children;
};