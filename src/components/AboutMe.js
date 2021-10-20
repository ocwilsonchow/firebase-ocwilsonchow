import React from "react";
import "../css/about-me.css";
import { Text, Code } from "@chakra-ui/react";


export default function AboutMe() {
  const aboutMe = {
    header: "About Wilson",
    description:
      "Wilson is a pharmacist and a full-stack developer based in Hong Kong. He is passionate in creating awesome websites and applications which give users extraordinary experience. He is interested in building beautiful, modern health applications that empowers practitioners, patients and general public to access medical information and manage health appointment.",
  };

  return (
    <div className="box">
      <div className="about-me__content">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          {aboutMe.header}
        </Text>
        <div className="about-me__content-p">{aboutMe.description}</div>
      </div>
    </div>
  );
}
