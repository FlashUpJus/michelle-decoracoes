import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/img/logo-michelle.png" alt="Michelle Decorações" />
      </div>

      <nav className="nav-links">
        <a href="#">Início</a>
        <a href="#">Localização</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Navbar;