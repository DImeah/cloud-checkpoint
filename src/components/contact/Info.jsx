// Importing necessary components and icons from the @iconify/react library
import { Icon, InlineIcon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker-radius-outline";
import phoneIcon from "@iconify/icons-mdi/phone-outline";
import emailIcon from "@iconify/icons-mdi/email-multiple-outline";
import facebookIcon from "@iconify/icons-mdi/facebook";
import linkedinIcon from "@iconify/icons-mdi/linkedin";
import twitterIcon from "@iconify/icons-mdi/twitter";

// Importing the CSS styles for the Info component
import "./info.css";

// Array of contact details with values and corresponding icons
const contactDetails = [
  {
    value: "Km 12 Gboko Road, Makurdi Benue State.",
    icon: locationIcon,
  },
  { value: "08168777841", icon: phoneIcon },
  { value: "iFarms@support.com", icon: emailIcon },
];

// Function to render contact details
const renderContactDetails = () =>
  contactDetails.map((detail) => (
    <p key={detail.value} className="info-detail">
      {/* Displaying the InlineIcon and the contact detail value */}
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ));

// Function to render social media icons
const renderIcons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-icon" />
  ));

// Info component
const Info = () => (
  <section className="info">
    {/* Heading for the contact information section */}
    <h2 className="info-h2">Contact information</h2>

    {/* Container for rendering contact details */}
    <div className="info-details-container">{renderContactDetails()}</div>

    {/* Container for rendering social media icons */}
    <div className="info-icons-container">{renderIcons()}</div>
  </section>
);

// Exporting the Info component as the default export
export default Info;
