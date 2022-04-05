import axios from "axios";
import { Flex, Avatar, Box, Badge, Text, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Comentarios({ comentario, setComentario }) {
  useEffect(() => {
    axios
      .get("http://localhost:5001/Comment")
      .then((response) => {
        console.log(response);
        setComentario(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <Flex
      p="5%"
      flexDirection="row"
      align="start"
      justify="start"
      bg="white"
      m="30px"
      borderRadius="30px"
      w="50%"
      h="500px"
      overflowY="auto"
    >
      <Flex flexDirection="column" w="90%">
        {comentario.map((comment) => (
          <Flex m="20px">
            <Avatar src="" />
            <Box ml="5">
              <Text fontWeight="bold">{comment.name}</Text>
              <Text fontSize="sm">{comment.text}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
export default Comentarios;
