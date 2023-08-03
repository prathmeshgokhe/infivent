import React from "react";
import "../styles/mainfeatures.scss";
import { BsFillCaretDownFill } from "react-icons/bs";

const Mainfeatures = () => {
  return (
    <div className="mainfeatures-section">
      <div className="heading">
        <h2>Our Main Features</h2>
        <BsFillCaretDownFill className="BsFillCaretDownFill" />
      </div>
      <div className="section1">
        <div className="text-container">
          <h3>Seamless Attendee Management</h3>
          <p>
            Infivent offers a user-friendly registration process with dynamic
            forms and 2FA for enhanced security. Attendees can easily register,
            purchase tickets, and manage their profiles. With QR code entry and
            badge printing, event check-in becomes a breeze, ensuring a smooth
            and professional experience for your valued attendees.
          </p>
        </div>
        <div className="image-container"></div>
      </div>
      <div className="section1">
        <div className="image-container"></div>

        <div className="text-container">
          <h3>AI-Powered Networking and Matchmaking</h3>
          <p>
            Infivent's advanced AI-driven matchmaking algorithms enable
            meaningful connections and business opportunities between attendees,
            exhibitors, and sponsors. Through personalized meeting scheduling
            and live chat features, your event participants can expand their
            networks and foster valuable collaborations effortlessly.
          </p>
        </div>
      </div>
      <div className="section1">
        <div className="text-container">
          <h3>Real-time Analytics and Reporting</h3>
          <p>
            Stay informed and make data-driven decisions with Infivent's
            real-time event data and analytics dashboard. Gain valuable insights
            into attendee engagement, satisfaction, and exhibitor performance.
            Post-event surveys and feedback collection help you continuously
            improve your events and enhance future experiences.
          </p>
        </div>
        <div className="image-container"></div>
      </div>
      <div className="section1">
        <div className="image-container"></div>
        <div className="text-container">
          <h3>Customizable Event Website and Mobile App</h3>
          <p>
            Infivent empowers you to create a stunning event website with
            branding options that match your event's identity. Additionally, our
            mobile app for attendees provides easy access to event information,
            personalized agendas, and real-time updates, enhancing attendee
            engagement and event success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainfeatures;
