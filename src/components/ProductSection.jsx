import "../styles/product.css";

function ProductSection() {
  return (
    <section id="Products" className="product-section">
      <div className="container">
        <h1 className="title">Galeria de produtos</h1>

        <h2 className="category-title">Cortinas</h2>

        <div className="products-list">

          {/* PRODUTO 1 */}
          <div className="product-item">
            <div className="product-left">
              <div className="product-image">
                <img src="/img/cortina-rolo-white.jpg" alt="cortina branca" />
              </div>

              <div className="product-buttons">
                <button className="btn-primary">
                  Solicitar Orçamento
                </button>
                <button className="btn-secondary">
                  Ver mais imagens
                </button>
              </div>
            </div>

            <div className="product-info">
              <h3>Cortinas Brancas Exemplo</h3>
              <p>
                Cortinas realmente brancas de exemplo para descrição mais detalhada.
              </p>
            </div>
          </div>

          {/* PRODUTO 2 */}
          <div className="product-item">
            <div className="product-left">
              <div className="product-image">
                <img src="/img/cortina-rolo-white.jpg" alt="" />
              </div>

              <div className="product-buttons">
                <button className="btn-primary">
                  Solicitar Orçamento
                </button>
                <button className="btn-secondary">
                  Ver mais imagens
                </button>
              </div>
            </div>

            <div className="product-info">
              <h3>Cortinas Brancas Exemplo</h3>
              <p>
                Cortinas realmente brancas de exemplo para descrição mais detalhada.
              </p>
            </div>
          </div>

          {/* PRODUTO 3 */}
          <div className="product-item">
            <div className="product-left">
              <div className="product-image">
                <img src="/img/cortina-rolo-white.jpg" alt="" />
              </div>

              <div className="product-buttons">
                <button className="btn-primary">
                  Solicitar Orçamento
                </button>
                <button className="btn-secondary">
                  Ver mais imagens
                </button>
              </div>
            </div>

            <div className="product-info">
              <h3>Cortinas Brancas Exemplo</h3>
              <p>
                Cortinas realmente brancas de exemplo para descrição mais detalhada.
              </p>
            </div>
          </div>

        </div>

        <h2 className="category-title">Tapetes</h2>
        <div className="products-list">

          {/* PRODUTO 1 */}
          <div className="product-item">
            <div className="product-left">
              <div className="product-image">
                <img src="/img/cortina-rolo-white.jpg" alt="" />
              </div>

              <div className="product-buttons">
                <button className="btn-primary">
                  Solicitar Orçamento
                </button>
                <button className="btn-secondary">
                  Ver mais imagens
                </button>
              </div>
            </div>

            <div className="product-info">
              <h3>Cortinas Brancas Exemplo</h3>
              <p>
                Cortinas realmente brancas de exemplo para descrição mais detalhada.
              </p>
            </div>
          </div>

          {/* PRODUTO 2 */}
          <div className="product-item">
            <div className="product-left">
              <div className="product-image">
                <img src="/img/cortina-rolo-white.jpg" alt="" />
              </div>

              <div className="product-buttons">
                <button className="btn-primary">
                  Solicitar Orçamento
                </button>
                <button className="btn-secondary">
                  Ver mais imagens
                </button>
              </div>
            </div>

            <div className="product-info">
              <h3>Cortinas Brancas Exemplo</h3>
              <p>
                Cortinas realmente brancas de exemplo para descrição mais detalhada.
              </p>
            </div>
          </div>

          {/* PRODUTO 3 */}
          <div className="product-item">
            <div className="product-left">
              <div className="product-image">
                <img src="/img/cortina-rolo-white.jpg" alt="" />
              </div>

              <div className="product-buttons">
                <button className="btn-primary">
                  Solicitar Orçamento
                </button>
                <button className="btn-secondary">
                  Ver mais imagens
                </button>
              </div>
            </div>

            <div className="product-info">
              <h3>Cortinas Brancas Exemplo</h3>
              <p>
                Cortinas realmente brancas de exemplo para descrição mais detalhada.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductSection;