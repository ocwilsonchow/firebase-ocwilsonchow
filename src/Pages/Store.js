import { useState, useEffect } from "react";
import { Flex, Center, Text, Box, WrapItem } from "@chakra-ui/react";
import Header from "../components/Header";
import "../css/store.css";

export default function Store() {
 

  return (
    <div className="body">
      <Header />
      <Flex>
        <Center flexDirection="column">
          <Center bg="tomato" padding="20px" margin="20px">
            Hello! Welcome to the store page! Wilson is working hard to build
            this page, it will be completed soon, stay tuned! 😀
          </Center>


        </Center>
      </Flex>
    </div>
  );
}
