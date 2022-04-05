import React from "react";
import { Box, Badge, Flex } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import FormularioInscricao from "../../Components/FomularioInscricao";

function NossoTime() {
  return (
    <Flex flexDirection="column">
      <Header />

      <Box>
        <Badge
          m="40px"
          borderRadius="8px"
          p="10px"
          fontSize="2xl"
          color="#0054A6"
          bg="rgba(0, 159, 227, 0.2)"
        >
          #Vem trabalhar com a gente
        </Badge>
      </Box>

      <FormularioInscricao />

      <Footer />
    </Flex>
  );
}

export default NossoTime;
