import React, { useContext } from "react";
import { MedicineContext } from "./Home";
import {
  Text,
  Box,
  Flex,
  CloseButton,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  
  Textarea,

  Button,
  Center,
  Tooltip,
} from "@chakra-ui/react";

export default function MedicineEdit({ medicine }) {
  const { handleMedicineChange, handleMedicineSelect } =
    useContext(MedicineContext);

  function handleChange(changes) {
    handleMedicineChange(medicine.id, { ...medicine, ...changes });
  }

  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        marginBottom="10px"
      >
        Medication Edit
      </Text>
      <Box className="medicine-item" marginBottom="15px" padding="25px">
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            bgGradient="linear(to-r,  #06beb6, #48b1bf)"
            bgClip="text"
            fontWeight="bold"
            fontSize="md"
          >
            Edit Medication
          </Text>
          <Tooltip label="Close edit page"><CloseButton
            bg="black"
            size="sm"
            onClick={() => handleMedicineSelect(undefined)}
          /></Tooltip>
          
        </Flex>

        <FormControl
          color="teal.300"
          borderColor="teal"
          marginTop="10px"
          marginBottom="10px"
          isRequired
        >
          <FormLabel htmlFor="name">Medication name</FormLabel>
          <Input
            onInput={(e) => handleChange({ name: e.target.value })}
            value={medicine.name}
            type="text"
            name="name"
            id="name"
          />
        </FormControl>

        <FormControl
          color="teal.300"
          borderColor="teal"
          marginBottom="10px"
          isRequired
        >
          <FormLabel>Indication</FormLabel>
          <Input
            onInput={(e) => handleChange({ indication: e.target.value })}
            value={medicine.indication}
            type="text"
            name="drug class"
            id="drug class"
          ></Input>
        </FormControl>

        <FormControl
          color="teal.300"
          borderColor="teal"
          marginBottom="10px"
          isRequired
        >
          <FormLabel>Drug class</FormLabel>
          <Input
            onInput={(e) => handleChange({ drug_class: e.target.value })}
            value={medicine.drug_class}
            type="text"
            name="drug class"
            id="drug class"
          ></Input>
        </FormControl>

        <FormControl
          color="teal.300"
          borderColor="teal"
          marginBottom="10px"
          isRequired
        >
          <FormLabel htmlFor="mechanism">Mechanism of actions</FormLabel>
          <Input
            onInput={(e) => handleChange({ mechanism: e.target.value })}
            value={medicine.mechanism}
            type="text"
            name="mechanism"
            id="mechanism"
          />
        </FormControl>

        <FormControl
          color="teal.300"
          borderColor="teal"
          marginBottom="10px"
          isRequired
        >
          <FormLabel htmlFor="direction">Direction</FormLabel>
          <Input
            onInput={(e) => handleChange({ direction: e.target.value })}
            value={medicine.direction}
            type="text"
            name="direction"
            id="direction"
          />
        </FormControl>

        <FormControl
          color="teal.300"
          borderColor="teal"
          marginBottom="10px"
          isRequired
        >
          <FormLabel htmlFor="side effects">Side effects</FormLabel>
          <Input
            onInput={(e) => handleChange({ side_effects: e.target.value })}
            value={medicine.side_effects}
            type="text"
            name="side effects"
            id="side effects"
          />
        </FormControl>

        <FormControl color="teal.300" borderColor="teal" marginBottom="10px">
          <FormLabel htmlFor="notes">Notes</FormLabel>
          <Textarea
            onInput={(e) => handleChange({ notes: e.target.value })}
            value={medicine.notes}
            type="text"
            name="notes"
            id="notes"
          />
          <FormHelperText>Keep the notes concise*</FormHelperText>
        </FormControl>

        <Center padding="20px">
          <Button bg="black" colorScheme="whatsapp" onClick={() => handleMedicineSelect(undefined)}>
           Finish edit
          </Button>
        </Center>
      </Box>
    </div>
  );
}
