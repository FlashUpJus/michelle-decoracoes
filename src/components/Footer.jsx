import React from "react";
import '../styles/Footer.css'; 
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import whatsapp from '../assets/whatsapp.svg';

const Footer = () => {
  return (
    <footer id="michelle-footer-exclusivo">
      <div className="footer-grid">
        <div className="footer-brand">
          <img 
            src="/img/logo-michelle.png" 
            alt="Michelle Decorações" 
            className="footer-logo" 
            style={{ filter: 'brightness(0) invert(1)' }} 
          />
         
        </div>

        {/* as ancoras aq deu b.o por que nao ta configurado as tags dos ou.
        Isaac: Tá de boa pai, já resolvi aqui*/}
        <div className="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#Carousel">Início</a></li>
            <li><a href="#Products">Produtos</a></li>
            <li><a href="#MapSection">Localização</a></li>
            <li><a href="#AboutUs">Sobre nós</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
        
          <p>📍 <a href="#map" style={{color: 'inherit', textDecoration: 'none'}}>Santa Maria, RS</a></p>
          <p>📞 <a href="tel:55999999999" style={{color: 'inherit', textDecoration: 'none'}}>(55) 99999-9999</a></p>
          <p>✉️ <a href="mailto:contato@michelle.com" style={{color: 'inherit', textDecoration: 'none'}}>contato@michelle.com</a></p>
        </div>

        <div className="footer-section">
          <h4>Siga-nos</h4>
          <div className="social-placeholder">
             {/* link real no href nao sei quais sao*/}
             <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
                <img src={instagram} alt="Instagram" />
             </a>
             <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">
                <img src={facebook} alt="Facebook" />
             </a>
             <a href="https://wa.me/5555999999999" target="_blank" rel="noreferrer" className="social-icon">
                <img src={whatsapp} alt="WhatsApp" />
             </a>
          </div>
        </div>
      </div>
      
      <div className="footer-copy-container">
        <div className="footer-copy-line"></div>
        <p>&copy; {new Date().getFullYear()} Michelle Decorações. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
