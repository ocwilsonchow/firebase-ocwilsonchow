import React from "react";
import "../css/about-me.css";
import { Text, } from "@chakra-ui/react";

export default function AboutMe() {
  const aboutMe = {
    header: "About Wilson",
  };

  return (
    <div className="box">
      <div className="about-me__content">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          marginBottom="10px"
        >
          {aboutMe.header}
        </Text>
        <div className="about-me__content-p">
          <Text paddingBottom="20px" align="justify">
            Wilson is a pharmacist and a full-stack developer based in Hong
            Kong. He is passionate in building awesome websites and applications
            that give users extraordinary experience.
          </Text>
          <Text paddingBottom="20px" align="justify">
            Because of his pharmacy background, he is particularly interested in
            developing modern, beautiful health applications that empowers
            practitioners, patients and general public to access medical
            information and manage health appointment. He is currently working
            on a health app project that comprises a medicine information
            library for general public. He hopes to bring people a modern,
            convenient way to access high-quality, evidence-based medical
            information, that will empower general public to make informed self-care decisions and support them to live a high quality healthy life.
          </Text>
        </div>
      </div>
    </div>
  );
}
