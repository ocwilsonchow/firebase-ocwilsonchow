import { Center } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Medicine() {
  return (
    <div className="body">
      <Header />
      <Center bg="green.500" padding="20px" margin="20px">
        Hello! Welcome to the medicine page! Wilson is working hard to build
        this page, it will be completed soon, stay tuned! 😀
      </Center>
    </div>
  );
}
