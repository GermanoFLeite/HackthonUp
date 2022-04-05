import React from "react";
import { Flex, Avatar, Box, Badge, Text, Image } from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import fastdating from "../../assets/fastdating.png";
import pmenos from "../../assets/pmenosgg.jpg";

function FastDating() {
  return (
    <Flex flexDirection="column" bg="rgba(0, 159, 227, 0.2)">
      <Flex>
        <Header />
      </Flex>

      <Flex flexDirection="column" w="100%">
        <Flex flexDirection="row" my="40px">
          <Box ml="80px">
            <Image ml="100px" src={fastdating} m="30px" />
            <Badge
              ml="30px"
              borderRadius="8px"
              p="10px"
              fontSize="2xl"
              color="#0054A6"
              bg="rgba(0, 159, 227, 0.2)"
            >
              O que é o fastdating?
            </Badge>
          </Box>
        </Flex>

        <Box ml="5%">
          <Text m="10px" fontSize="lg" w="50%">
            O fastdating é um programa pra nos conectarmos com startups e se
            elas derem match com a Pague Menos, podemos contratar a solução
            delas. Neste processo, startups se inscrevem para fazerem parte da
            pague menos e ganharem recurso, 10 se apresentam para os executivos
            na tentativa de fecharem negócio e se tornarem parceiras da pmenos.
            O público alvo do programa são pessoas de fora da pague menos com
            startups próprias em diferentes fases de maturidade.
          </Text>
        </Box>

        <Box ml="5%" my="5%">
          <Image src={pmenos} borderRadius="20px" />
        </Box>

        <Flex ml="6%" mb="60px">
          <Text fontSize="lg" w="50%">
            Os participantes pré-selecionadas realizam um pitch de cinco minutos
            para apresentarem suas propostas; depois tem mais cinco minutos de
            interação e esclarecimento de dúvidas com os principais líderes da
            companhia. Caso haja um match com alguma, que sugira um produto ou
            serviço que se adeque às necessidades da rede de farmácias, a
            próxima etapa é avaliar como integrar a solução na operação da
            empresa e, consequentemente, como efetivar essa parceria comercial
            com a Pague Menos. Para as startups selecionadas, além de terem a
            possibilidade de apresentar suas propostas, também há um momento
            específico de interação em que recebem feedbacks dos executivos e
            contribuição sobre seus produtos, a abordagem comercial e a
            consistência do pitch. Acreditamos que esse processo tem muito valor
            para o empreendedor.
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default FastDating;
