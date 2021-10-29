import React from "react";
import {
  Box,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, EmailIcon } from "@chakra-ui/icons";
import { FaHome, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiMedicines } from "react-icons/gi";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Box
        className="navbar"
        padding="10px 20px"

        width="100%"
        marginBottom="10px"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Flex>
          <Tooltip
            label="Go to home page"
            hasArrow
            bg="teal"
            aria-label="A tooltip"
          >
            <Link to="/">
              <IconButton
                colorScheme="blackAlpha"
                borderRadius="50%"
                margin="0px 10px"
                size="lg"
                backdropBlur="50px"
              >
                <FaHome />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip
            label="Go to store"
            hasArrow
            bg="teal"
            aria-label="A tooltip"
          >
            <Link to="/store">
              <IconButton
                colorScheme="blackAlpha"
                borderRadius="50%"
                margin="0px 10px"
                size="lg"
              >
                <FaStore />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip
            label="Wilson is working on it😬🔨"
            hasArrow
            bg="teal"
            aria-label="A tooltip"
          >
            <Link to="/medicine"> 
              <IconButton
                colorScheme="blackAlpha"
                borderRadius="50%"
                margin="0px 10px"
                size="lg"
              >
                <GiMedicines />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip
            label="Email Wilson for business enquiries 😊"
            aria-label="A tooltip"
            hasArrow
            bg="teal"
          >
            <Link to="/chat">
              <IconButton
                colorScheme="blackAlpha"
                borderRadius="50%"
                margin="0px 10px"
                size="lg"
              >
                <EmailIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip
            label="Toggle menu"
            hasArrow
            bg="teal"
            aria-label="A tooltip"
          >
            <IconButton
              ref={btnRef}
              colorScheme="blackAlpha"
              borderRadius="50%"
              onClick={onOpen}
              margin="0px 10px"
              size="lg"
            >
              <HamburgerIcon fontSize="2xl" />
            </IconButton>
          </Tooltip>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
          closeOnEsc
        >
          <DrawerOverlay />
          <DrawerContent bg="blackAlpha.900" color="white">
            <DrawerCloseButton />
            <DrawerHeader ml={3} mt={5} fontSize="3xl" color="white">
              Menu
            </DrawerHeader>

            <DrawerBody>
              <Box ml={3} marginTop="20px" marginBottom="20px" fontSize="xl">
                <Link to="/">Home</Link>
              </Box>
              <Box ml={3} marginBottom="20px" fontSize="xl">
                <Link to="/store">Store</Link>
              </Box>
              <Box ml={3} marginBottom="20px" fontSize="xl">
                <Link to="/medicine">Medicine</Link>
              </Box>
              <Box ml={3} marginBottom="20px" fontSize="xl">
                <Link to="/">Profile</Link>
              </Box>
              <Box ml={3} marginBottom="20px" fontSize="xl">
                <Link to="/">Projects</Link>
              </Box>
              <Box ml={3} marginBottom="20px" fontSize="xl">
                <Link to="/chat">Chat</Link>
              </Box>
              <Box ml={3} marginBottom="20px" fontSize="xl">
                <Link to="/gallery">Gallery</Link>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Flex>
                <IconButton colorScheme="facebook" bg="teal" borderRadius="50%" mr={3}><SunIcon /></IconButton>
                <Link to="/Chat">
                  <Button variant="outline" mr={3} mb={8} onClick={onClose}>
                    Contact Wilson
                  </Button>
                </Link>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </div>
  );
}
