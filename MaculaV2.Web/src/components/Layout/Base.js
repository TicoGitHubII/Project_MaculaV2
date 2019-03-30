import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Offsidebar from "./Offsidebar";
import Footer from "./Footer";

const Base = props => (
  <div className="wrapper">
    <Header />

    {/* <Sidebar /> */}

    <section className="section-container">{props.children}</section>
    {/* 

     <Offsidebar /> 
    <Footer /> */}
  </div>
);

export default Base;
