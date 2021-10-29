import React from "react";
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  CircularProgress,
  TabPanel,
} from "@chakra-ui/react";


export default function DevPricing() {
  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        marginBottom="10px"
      >
        Web Development
      </Text>
      <Text paddingBottom="10px">
        (Development in progress)
        <CircularProgress
          isIndeterminate
          color="yellow.400"
          marginLeft="5px"
          size="30px"
        />
      </Text>
      <Tabs variant="soft-rounded" colorScheme="facebook">
        <TabList>
          <Tab>Demacia Vice Garen</Tab>
          <Tab>God King Garen</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>The superior web development package</p>
          </TabPanel>
          <TabPanel>
            <p>The ultimate web development package</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
