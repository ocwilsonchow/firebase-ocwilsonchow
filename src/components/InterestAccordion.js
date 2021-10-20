import React from "react";
import { AccordionItem, Box, AccordionButton, AccordionPanel, AccordionIcon, Accordion } from "@chakra-ui/react";

export default function InterestAccordion() {
  return (
    <div>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem >
          <h2 >
            <AccordionButton _expanded={{ bg: "", color: "white" } }>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold" >
                Blender 3D 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "", color: "white" }}>
              <Box flex="1" textAlign="left" color="#FFB9FA" fontWeight="bold">
                PC Components ⌨️
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
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
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
