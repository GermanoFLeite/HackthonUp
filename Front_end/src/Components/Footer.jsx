import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import logoPmenos from "../assets/Logo.png";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <Flex flexDirection="row" p="20px" color="white" bg="#0054A6">
      <Flex flexDirection="column" size="100%" my="20px">
        <Box width="50%" size="100%">
          <Image src={logoPmenos} />
        </Box>
        <Flex
          w="30%"
          mt="10px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="https://www.instagram.com/paguemenos/">
            <AiFillInstagram size="60%" />
          </Link>
          <Link href="https://www.facebook.com/Pague-Menos-101283219083365/">
            <ImFacebook2 size="50%" />
          </Link>
          <Link href="https://www.linkedin.com/search/results/all/?keywords=farm%C3%A1cias%20pague%20menos&origin=RICH_QUERY_SUGGESTION&position=0&searchId=7a201b83-145e-4e0e-8034-7d33645b1aca&sid=3D_">
            <BsLinkedin size="50%" />
          </Link>
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        direction="row"
        p="4%"
        my="20px"
        w="80%"
        borderRadius="8px"
        color="black"
        bgColor="#CCDDED"
      >
        <Flex direction="column" ml="2%">
          <Text fontSize="14px">Fale com a Pague menos</Text>
          <Text color="#0054A6" fontWeight="bold">
            Conheça nossos canais
          </Text>
        </Flex>
        <Flex direction="column">
          <Text fontSize="14px">Televendas</Text>
          <Text color="#0054A6" fontWeight="bold">
            4002-8282
          </Text>
        </Flex>
        <Flex direction="column">
          <Text fontSize="14px">Atendimento ao cliente</Text>
          <Text color="#0054A6" fontWeight="bold">
            0800 275 1313
          </Text>
        </Flex>
        <Flex direction="column">
          <Text fontSize="14px">Horário do SAC das 06:00 às 00:00</Text>
          <Text color="#0054A6" fontWeight="bold">
            sac@pmenos.com.br
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
