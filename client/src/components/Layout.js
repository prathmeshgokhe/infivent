import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <main>{children}</main>
      {/* <Footer /> */}
    </>
=======
      <main style={{ minHeight: "70vh" }}>{children}</main>

      <Footer />
    </div>
>>>>>>> f6d6a215709f581d1525e452474567227a6a7a09
  );
};

export default Layout;
