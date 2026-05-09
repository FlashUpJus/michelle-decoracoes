import "../styles/MapSection.css";

function MapSection() {
  return (
  <section id = "MapSection">
    <div className="map-container">
      <div className="map-text">
        <h2>Como nos encontrar</h2>

        <p><strong>Localização:</strong></p>
        <p>Rua Exemplo, 123</p>
        <p>Santa Maria - RS</p>
        <p>Brasil</p>
      </div>

      <div className="map-box">
        <iframe
          src="https://www.google.com/maps?q=Santa+Maria+RS&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
  );
}

export default MapSection;