import React from "react";
import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import Joaquim from "../assets/joaquim.jpg";
import Mario from "../assets/mario.jpg";
import Angelo from "../assets/angelo.jpg";
import gilberto from "../assets/gilberto.jpg";
import CardAvatar from "./CardAvatar";

function CardsAvatar() {
  return (
    <Flex>
      <Flex m="20px" flexDirection="column">
        <Flex
          bg="rgba(0, 84, 166, 0.6)"
          borderRadius="20px"
          w="50%"
          m={5}
          ml="10%"
          p="25px"
          _hover={{ transform: "scale(1.05)", transition: "0.2s all" }}
        >
          <CardAvatar
            image={Mario}
            pessoa="Mario Queiroz | CEO Pague Menos"
            texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            position={true}
          />
        </Flex>
        <Flex
          bg="rgba(0, 84, 166, 0.6)"
          borderRadius="20px"
          w="50%"
          m={5}
          ml="40%"
          p="25px"
          _hover={{ transform: "scale(1.05)", transition: "0.2s all" }}
        >
          <CardAvatar
            image={Joaquim}
            pessoa="Joaquim Garcia | VP de Tec. & Transformação"
            texto="Com muito alegria e orgulho, inauguramos, hoje, um novo espaço para
          acomodar o nosso braço de Tecnologia e Transformação, o pmenoslab. A
          estrutura do nosso novo escritório segue o conceito de espaço aberto
          e descontraído das startups, que visa incentivar o trabalho
          colaborativo e o espírito de inovação."
          />
        </Flex>
        <Flex
          bg="rgba(0, 84, 166, 0.6)"
          borderRadius="20px"
          w="50%"
          m={5}
          ml="10%"
          p="25px"
          _hover={{ transform: "scale(1.05)", transition: "0.2s all" }}
        >
          <CardAvatar
            image={gilberto}
            pessoa="Gilberto Caray | Diretor de Transf. & Inovação"
            texto="A Farmácias Pague Menos deu um importante passo em seu processo de
          transformação com a inauguração do pmenoslab, a nova casa da área de
          TI & Transformação. Em seus 40 anos à companhia sempre foi uma
          empresa inovadora e atenta às necessidades e mudanças de
          comportamento do consumidor. Uma empresa que busca se reinventar a
          todo momento sem perder sua essência, e que agora se posiciona de
          maneira mais incisiva como uma empresa moderna e inovadora. Bem
          vindos, ao futuro que por aqui já chegou!"
            position={true}
          />
        </Flex>
        <Flex
          bg="rgba(0, 84, 166, 0.6)"
          borderRadius="20px"
          w="50%"
          m={5}
          ml="40%"
          p="25px"
          _hover={{ transform: "scale(1.05)", transition: "0.2s all" }}
        >
          <CardAvatar
            image={Angelo}
            pessoa="Angelo Vieira Jr. | Head de Inovação"
            texto="2022 a Gigante se torna cada vez mais Gigante, Inovadora e
          Ágil, expandimos cada vez mais esse grande 'guarda-chuva' que ganha
          ainda mais força. E nós, no pmenoslab, braço de Inovação & Conexão
          com Startups, junto com as demais áreas da organização de forma
          transversal, com o ecossistema de inovação e empreendedorismo,
          parceiros e com o mercado, estamos a todo vapor."
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
export default CardsAvatar;
