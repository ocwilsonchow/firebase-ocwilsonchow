import React from "react";
import "../css/header-nav-icon.css";

import profileIcon from "../images/profile2-icon.JPG";
import { Code, Stack, Badge, Tooltip, Flex, Box } from "@chakra-ui/react";

export default function HeaderNavIcons() {
  return (
    <div className="header-box">
      <div className="header__title">
        <Stack direction="row">
          <Badge colorScheme="whiteAlpha">Pharmacist</Badge>
          <Badge colorScheme="whiteAlpha">Web Developer</Badge>
          <Badge colorScheme="whiteAlpha">Blender Artist</Badge>
        </Stack>
        <div className="header__profile-icon">
          <Tooltip label="This is Wilson and his Elmo" placement="right">
            <img src={profileIcon} alt="" />
          </Tooltip>
        </div>
        <div className="header__title-large">
          <Flex alignItems="center">
            <Box paddingTop="4px" fontSize="4xl">
              Oc Wilson Chow{" "}
            </Box>
            <Box className="cursor">|</Box>
          </Flex>
        </div>

        <Code
          padding="0px 25px"
          marginBottom="25px"
          marginLeft="20px"
          marginRight="20px"
          colorScheme="whiteAlpha"
          overflowWrap="wrap"
        >
          Hello world! Welcome to my space.
        </Code>
      </div>
    </div>
  );
}
