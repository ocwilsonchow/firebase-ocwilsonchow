import React from "react";
import "../css/header-nav-icon.css";
import githubIcon from "../images/iconmonstr-github-1.svg";
import facebookIcon from "../images/icons8-facebook.svg";
import instagramIcon from "../images/icons8-instagram.svg";
import youtubeIcon from "../images/icons8-youtube.svg";
import mailIcon from "../images/email_black_24dp.svg";
import alertIcon from "../images/notifications_active_black_24dp.svg";
import fingerprintIcon from "../images/fingerprint_black_24dp.svg";
import profileIcon from "../images/me.jpg";
import { Code, Stack, Badge, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeaderNavIcons() {
  return (
    <div className="header">
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
            <a href="" target="_blank" rel="noreferrer">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.2, 1.2, 1],
                  rotate: [0, 0, 360, 360, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  loop: Infinity,
                  repeatDelay: 1,
                }}
              >
                <img className="navbar-icon mail-icon" src={mailIcon} alt="" />
              </motion.div>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              {" "}
              <img className="navbar-icon" src={alertIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <img
                className="navbar-icon fingerprint"
                src={fingerprintIcon}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="header__title">
        <Stack direction="row" paddingTop="20px">
          <Badge colorScheme="purple">Pharmacist</Badge>
          <Badge colorScheme="green">Web Developer</Badge>
          <Badge colorScheme="red">3D Artist</Badge>
        </Stack>
        <div className="header__profile-icon">
          <img src={profileIcon} alt="" />
        </div>
        <div className="header__title-large">
          <h1>Oc Wilson Chow</h1>
        </div>

        <Code marginBottom="25px" colorScheme="whiteAlpha">
          Hello world! I'm a software developer based in Hong Kong!
        </Code>
        
      </div>
    </div>
  );
}
