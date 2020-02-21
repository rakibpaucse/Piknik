import React from "react";
import Header from "../Components/Layout/header";
import Footer from "../Components/Layout/footer";

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
