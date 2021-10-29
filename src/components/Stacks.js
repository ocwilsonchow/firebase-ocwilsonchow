import React from "react";
import "../css/stacks.css";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Badge,
  CircularProgress,
  CircularProgressLabel,
  Code,
  Flex,
} from "@chakra-ui/react";
import FramerGesture from "./FramerGesture";

export default function Stacks() {
  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Technologies
      </Text>
      <Table size="xs" colorScheme="whiteAlpha" overflow="">
        <Tbody>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              HTML
            </Td>
            <Td>
              <CircularProgress value={80} color="blue.400" padding="10px">
                <CircularProgressLabel>80%</CircularProgressLabel>
              </CircularProgress>
            </Td>
            <Td color="#FFB9FA" fontWeight="bold">
              React.js
            </Td>
            <Td>
              <CircularProgress value={40} color="green.400" padding="10px">
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              CSS
            </Td>
            <Td>
              <CircularProgress value={80} color="blue.400" padding="10px">
                <CircularProgressLabel>80%</CircularProgressLabel>
              </CircularProgress>
            </Td>
            <Td color="#FFB9FA" fontWeight="bold">
              Node/Express
            </Td>
            <Td>
              <CircularProgress value={40} color="green.400" padding="10px">
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              JavaScript
            </Td>
            <Td>
              <CircularProgress value={50} color="green.400" padding="10px">
                <CircularProgressLabel>50%</CircularProgressLabel>
              </CircularProgress>
            </Td>
            <Td color="#FFB9FA" fontWeight="bold">
              MongoDB
            </Td>
            <Td>
              <CircularProgress value={10} color="yellow.400" padding="10px">
                <CircularProgressLabel>10%</CircularProgressLabel>
              </CircularProgress>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Code colorScheme="whiteAlpha" marginTop="15px">
        Favorite frontend libraries:
      </Code>
      <Flex direction="row" paddingTop="10px" wrap="wrap">
        <Badge margin="5px">Chakra UI</Badge>

        <Badge margin="5px" colorScheme="green">
          Material UI
        </Badge>
        <Badge margin="5px">Tailwind UI</Badge>
        <Badge margin="5px">Headless UI</Badge>
        <Badge margin="5px">Framer Motion</Badge>
        <Badge margin="5px" colorScheme="red">
          Three.js
        </Badge>
      </Flex>
      <Code colorScheme="whiteAlpha" marginTop="15px">
          Other technologies:
        </Code>
      <Flex direction="row" paddingTop="10px" wrap="wrap">
        {" "}
       
        <Badge margin="5px">Firebase</Badge>
        <Badge margin="5px">Next.js</Badge>
      </Flex>
    </div>
  );
}
