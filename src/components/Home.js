import React from "react";
import HeaderNavIcons from "./HeaderNavIcons";
import AboutMe from "./AboutMe";
import Bio from "./Bio";
import Stacks from "./Stacks";
import Footer from "./Footer";
import Interests from "./Interests";
// import Helicopter from "./Helicopter"

export default function Home() {
  return (
    <div>
      
      {/* <Helicopter /> */}
      <div>
        <HeaderNavIcons />
        
        <div className="body">
          <AboutMe />
          <Bio />
          <Stacks />
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  );
}
