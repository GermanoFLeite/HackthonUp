import React from "react";
import { Flex, Avatar, Box, Badge, Text } from "@chakra-ui/react";
import talk from "../assets/pmenostalk.png";
import week from "../assets/innovationweek.png";
import lamp from "../assets/lampadalab.jpg";
import fast from "../assets/fastdating.png";

function TimeLine() {
  return (
    <Flex flexDirection="row" justify="space-between" my="5%" mx="10%" w="80%">
      <Flex flexDirection="column">
        <Box>
          <Avatar src={talk} mt="50%" w="60%" size="3xl" bg="blue.100" />
        </Box>
        <Badge
          mt="10%"
          ml="10%"
          w="50%"
          textAlign="center"
          borderRadius="8px"
          bg="rgba(0, 159, 227, 0.2)"
          fontSize="25px"
        >
          out - 2021
        </Badge>
        <Text ml="10%" w="50%" fontWeight="semibold" mt="10px">
          O 1º pmenosTalk foi um sucesso, +250 participantes online.
        </Text>
      </Flex>

      <Flex flexDirection="column">
        <Box>
          <Avatar src={week} w="70%" mt="20%" size="5xl" bg="blue.100" />
        </Box>
        <Badge
          mt="10%"
          ml="10%"
          w="50%"
          textAlign="center"
          borderRadius="8px"
          bg="rgba(0, 159, 227, 0.2)"
          fontSize="25px"
        >
          nov - 2021
        </Badge>
        <Text ml="10%" w="50%" fontWeight="semibold" mt="10px">
          A 1ª edição da semana da inovação
        </Text>
      </Flex>
      <Flex flexDirection="column">
        <Box>
          <Avatar src={lamp} w="60%" mt="50%" size="3xl" bg="blue.100" />
        </Box>
        <Badge
          mt="10%"
          ml="10%"
          w="50%"
          textAlign="center"
          borderRadius="8px"
          bg="rgba(0, 159, 227, 0.2)"
          fontSize="25px"
        >
          dez - 2021
        </Badge>
        <Text ml="10%" w="50%" fontWeight="semibold" mt="10px">
          O novo espaço é mais um passo da jornada de transformação, inovação e
          conexão da Pague Menos com as startups .
        </Text>
      </Flex>

      <Flex flexDirection="column">
        <Box>
          <Avatar src={fast} w="60%" mt="20%" size="5xl" bg="blue.100" />
        </Box>
        <Badge
          mt="10%"
          ml="10%"
          w="50%"
          textAlign="center"
          borderRadius="8px"
          bg="rgba(0, 159, 227, 0.2)"
          fontSize="25px"
        >
          jan - 2022
        </Badge>
        <Text ml="10%" w="50%" fontWeight="semibold" mt="10px">
          A ultima edição do Fast Dating foi um sucesso tendo pela primeira vez
          um match de 100% com as startups envolvidas.
        </Text>
      </Flex>
    </Flex>
  );
}

export default TimeLine;
