import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import MapSection from "../components/MapSection";
import ProductSection from "../components/ProductSection";
import Team from "../components/Team";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductSection/>
      <Team/>
      <AboutUs/>
      <MapSection />
      <Footer/> 
    </>
  );
}

export default Home;