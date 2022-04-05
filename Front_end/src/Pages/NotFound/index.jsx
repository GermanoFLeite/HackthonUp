import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import notFound from "../../assets/notfound.jpg";

function NotFound() {
  return (
    <>
      <Flex>
        <Box w="100%" mt="100px" ml="500px">
          <Image src={notFound} alt="" />
        </Box>
      </Flex>
    </>
  );
}

export default NotFound;
