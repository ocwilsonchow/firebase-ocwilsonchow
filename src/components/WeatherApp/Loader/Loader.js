import React from "react";
import {
  Text,
  CircularProgress,
  Center,
  Heading,
  Spinner,
} from "@chakra-ui/react";

function Loader() {
  console.log("Loader is running");

  return (
    <Center>
      <Heading size="1xl" color="teal.500">
        Loading weather data
       
      </Heading>
      <Spinner  marginLeft="10px" color="teal.500" />
    </Center>
  );
}

export default Loader;

