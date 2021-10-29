import React from "react";
import "../css/header-nav-icon.css";
import githubIcon from "../images/iconmonstr-github-1.svg";
import facebookIcon from "../images/icons8-facebook.svg";
import instagramIcon from "../images/icons8-instagram.svg";
import youtubeIcon from "../images/icons8-youtube.svg";
import mailIcon from "../images/email_black_24dp.svg";
import { Center, Text, Tooltip, Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Center marginTop="50px" h="50px" padding="5px">
        <Text
          color="teal.300"
          fontSize=""
          fontWeight="extrabold"
          marginBottom="10px"
        >
          Made by Wilson Chow👊🏻
        </Text>
      </Center>
      <Center>
        <Code marginBottom="10px" colorScheme="whiteAlpha"></Code>
      </Center>
      <div className="nav-container">
        <ul>
          <li>
            <a
              href="https://github.com/ocwilsonchow"
              target="_blank"
              rel="noreferrer"
            >
              <img className="navbar-icon" src={githubIcon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ocwilsonchow/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="navbar-icon" src={facebookIcon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ocwilsonchow/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img className="navbar-icon" src={instagramIcon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/SLCHOW/featured"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img className="navbar-icon" src={youtubeIcon} alt="" />
            </a>
          </li>
          <li>
            <Tooltip
              label="Contact me for business enquiries 😄"
              colorScheme="blackAlpha"
              fontSize="sm"
              hasArrow
              closeDelay={500}
            >
              <Link to="/Chat">
                <img className="navbar-icon mail-icon" src={mailIcon} alt="" />
              </Link>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
}
