import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

const productos = [
  {
    id: 1,
    nombre: "Camiseta deportiva",
    categoria: "Ropa",
  },
  {
    id: 2,
    nombre: "Tenis deportivos",
    categoria: "Calzado",
  },
  {
    id: 3,
    nombre: "Balón de fútbol",
    categoria: "Deportes",
  },
  {
    id: 4,
    nombre: "Gorra deportiva",
    categoria: "Accesorios",
  },
];

export default function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section>
      <h1>Catálogo</h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div>
        {productosFiltrados.map((producto) => {
          const esFavorito = favorites.some(
            (favorite) => favorite.id === producto.id
          );

          return (
            <article key={producto.id}>
              <h2>{producto.nombre}</h2>
              <p>Categoría: {producto.categoria}</p>

              <button onClick={() => toggleFavorite(producto)}>
                {esFavorito
                  ? "Quitar de favoritos"
                  : "Agregar a favoritos"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}