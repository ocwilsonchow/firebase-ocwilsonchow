import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";
import {
  Box,
  Button,
  Flex,
  Text,
  useBoolean,
  WrapItem,

} from "@chakra-ui/react";

import ChatInputForm from "../components/ChatInputForm";
import Header from "../components/Header";
import "../css/chat.css";

export default function Chat() {
  const [created, setCreate] = useBoolean();
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");


  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(users);
  //   };
  //   return () => getUsers();
  // }, []);

  return (
    <div className="body">
      <Header />
      <Flex width="100vw" justifyContent="center" wrap="wrap" maxWidth="1200px">
        <Box className="chat-card" padding="35px" width="500px" m={2} >
          <Text fontSize="4xl" fontWeight="black">
            Message Wilson 👇🏻
          </Text>
          <Text>Create your account to get started</Text>
          <Button
            mt={6}
            bg="black"
            colorScheme="teal"
            onClick={() => {
              setCreate.toggle();

            }}
          >
            Get started (status: {created.toString()})
          </Button>
          <ChatInputForm />
        </Box>
        <Box className="chat-card" padding="35px" width="500px" m={2}>
          <Text fontSize="4xl" fontWeight="black">
            Join the community!
          </Text>
          <Text>Members in this community:</Text>
          <Flex
            flexDirection="column"
            spacing="40px"
            padding="20px"
            margin="10px"
          >
            {/* {users.map((user) => {
              return (
                <WrapItem
                  bg="white"
                  className="store-item-card"
                  color="black"
                  borderRadius="25px"
                >
                  <Box padding="20px">
                    <Text fontWeight="bold">
                      {user["first name"]}
                      {user["family name"]}
                    </Text>
                  </Box>
                </WrapItem>
              );
            })} */}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
