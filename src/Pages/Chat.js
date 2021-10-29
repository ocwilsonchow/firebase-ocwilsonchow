import {
  Box,
  Button,
  Flex,
  Text,
  useBoolean,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ChatInputForm from "../components/ChatInputForm";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

import Header from "../components/Header";
import "../css/chat.css";

export const UserContext = React.createContext();

export default function Chat() {
  const [created, setCreate] = useBoolean();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };
    return () => getUsers();
  }, []);

  return (
    <div className="body">
      <Header />
      <Flex width="100vw" justifyContent="center" wrap="wrap" maxWidth="1200px">
        <Box className="chat-card" padding="35px" width="500px" mr={5}>
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
        <Box className="chat-card" padding="35px" width="500px">
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
            {users.map((user) => {
              return (
                <WrapItem
                  bg="white"
                  className="store-item-card"
                  color="black"
                  borderRadius="25px"
                >
                  <Box padding="20px">
                    <Avatar
                      name="Wilson Chow"
                      src="https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.6435-9/119508652_3929212380436758_5800772199959938508_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ptHT06kEIcQAX_X4Ruk&_nc_ht=scontent.fhkg4-1.fna&oh=b4835308d27f78716c53c3f11b559712&oe=61A036C4"
                    />
                    <Text fontWeight="bold">
                      {user["first name"]}
                      {user["family name"]}
                    </Text>
                  </Box>
                </WrapItem>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
