import React, { useState, useContext } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useDisclosure,
  Checkbox,
  CheckboxGroup,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ChatInputForm(submitData) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialFieldValues = [
    {
      id: 1,
      full_name: "Wilson",
      company: "Apple Inc",
      email: "apple.com",
      phone: "1234",
      message: "Hello",
      communication: {
        preference_WhatsApp: true,
        preference_email: true,
        preference_phone: false,
      },
    },
  ];
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
    console.log(values);
  };

  const handleFormSubmit = (e) => {
    submitData(values);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <FormControl mt={5} autoCorrect="off" autoComplete="off" isRequired>
          <FormLabel color="gray.400">Name</FormLabel>
          <Input
            id="name"
            type="text"
            value={values.name}
            onChange={handleInputChange}
          />
          <FormLabel color="gray.400" mt={3}>
            Company
          </FormLabel>
          <Input
            id="company"
            type="text"
            value={values.company}
            onChange={handleInputChange}
          ></Input>
          <FormLabel color="gray.400" mt={3}>
            Email
          </FormLabel>
          <Input
            id="email"
            value={values.email}
            onChange={handleInputChange}
            type="text"
          ></Input>
          <FormLabel color="gray.400" mt={3}>
            Phone number
          </FormLabel>
          <Input
            id="phone"
            value={values.phone}
            onChange={handleInputChange}
            type="text"
          ></Input>
          <FormLabel color="gray.400" mt={3}>
            Your message
          </FormLabel>
          <Textarea
            id="message"
            value={values.message}
            type="text"
            minHeight="100px"
            onChange={handleInputChange}
          />

          <FormLabel color="gray.400" mt={3}>
            Preferred communication method
          </FormLabel>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={["preference WhatsApp", "preference email"]}
          >
            <HStack>
              <Checkbox id="preference WhatsApp">WhatsApp</Checkbox>
              <Checkbox id="preference email">Email</Checkbox>
              <Checkbox id="preference phone call">Phone call</Checkbox>
            </HStack>
          </CheckboxGroup>
        </FormControl>
        <Button
          // onClick={onOpen}
          onClick={() => console.log("submitted")}
          type="submit"
          mt={6}
          bg="black"
          colorScheme="teal"
        >
          Send message 💨
        </Button>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" height="300px" color="black">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="facebook" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
