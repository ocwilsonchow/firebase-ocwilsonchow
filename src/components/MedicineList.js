import React, { useContext } from "react";
import Medicine from "./Medicine";
import {
  Text,
  IconButton,
  Flex,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { MedicineContext } from "./Home";

export default function MedicineList({ medicines }) {
  const { handleMedicineAdd } = useContext(MedicineContext);

  return (
    <div className="box">
      <div className="medicine-container">
        <Flex justifyContent="space-between" alignContent="center">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
            marginBottom="10px"
          >
            Medication List
          </Text>

          <Box>
            <Tooltip label="Number of medications" hasArrow>
              <IconButton
                fontSize="xl"
                colorScheme="blackAlpha"
                fontWeight="bold"
                borderRadius="50%"
              >
                <Text>{medicines.length}</Text>
              </IconButton>
            </Tooltip>
          </Box>
        </Flex>
        {medicines.map((medicine) => {
          return (
            <Flex flexDirection="column" justifyContent="center">
              <Medicine key={medicine.id} {...medicine} />
            </Flex>
          );
        })}
      </div>
      <Flex justifyContent="center" padding="10px">
        <Tooltip label="Add new medication" hasArrow>
          <IconButton
            onClick={handleMedicineAdd}
            icon={<AddIcon />}
            colorScheme="blackAlpha"
            borderRadius="50%"
            marginRight="10px"
          />
        </Tooltip>
        <Box>
          <Tooltip label="Number of medications" hasArrow>
            <IconButton
              fontSize="xl"
              colorScheme="blackAlpha"
              fontWeight="bold"
              borderRadius="50%"
            >
              <Text>{medicines.length}</Text>
            </IconButton>
          </Tooltip>
        </Box>
      </Flex>
    </div>
  );
}
