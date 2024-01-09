// Importing necessary styles and components
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Map from "./components/map/Map";

// Defining a location object with address, latitude, and longitude
const location = {
  address: "iFarms KM 12 Gboko Road Makurdi",
  lat: 7.7205278,
  lng: 8.6567222,
};

// Main App component
function App() {
  // Returning JSX for the App component
  return (
    <>
      {/* Navigation bar component */}
      <Navbar />

      {/* Hero section component */}
      <Hero />

      {/* Contact section component */}
      <Contact />

      {/* Map component with location and zoom level */}
      <Map location={location} zoomLevel={17} />
    </>
  );
}

// Exporting the App component as the default export
export default App;
