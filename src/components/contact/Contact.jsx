import React from "react";

// Importing the Form and Info components
import Form from "./Form";
import Info from "./Info";

// Importing styles for the Contact component
import "./contact.css";

// Contact component rendering the Form and Info components
const Contact = () => (
  <>
    {/* Container for the contact section, including the Form and Info components */}
    <div className="contact-section">
      {/* Form component for user input */}
      <Form />
      {/* Info component displaying contact information */}
      <Info />
    </div>
  </>
);

// Exporting the Contact component as the default export
export default Contact;
