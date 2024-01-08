import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Map from "./components/map/Map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 7.7205278,
  lng: 8.6567222,
};

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      <Map location={location} zoomLevel={17} />
    </>
  );
}

export default App;
