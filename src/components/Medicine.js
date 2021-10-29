import React, { useContext } from "react";
import {
  Text,
  Badge,
  Box,
  IconButton,
  Flex,
  Tooltip,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { MedicineContext } from "./Home";

export default function Medicine({
  name,
  drug_class,
  indication,
  direction,
  mechanism,
  side_effects,
  notes,
  id,
}) {
  const { handleMedicineDelete, handleMedicineSelect } =
    useContext(MedicineContext);

  return (
    <>
      <Box className="medicine-item" marginBottom="15px" padding="15px">
        <Flex align="center" direction="row" justifyContent="space-between">
          <Text
            bgGradient="linear(to-r,  #06beb6, #48b1bf)"
            bgClip="text"
            fontWeight="bold"
            fontSize="2xl"
          >
            {name}
            <box align="center">
              <Tooltip label="click to edit" hasArrow bg="blue.500">
                <IconButton
                  colorScheme="facebook"
                  margin="5px"
                  ml={5}
                  icon={<EditIcon />}
                  isRound
                  size="sm"
                  onClick={() => handleMedicineSelect(id)}
                ></IconButton>
              </Tooltip>

              <Tooltip label="click to delete" hasArrow bg="tomato">
                <IconButton
                  colorScheme="red"
                  icon={<DeleteIcon />}
                  isRound
                  margin="5px"
                  size="sm"
                  onClick={() => handleMedicineDelete(id)}
                ></IconButton>
              </Tooltip>
            </box>
          </Text>
        </Flex>
        <Badge marginTop="10px" marginBottom="10px" colorScheme="whiteAlpha">
          {indication}
        </Badge>
        <Table size="xs" colorScheme="blackAlpha">
          <Tbody>
            <Tr>
              <Td fontSize="sm" color="gray.400">
                <Text colorScheme="transparent">Drug Class: {drug_class}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="sm" color="gray.400">
                {" "}
                <Text colorScheme="transparent">
                  Mechanism of Action: {mechanism}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="sm" color="gray.400">
                <Text colorScheme="transparent">Direction: {direction} </Text>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="sm" color="gray.400">
                <Text colorScheme="transparent">
                  Side Effects: {side_effects}
                </Text>{" "}
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="sm" color="gray.400">
                <Text colorScheme="transparent">Notes: {notes}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
}
