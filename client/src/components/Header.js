import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiFillApple } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

import logo from "../images/Infinity.png";
import "../styles/header.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="navbarContainer">
        <div className=" navbar-inner ">
          <Link className="navbar-logo" to="/">
            <img src={logo} alt="" />
            <p>infivent</p>
          </Link>
          <nav className="navbar navbar-expand-lg navbar-light ">
            {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <Link className="nav-link " to="/">
                  Home
                </Link>
                </li> */}
                <li class="nav-item   dropdown">
                  <Link class="nav-link " to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/solution">
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" to="/#Contact">
                    Request demo
                  </HashLink>
                </li>
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
            </div>
          </nav>
          <div className="responsive-nav">
            <a
              class="btn "
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <GiHamburgerMenu />
            </a>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul className="navbar-nav mr-auto">
                  {/* <li className="nav-item">
                  <Link className="nav-link " to="/">
                  Home
                </Link>
                </li> */}
                  <li class="nav-item   dropdown">
                    <Link class="nav-link " to="/about">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/solution">
                      Solutions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <HashLink className="nav-link" to="/#Contact">
                      Request demo
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
