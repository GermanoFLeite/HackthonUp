import { Box, Flex } from "@chakra-ui/react";
import CardProject from "./CardProject";
import alexa from "../assets/alexa.jpeg";
import loja from "../assets/lojapm.jpg";
import teste from "../assets/testec18.jpg";
import concierge from "../assets/concierge.jpeg";

function ListCards() {
  return (
    <Box>
      <Flex flexDir="row" justifyContent="center" my="2%">
        <Box p="10px" w="50%">
          <CardProject
            titulo={"Alexa"}
            imageUrl={alexa}
            imageAlt="img projetos"
            preFrase={"Alexa, abrir pague menos"}
            frase={
              "A skill é capaz de fazer o agendamento e fornecer informações sobre os diferentes tipos de testes de covid-19, identificando, pelo endereço cadastrado no device Alexa, a loja mais próxima onde os testes podem ser realizados."
            }
          />
        </Box>
        <Box p="10px" w="50%">
          <CardProject
            titulo={"Concierge"}
            imageUrl={concierge}
            imageAlt="img projetos"
            preFrase={"Para os gerentes de loja da Rede"}
            frase={
              "O App tem como objetivo agregar ao trabalho do gerente de loja apliando sua visão sobre estoque, levantamento das vendas, dashboard geral de faturamento parcial e intergral da loja e acima de tudo trazendo uma melhor visão para aprimorar a estratégia e impulsionamento..."
            }
          />
        </Box>
        <Box p="10px" w="50%">
          <CardProject
            titulo={"Hub de serviços"}
            imageUrl={teste}
            imageAlt="img projetos"
            preFrase={"Tudo em um só lugar"}
            frase={
              "O objetivo é se tornar um hub de saúde e referência em atendimento famaceutico.\n Nos consultórios Clinic Farma, você conta com atendimento especializado para tratar diversas doenças, além de serviços de telemedicina e farmacêuticos."
            }
          />
        </Box>
        <Box p="10px" w="50%">
          <CardProject
            titulo={"Marketplace"}
            imageUrl={loja}
            imageAlt="img projetos"
            preFrase={"Venha ser nosso parceiro"}
            frase={
              "O marketplace foi estruturado para comercializar itens das mais diversas categorias, desde suplementos alimentares, chás, equipamentos respiratórios a testes genéticos."
            }
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default ListCards;
