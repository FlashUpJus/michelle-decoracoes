import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import MapSection from "../components/MapSection";
import ProductSection from "../components/ProductSection";
import Team from "../components/Team";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Seo from "../components/Seo";

function Home() {
  return (
    <>
      <Seo
        title="Michelle Decoracoes | Cortinas, Tapetes e Decoracao em Santa Maria - RS"
        description="Conheca a Michelle Decoracoes e descubra cortinas, tapetes e solucoes em decoracao para ambientes residenciais e comerciais."
        keywords="michelle decoracoes, cortinas, tapetes, decoracao, persianas, santa maria rs"
      />
      <Navbar />
      <main>
        <h1 className="sr-only">
          Michelle Decoracoes em Santa Maria - RS
        </h1>
        <p className="sr-only">
          Cortinas, tapetes e solucoes em decoracao para transformar o seu
          ambiente com elegancia e personalidade.
        </p>
        <Carousel />
        <ProductSection />
        <Team />
        <AboutUs />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
