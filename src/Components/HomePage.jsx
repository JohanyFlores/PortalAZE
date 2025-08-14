// src/components/HomePage.jsx
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'


const HomePage = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();
  const logout = async () => oktaAuth.signOut();

  if (!authState) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1 className={styles.bienvenido}>Bienvenido al Portal AZE</h1>
      {authState.isAuthenticated ? (
        <div>
          <p>¡Has iniciado sesión!</p>
          <Link to="/dashboard">Ir al Panel de Administración</Link>
          <button  onClick={logout}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <p claseName={styles.peticionInicio}>Por favor, inicia sesión para acceder al panel</p>
          <button className={styles.loginButton} onClick={login}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;