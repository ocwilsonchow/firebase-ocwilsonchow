import React from "react";
import BioEvent from "./BioEvent";
import { Text } from "@chakra-ui/react";

export default function Bio() {
  const bio = {
    header: "Biography",
  };
  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        {bio.header}
      </Text>
      <BioEvent />
    </div>
  );
}
