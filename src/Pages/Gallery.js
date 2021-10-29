import { Center } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Gallery() {
  return (
    <div className="body">
      <Header />
      <Center bg="yellow" padding="20px" margin="20px">
        Hello! Welcome to the Gallery! Wilson is working hard to build this
        page, it will be completed soon, stay tuned! 😀
      </Center>
    </div>
  );
}
