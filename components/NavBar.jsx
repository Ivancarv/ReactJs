import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ padding: "10px", display: "flex", justifyContent: "space-between", backgroundColor: "#f8f9fa" }}>
      <div>
        <img src="logo.png" alt="Logo de la tienda" style={{ height: "40px" }} />
      </div>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0 }}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};