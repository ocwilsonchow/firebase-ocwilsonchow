import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

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
              2020
            </Td>
            <Td>
              Graduated from University College London (UCL) with a degree of
              MPharm Master of Pharmacy
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2020
            </Td>
            <Td>Worked as a trainee pharmacist at Boots Pharmacy, UK</Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2021
            </Td>
            <Td>
              Registered as a provisionally registered pharmacist with the
              General Pharmaceutical Council in the United Kingdom 🇬🇧
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2022
            </Td>
            <Td>
              Will graduate from Full-stack Web Development Course from H Academy 
            </Td>
          </Tr>
          <Tr>
            <Td color="#FFB9FA" fontWeight="bold">
              2022
            </Td>
            <Td>
              Will found OxygenHealth and act as the CEO and CTO of the startup
              company
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}
