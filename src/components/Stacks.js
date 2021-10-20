import React from "react";
import "../css/stacks.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Badge,
  Stack,
  CircularProgress,
  CircularProgressLabel,
  Code
} from "@chakra-ui/react";
import FramerGesture from "./FramerGesture";
import { motion } from "framer-motion";

export default function Stacks() {
  return (
   
      <div className="box">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          Technologies
        </Text>
        <Table size="sm" colorScheme="whiteAlpha">
          <Tbody>
            <Tr>
              <Td color="#FFB9FA" fontWeight="bold">
                HTML
              </Td>
              <Td>
                <CircularProgress value={80} color="blue.400">
                  <CircularProgressLabel>80%</CircularProgressLabel>
                </CircularProgress>
              </Td>
              <Td color="#FFB9FA" fontWeight="bold">
                React.js
              </Td>
              <Td>
                <CircularProgress value={10} color="red.400">
                  <CircularProgressLabel>10%</CircularProgressLabel>
                </CircularProgress>
              </Td>
            </Tr>
            <Tr>
              <Td color="#FFB9FA" fontWeight="bold">
                CSS
              </Td>
              <Td>
                <CircularProgress value={80} color="green.400">
                  <CircularProgressLabel>80%</CircularProgressLabel>
                </CircularProgress>
              </Td>
              <Td color="#FFB9FA" fontWeight="bold">
                Node/Express
              </Td>
              <Td>
                <CircularProgress value={40} color="green.400">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Td>
            </Tr>
            <Tr>
              <Td color="#FFB9FA" fontWeight="bold">
                JavaScript
              </Td>
              <Td>
                <CircularProgress value={40} color="green.400">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Td>
              <Td color="#FFB9FA" fontWeight="bold">
                Next.js
              </Td>
              <Td>
                <CircularProgress value={40} color="green.400">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Code colorScheme="whiteAlpha" marginTop="15px">
          Favorite libraries:
        </Code>
        <Stack direction="row" paddingTop="10px" wrap="wrap">
          <Badge>Chakra UI</Badge>
          <Badge colorScheme="green">Material UI</Badge>
          <Badge colorScheme="red">Three.js</Badge>
          <Badge>Tailwind UI</Badge>
        </Stack>
        <Stack direction="row" paddingTop="10px">
          <Badge>Framer Motion</Badge>
        </Stack>
        <FramerGesture />
      </div>
    
  );
}
