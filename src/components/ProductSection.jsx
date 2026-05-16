import React from "react";
import "../styles/product.css";

function ProductSection() {
  return (
    <section id="Products" className="product-section">
      <div className="container">
        <h2 className="title">Galeria de produtos</h2>

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
                <img
                  src="/img/cortina-rolo-white.jpg"
                  alt="Cortina branca para ambientes internos"
                />
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
                <img
                  src="/img/cortina-rolo-white.jpg"
                  alt="Cortina branca com caimento suave"
                />
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
                <img
                  src="/img/cortina-rolo-white.jpg"
                  alt="Tapete e cortina em ambiente decorado"
                />
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
                <img
                  src="/img/cortina-rolo-white.jpg"
                  alt="Tapete para sala com acabamento elegante"
                />
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
                <img
                  src="/img/cortina-rolo-white.jpg"
                  alt="Tapete decorativo para ambiente aconchegante"
                />
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
