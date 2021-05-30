import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Footer from "../components/Footer/Footer";

const HomeContainer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container">
      <Header />
      <SideBar />
      <Footer />
    </div>
  );
};

export default HomeContainer;
