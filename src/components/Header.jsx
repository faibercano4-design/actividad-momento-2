import React from 'react';
// Importamos el logo por defecto de React que ya viene en tus assets
import logo from '../assets/react.svg'; 

export default function Header() {
  const appName = "SantiDev Project"; // Variable dinámica en JSX

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Uso correcto de className y variables dinámicas */}
        <img src={logo} alt="Logo de React" className="header-logo" />
        <h1 className="header-title">{appName}</h1>
      </div>
      <nav className="header-nav">
        <button className="nav-btn">Inicio</button>
        <button className="nav-btn">Proyectos</button>
      </nav>
    </header>
  );
}