import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-h2">
        <h2>Sobre nós</h2>
      </div>
    <section className="about-section">

      <div className="about-card">

        <div className="about-card-text">
          <h3>Como começamos?</h3>
          <p>Descrição</p>
        </div>
      </div>

      <div className="about-card">

        <div className="about-card-text">
          <h3>Que tipo de produtos oferecemos?</h3>
          <p>Descrição</p>
        </div>
      </div>

      <div className="about-card">

        <div className="about-card-text">
          <h3>Como faço para adquirir o produto?</h3>
          <p>Descrição do passo a passo</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutUs;