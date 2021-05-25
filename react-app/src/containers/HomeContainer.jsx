import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Footer from "../components/Footer/Footer";

const HomeContainer = () => {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <Footer />
    </div>
  );
};

export default HomeContainer;
