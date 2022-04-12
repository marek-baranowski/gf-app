import React, { useEffect } from "react";
import { useAsync } from "react-async";
import {
  Center,
  Heading,
  Input,
  VStack
} from "native-base";

// Start editing here, save and see your changes.
export default function App() {
  const req = useAsync({
    deferFn: async () => {
      const data = await fetch(`https://developers.giphy.com/docs/ap`, {
        headers: {
          Authorization: `Basic ${process.env.GIPHY_API}`
        }
      });
      console.log(data);
      return data;
    }
  })

  useEffect(() => {
    req.run()
  }, [])

  return (
    <Center
      alignSelf="center"
      width={"60%"}
      flex={1}
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Greyfintch</Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%" borderRadius="10"
          py="1" px="2" borderWidth="0"
        />
      </VStack>
    </Center>
  );
}
