import React from "react";
import Bhanu from "../images/bhanu.jpg";
import rama from "../images/rama.jpg";
import Neerja from "../images/neerja.jpg";
import divya from "../images/divya.jpg";
import Sachin from "../images/sachin.jpg";
import priti from "../images/priti.jpg";
import "../styles/mentorteam.scss";
import person from "../images/person.png";

const MentorTeam = () => {
  return (
    <>
      <div className="mentor-team-container">
        <div className="mentor-team-content">
          <div className="team">
            <h1>Team</h1>
            <div className="grid-containter-team">
              <div className="team-card">
                <img src={person} alt="" />
                <h6>Wasudev Mishra </h6>
                <p>
                  Founder & CEOSocial Entrepreneur, Ashoka YOUNG Changemaker,Ex
                  UNCTAD, Alumni AFS, India 6 Years in Tech, State Alumni, USDOS
                </p>
              </div>
              <div className="team-card">
                <img src={person} alt="" />
                <h6> Anshul Nagpure</h6>
                <p>
                  Chief Operations Officer 4+ Years in OperationsAutomobile,
                  Tech, Global EducationNCC Cadet, Ex. AISEC​
                </p>
              </div>
              <div className="team-card">
                <img src={person} alt="" />
                <h6>Sahil Satpute </h6>
                <p>
                  Chief Services OfficerArchitect, Product Designer, UI/UX
                  Designer, Branding Enthusiast4+ Years Experience in Brand &UI
                  Design​
                </p>
              </div>
            </div>
            <div className="flex-team-members">
              <div className="member-card">
                <img src={person} alt="" />
                <h6>Sunil Bajad </h6>
                <p>Full Stack Developer</p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Renuka Fuse </h6>
                <p>Full Stack Developer</p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6>Sanjana Jalgaonkar </h6>
                <p>Full Stack Developer</p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Kanak Wagh </h6>
                <p>Designer</p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Ikshit Chaudhari </h6>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div className="flex-team-members">
              <div className="member-card">
                <img src={person} alt="" />
                <h6>Faris Adam </h6>
                <p>Full Stack Developer </p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6>Prathamesh Gokhe </h6>
                <p>Full Stack Developer </p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Abhishek Kundley </h6>
                <p>Python Developer </p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Aneesh Bhattacharjee </h6>
                <p>Full Stack Developer </p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Khushi Solanki </h6>
                <p>Full Stack Developer </p>
              </div>
              <div className="member-card">
                <img src={person} alt="" />
                <h6> Juhi Thakur </h6>
                <p>Project Manager </p>
              </div>
            </div>
          </div>
          <div className="mentor">
            <h1>Our Mentors</h1>
            <div className="grid-container">
              <div className="mentor-card">
                <img src={Bhanu} alt="" />
                <h6>Bhanu Rajagopalan</h6>
                <p>
                  Founder, Metaphors Inc. Director, Orangebeak Technologies Pvt.
                  Ltd.Serial Entrepreneur 25 Years in Branding and Advertising
                  6+ Years in Event Expo Space ​
                </p>
              </div>
              <div className="mentor-card">
                <img src={rama} alt="" />
                <h6>R. Ramakrishnan </h6>
                <p>
                  5 x Entrepreneur | Investor & Mentor | Evangelist | Co-founder
                  & Member aXYKno Capital, Co-Resource, Globalscope, Eartha &
                  Mackintosh Global Partners | Past President TiE Nagpur |
                  Advisor Vigyan Bharti
                </p>
              </div>
              <div className="mentor-card">
                <img src={Neerja} alt="" />
                <h6>Neerja Pathania </h6>
                <p>
                  Founder, Innovations Solutions and Events, Serial
                  Entrepreneur, Social Worker 25 Years of Experience in Events
                  SpaceGovernment IT Infra Projects and Services​
                </p>
              </div>
              <div className="mentor-card">
                <img src={divya} alt="" />
                <h6>Divya Arora </h6>
                <p>
                  Ex National Director, AFS Intercultural Programs, India25
                  years across various schools, not for profit organizations,
                  hospitals, businesses and export houses​
                </p>
              </div>
              <div className="mentor-card">
                <img src={Sachin} alt="" />
                <h6>Sachin Ramchandani </h6>
                <p>
                  Founder, World of Wealth5+ Years in Events​ | FinTech |
                  Artificial Intelligence | Innovation | Startup Enthusiast |
                  Business Architecture | Advisor | Patents |
                </p>
              </div>
              <div className="mentor-card">
                <img src={priti} alt="" />
                <h6>Priti Ramakrishnan </h6>
                <p>
                  CEO, Immverse AIEx Patni Computers, IBM, IIM IndoreCost
                  Accountant, Private Equity, M&A15+ Years of Experience in Tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorTeam;
