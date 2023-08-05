import React from "react";
import "../styles/mainfeatures.scss";
import { BsFillCaretDownFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import attendee from "../images/attendee.svg"
import match from "../images/matchmaking.svg"
import analytics from "../images/analytics.svg"
import mobileapp from "../images/mobileapp.svg"

const Mainfeatures = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mainfeatures-section">
      <div className="heading">
        <h2>Our Main Features</h2>
        <BsFillCaretDownFill className="BsFillCaretDownFill" />
      </div>
      <div className="section1">
        <div className="text-container">
          <h3 data-aos="flip-up" data-aos-delay="100">
            Seamless Attendee Management
          </h3>
          <p data-aos="flip-up" data-aos-delay="100">
            Infivent offers a user-friendly registration process with dynamic
            forms and 2FA for enhanced security. Attendees can easily register,
            purchase tickets, and manage their profiles. With QR code entry and
            badge printing, event check-in becomes a breeze, ensuring a smooth
            and professional experience for your valued attendees.
          </p>
        </div>
        <div className="image-container">
          <img
            src={attendee}
            height="450"
            width="650"
          />
        </div>
      </div>
      <div className="section1">
        <div className="image-container">
          <img
            src={match}
            height="450"
            width="450"
          />
        </div>

        <div className="text-container ">
          <h3 data-aos="flip-up" data-aos-delay="100">
            AI-Powered Networking and Matchmaking
          </h3>
          <p data-aos="flip-up" data-aos-delay="100">
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
          <h3 data-aos="flip-up" data-aos-delay="100">
            Real-time Analytics and Reporting
          </h3>
          <p data-aos="flip-up" data-aos-delay="100">
            Stay informed and make data-driven decisions with Infivent's
            real-time event data and analytics dashboard. Gain valuable insights
            into attendee engagement, satisfaction, and exhibitor performance.
            Post-event surveys and feedback collection help you continuously
            improve your events and enhance future experiences.
          </p>
        </div>
        <div className="image-container">
          <img
            src={analytics}
            height="450"
            width="450"
          />
        </div>
      </div>
      <div className="section1">
        <div className="image-container">
          <img
            src={mobileapp}
            height="450"
            width="450"
          />
        </div>
        <div className="text-container">
          <h3 data-aos="flip-up" data-aos-delay="100">
            Customizable Event Website and Mobile App
          </h3>
          <p data-aos="flip-up" data-aos-delay="100">
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
