// src/components/AdminDashboard.jsx
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { authState } = useOktaAuth();

  if (!authState || !authState.isAuthenticated) {
    return null; // O un mensaje de "No autorizado"
  }

  return (
    <div>
      <h2>Panel de Administración</h2>
      <p>Bienvenido, {authState.idToken.claims.name}!</p>
      <p>Este contenido es privado y solo tú puedes verlo.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default AdminDashboard;