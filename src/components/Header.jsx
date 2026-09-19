import React from "react";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Header() {
  const appName = "SantiDev Project";
  const { favorites } = useFavorites();

  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="header-title">{appName}</h1>
      </div>

      <nav className="header-nav">
        <NavLink to="/" className="nav-btn">
          Inicio
        </NavLink>

        <NavLink to="/catalogo" className="nav-btn">
          Catálogo
        </NavLink>

        <NavLink to="/favoritos" className="nav-btn">
          Favoritos ({favorites.length})
        </NavLink>
      </nav>
    </header>
  );
}