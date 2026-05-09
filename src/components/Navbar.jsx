import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/img/logo-michelle.png" alt="Michelle Decorações" />
      </div>

      <nav className="nav-links">
        <a href="#Carousel">Início</a>
        <a href="#Products">Produtos</a>
        <a href="#Team">Nossa Equipe</a>
        <a href="#AboutUs">Sobre Nós</a>
        <a href="#MapSection">Localização</a>
        <a href="#michelle-footer-exclusivo">Contato</a>
      </nav>
    </header>
  );
}

export default Navbar;