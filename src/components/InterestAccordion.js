import React from "react";
import {
  AccordionItem,
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Accordion,
  Text,
} from "@chakra-ui/react";

export default function InterestAccordion() {
  return (
    <div>
      <Text></Text>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                Blender 3D
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {/* <Box p="5" maxW="450px" borderWidth="1px"  borderRadius="15px">
              <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
              <Flex align="baseline" mt={2}>
                <Badge colorScheme="pink">Plus</Badge>
                <Text
                  ml={2}
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                  color="pink.800"
                >
                  Verified &bull; Cape Town
                </Text>
              </Flex>
              <Text
                mt={2}
                fontSize="xl"
                fontWeight="semibold"
                lineHeight="short"
              >
                Modern, Chic Penthouse with Mountain, City & Sea Views
              </Text>
              <Text mt={2}>$119/night</Text>
              <Flex mt={2} align="center">
                <Box as={MdStar} color="orange.400" />
                <Text ml={1} fontSize="sm">
                  <b>4.84</b> (190)
                </Text>
              </Flex>
            </Box> */}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "0f2657", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                Road bikes 🚴🏻‍♂️
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                PC components
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                Photography 📷
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                Stock market
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                League of Legends
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
