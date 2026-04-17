import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import MapSection from "../components/MapSection";
import ProductSection from "../components/ProductSection";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductSection/>
      <MapSection />
    </>
  );
}

export default Home;