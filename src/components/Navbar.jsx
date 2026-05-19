import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src="/img/logo-michelle.png" alt="Michelle Decorações" />
        </div>

        <nav className="nav-links" aria-label="Navegacao principal">
          <a href="#Carousel">Início</a>
          <a href="#Products">Produtos</a>
          <a href="#Team">Nossa Equipe</a>
          <a href="#AboutUs">Sobre Nós</a>
          <a href="#MapSection">Localização</a>
          <a href="#michelle-footer-exclusivo">Contato</a>
        </nav>
      </header>
        <nav className="nav-2links" aria-label="Navegacao principal">
          <a href="#cortinas">Cortinas e Persianas</a>
          <a href="#tapetes">Tapetes</a>
          <a href="">Almofadas</a>
          <a href="">Tecidos</a>
        </nav>
    </div>
  );
}

export default Navbar;
