import React from "react";
import { Table, Tbody, Tr, Td, Tooltip } from "@chakra-ui/react";

export default function BioEvent() {
  return (
    <div>
      <Table variant="simple" size="sm" colorScheme="whiteAlpha">
        <Tbody>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              1997
            </Td>
            <Td>Born in Hong Kong (香港) 🇭🇰</Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2016
            </Td>
            <Td>Graduated from St. Francis Xavier's College, Hong Kong</Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2020
            </Td>
            <Td>
              Graduated from University College London (UCL) with a degree in MPharm Master of Pharmacy
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2020
            </Td>
            <Td>Worked as a trainee pharmacist at Boots, UK</Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2021
            </Td>
            <Td>
              Registered as a provisionally registered pharmacist with the
              General Pharmaceutical Council, UK 🇬🇧
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2022
            </Td>
            <Td>
              Graduate from the full-stack web development course at H Academy Hong Kong
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2023
            </Td>
            <Td>
              CEO and CTO of{" "}
              <Tooltip hasArrow bg="red.400" label="ff 😁" fontSize="sm">
                OxygenHealth
              </Tooltip>
              , the next-gen health tech startup
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}
