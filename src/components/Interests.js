import React from "react";
import { Text, CircularProgress } from "@chakra-ui/react";
import InterestAccordion from "./InterestAccordion";

export default function Interests() {
  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Interests
      </Text>
      <Text paddingBottom="10px">(Development in progress)<CircularProgress isIndeterminate color="yellow.400" marginLeft="5px" size="30px" /></Text>

      <InterestAccordion />
    </div>
  );
}
