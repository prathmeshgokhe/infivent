import React from "react";
import "../styles/powerfeature.scss";
import human from "../images/human.png"
import note from "../images/note.png"
import home from "../images/home.png"
import mic from "../images/mic.png"
import network from "../images/network.png"
import sponsor from "../images/sponsorship.png"
import floor from "../images/floorplan.png"
import mobile from "../images/mobileintegration.png"
import analytics from "../images/analytics.png"
import integration from "../images/integration.png"

const PowerFeature = () => {
  return (
    <div className="feature-section">
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
              {/* <Image
                sizes="100%"
                fill
                alt={feature.heading}
                src={feature.image.url}
              /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={note}
                height="30"
                width="50"
              />
            </div>
          </div>
          <h3>Registration and Attendee Management</h3>
          <ul>
            <li>
              - Customizable registration forms with a form builder for attendee data collection.
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={home}
                height="30"
                width="50"
              />
            </div>
          </div>
          <h3>Exhibitor and Booth Management</h3>
          <ul>
            <li>
              - Exhibitor registration, booth assignment, and floor plan management.
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={mic}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={network}
                height="30"
                width="50"
              />
            </div>
          </div>
          <h3>Networking and Matchmaking</h3>
          <ul>
            <li>
              - Attendee networking features to foster meaningful connections.
            </li>
            <li>
              - AI-powered matchmaking algorithms for business matching.
            </li>
            <li> - Meeting scheduling and appointment management.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={sponsor}
                height="30"
                width="50"
              />
            </div>
          </div>
          <h3>Sponsorship and Advertising Management</h3>
          <ul>
            <li>
              - Sponsorship package creation and management.
            </li>
            <li>
              - Digital advertising opportunities and placements.
            </li>
            <li> - ROI tracking for sponsors and advertisers.</li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={floor}
                height="30"
                width="50"
              />
            </div>
          </div>
          <h3>Floor Plan and Venue Management</h3>
          <ul>
            <li>
              - Interactive floor plan for exhibitors and attendees.
            </li>
            <li>
              - Venue layout management and seating arrangements.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={mobile}
                height="30"
                width="50"
              />
            </div>
          </div>
          <h3>Mobile App Integration</h3>
          <ul>
            <li>
              - Mobile app for event attendees with personalized agenda and networking features.
            </li>
            <li>
              - Real-time event updates and notifications.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="icon-container">
            <div className="img-container">
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
              {/* <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                /> */}
              <img
                src={human}
                height="30"
                width="50"
              />
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
      </div>
    </div>
  );
};

export default PowerFeature;
