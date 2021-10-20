import React from "react";
import { Text } from "@chakra-ui/react";
import InterestAccordion from "./InterestAccordion";

export default function Interests() {
  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        Interests
      </Text>
      <InterestAccordion />
    </div>
  );
}
