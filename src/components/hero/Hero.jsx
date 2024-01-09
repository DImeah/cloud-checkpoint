import React from "react";
import "./hero.css";

// Hero component displaying the mission and vision of iFarms
const Hero = () => {
  return (
    <div className="hero-section">
      {/* Mission Section */}
      <div>
        {/* Heading for the Mission section */}
        <h1>Mission</h1>
        {/* Description of the mission */}
        <p>
          At iFarms, our mission is to contribute to global food security by
          pioneering innovative and sustainable rice farming practices. We are
          dedicated to cultivating high-quality rice products that not only meet
          the increasing demand for staple foods but also promote environmental
          consciousness in agriculture. Through our commitment to excellence, we
          strive to provide nourishing and sustainable solutions to consumers
          while fostering a resilient and secure food future.
        </p>
      </div>

      {/* Vision Section */}
      <div>
        {/* Heading for the Vision section */}
        <h1>Vision</h1>
        {/* Description of the vision */}
        <p>
          Empowering communities through rice farming, iFarms envisions a world
          where sustainable agriculture is at the forefront of food production.
          We aspire to be a leading force in the industry, recognized for our
          commitment to innovation, environmental responsibility, and the
          delivery of exceptional rice products. Our vision is to create a
          lasting impact on global food security, shaping a future where
          nutritious, sustainably produced rice is a cornerstone of thriving
          communities worldwide.
        </p>
      </div>
    </div>
  );
};

// Exporting the Hero component as the default export
export default Hero;
