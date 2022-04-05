import { React, useState } from "react";
import { Flex, Box, Avatar, Text, propNames } from "@chakra-ui/react";

function CardAvatar({ image, pessoa, texto, position }) {
  const [isPositionLeft, setIsPositionLeft] = useState(position);

  return (
    <>
      {isPositionLeft ? (
        <Flex>
          <Avatar size="2xl" m="3.5" variant="outline" p="2px" src={image} />
          <Box align colorScheme="linkedin" border-radius="20px" m="3">
            <Text m="3" fontWeight="bold" p="">
              {pessoa}
            </Text>
            <Text fontWeight="normal" fontSize="md">
              {texto}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex>
          <Box align colorScheme="linkedin" border-radius="20px" m="3">
            <Text m="3" fontWeight="bold" ml="40%" p="">
              {pessoa}
            </Text>
            <Text fontWeight="normal" fontSize="md">
              {texto}
            </Text>
          </Box>
          <Avatar size="2xl" m="3.5" variant="outline" p="2px" src={image} />
        </Flex>
      )}
    </>
  );
}

export default CardAvatar;
