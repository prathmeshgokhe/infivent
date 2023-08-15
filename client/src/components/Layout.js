import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
