import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import MapSection from "../components/MapSection";
import ProductSection from "../components/ProductSection";
import Team from "../components/Team";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductSection/>
      <MapSection />
      <Team/>
    </>
  );
}

export default Home;