import React from "react";
import "../styles/powerfeature.scss";
import human from "../images/human.png";
import note from "../images/note.png";
import home from "../images/home.png";
import mic from "../images/mic.png";
import network from "../images/network.png";
import sponsor from "../images/sponsorship.png";
import floor from "../images/floorplan.png";
import mobile from "../images/mobileintegration.png";
import analytics from "../images/analytics.png";
import integration from "../images/integration.png";
import message from "../images/message.png";
import payment from "../images/tickits.png";
import security from "../images/security.png";
import customer from "../images/customer.png";
import onsite from "../images/onsite.png";
import socialmedia from "../images/share.png";
import customize from "../images/customize.png";
import { MouseParallax } from "react-just-parallax";
const PowerFeature = () => {
  return (
    <div className="feature-section">
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.2}>
        <div className="bg-container" />
      </MouseParallax>
      <div className="fetaures-title">
        <h2>Powerful Features to Enhance Your Expo Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid-container">
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={human} alt="" />
            </div>
          </div>
          <h3>Event Creation and Management</h3>
          <ul>
            <li>
              - Create and manage multiple events and expos from a centralized
              dashboard.
            </li>
            <li>
              - Set event dates, times, locations, and recurring schedules.
            </li>
            <li> - Define event categories, tracks, and themes.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={note} alt="" />
            </div>
          </div>
          <h3>Registration and Attendee Management</h3>
          <ul>
            <li>
              - Customizable registration forms with a form builder for attendee
              data collection.
            </li>
            <li>
              - Online attendee registration, ticketing, and payment processing.
            </li>
            <li>- Attendee data management, analytics, and reporting.</li>
            <li>- Badge printing and attendee check-in features.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={home} alt="" />
            </div>
          </div>
          <h3>Exhibitor and Booth Management</h3>
          <ul>
            <li>
              - Exhibitor registration, booth assignment, and floor plan
              management.
            </li>
            <li>
              - Lead retrieval and exhibitor analytics for better ROI tracking.
            </li>
            <li>- Real-time booth availability updates and management.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={mic} alt="" />
            </div>
          </div>
          <h3>Speaker and Agenda Management</h3>
          <ul>
            <li>
              - Call for speakers, abstract submission, and speaker selection.
            </li>
            <li>
              - Session management and agenda creation with a schedule builder.
            </li>
            <li>- Speaker profiles and presentation materials integration.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={network} alt="" />
            </div>
          </div>
          <h3>Networking and Matchmaking</h3>
          <ul>
            <li>
              - Attendee networking features to foster meaningful connections.
            </li>
            <li>- AI-powered matchmaking algorithms for business matching.</li>
            <li> - Meeting scheduling and appointment management.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={sponsor} alt="" />
            </div>
          </div>
          <h3>Sponsorship and Advertising Management</h3>
          <ul>
            <li>- Sponsorship package creation and management.</li>
            <li>- Digital advertising opportunities and placements.</li>
            <li> - ROI tracking for sponsors and advertisers.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={floor} alt="" />
            </div>
          </div>
          <h3>Floor Plan and Venue Management</h3>
          <ul>
            <li>- Interactive floor plan for exhibitors and attendees.</li>
            <li>- Venue layout management and seating arrangements.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={mobile} alt="" />
            </div>
          </div>
          <h3>Mobile App Integration</h3>
          <ul>
            <li>
              - Mobile app for event attendees with personalized agenda and
              networking features.
            </li>
            <li>- Real-time event updates and notifications.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={analytics} alt="" />
            </div>
          </div>
          <h3>Real-Time Analytics and Reporting</h3>
          <ul>
            <li>- Real-time event data and analytics dashboard.</li>
            <li>- Attendee engagement and satisfaction tracking.s.</li>
            <li>- Post-event surveys and feedback collection.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={message} alt="" />
            </div>
          </div>
          <h3>Communication and Messaging</h3>
          <ul>
            <li>
              - Email marketing and communication tools for event updates and
              reminders.
            </li>
            <li>
              - Push notifications and in-app messaging for important
              announcements.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={integration} alt="" />
            </div>
          </div>
          <h3>Integration and API</h3>
          <ul>
            <li>
              - Seamless integration with popular CRM and marketing automation
              platforms.
            </li>
            <li>- API access for data syncing and third-party integrations</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={payment} alt="" />
            </div>
          </div>
          <h3>Payment and Financial Management</h3>
          <ul>
            <li>
              - Online payment processing for registration fees and
              sponsorships.
            </li>
            <li>- Financial reporting, invoicing, and payment tracking.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={security} alt="" />
            </div>
          </div>
          <h3>Security and Privacy</h3>
          <ul>
            <li>- Data encryption and secure payment processing.</li>
            <li>- Compliance with data protection regulations (e.g., GDPR).</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={customer} />
            </div>
          </div>
          <h3>Customer Support and Training</h3>
          <ul>
            <li>- Dedicated customer support and training resources.</li>

            <li>- Help center, documentation, and video tutorials.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={onsite} alt="" />
            </div>
          </div>
          <h3>On-Site Event Management</h3>
          <ul>
            <li>
              - On-site event check-in and attendee management through mobile
              devices.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={socialmedia} />
            </div>
          </div>
          <h3>Social Media Integration</h3>
          <ul>
            <li>
              - Integration with social media channels for event promotion and
              engagement.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              <img src={customize} />
            </div>
          </div>
          <h3>Customizable Branding and Themes</h3>
          <ul>
            <li>
              - Branding options and customizable themes to match the event's
              identity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PowerFeature;
