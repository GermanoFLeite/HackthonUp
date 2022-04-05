import {
  Box,
  Flex,
  Image,
  Text,
  AspectRatio,
  Heading,
  Button,
  Badge,
} from "@chakra-ui/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Header } from "../../Components/Header";
import fachada from "../../assets/homefoto.jpeg";
import Footer from "../../Components/Footer";
import ListCards from "../../Components/ListCards";
import Noticias from "../../Components/Noticias";
import { useNavigate } from "react-router-dom";
import Carrosel from "../../Components/Carrosel";

function Home() {
  SwiperCore.use([Autoplay]);

  const navigate = useNavigate();
  return (
    <Box>
      <Flex>
        <Header />
      </Flex>
      <Flex flex="column">
        <Box
          display="flex"
          flexDirection="row"
          position="relative"
          width="100%"
        >
          <Image src={fachada} width="100%" />
          <Box position="absolute" bottom="40%" left="35%" align="center">
            <Heading textColor="white">Aqui já estamos no futuro</Heading>
          </Box>
        </Box>
      </Flex>
      <Box display="flex" flexDirection="column" mx="4%">
        <Heading my="4%">Sobre o pmenoslab</Heading>
        <Text w="90%">
          Com mais de 1200 metros quadrados, a nova estrutura do pmenosLab. foi
          projetada para o modelo de trabalho compartilhado com 233 estações,
          que atendem a sistemas de trabalho híbrido. Para incentivar a
          colaboração e a criatividade, o escritório tem áreas de encontros,
          descompressão, salas de reuniões abertas para conversas informais,
          salas de reuniões fechadas e cabines individuais para reuniões
          remotas. O ambiente organizado no modelo de co-working tem sua
          identidade visual inspirada nos memoráveis games antigos e filmes de
          ficção justamente para tornar o ambiente mais agradável e inspirador.
        </Text>
      </Box>

      <Flex mt="20">
        <Badge
          ml="50px"
          borderRadius="8px"
          p="10px"
          fontSize="2xl"
          color="#0054A6"
          bg="rgba(0, 159, 227, 0.2)"
        >
          #TOUR # PMENOSLAB
        </Badge>
      </Flex>

      {/* Second image */}
      <Flex flexDirection="row" align="center" justify="center" mx="4%">
        <Box>
          <Heading>Conheça o nosso espaço fisico</Heading>
          <Text w="70%" mt="4%">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </Box>
        <AspectRatio
          ratio={2}
          width="60%"
          objectFit="cover"
          alt="fachada PmenosLAB"
          mt="4%"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wLljr1dozpw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </Flex>

      <Flex mt="20">
        <Badge
          ml="50px"
          borderRadius="8px"
          p="10px"
          fontSize="2xl"
          color="#0054A6"
          bg="rgba(0, 159, 227, 0.2)"
        >
          #MELHORES#MOMENTOS
        </Badge>
      </Flex>

      <Carrosel />

      {/* PROJECTS TITLE */}
      <Flex mt="5%">
        <Badge
          ml="50px"
          borderRadius="8px"
          p="10px"
          fontSize="2xl"
          color="#0054A6"
          bg="rgba(0, 159, 227, 0.2)"
        >
          #PROJECTS# INNOVATION #PRODUCTS # AGILE
        </Badge>
      </Flex>
      <Box mx="5%">
        <ListCards />
      </Box>

      {/* PMENOSLAB NA MIDIA */}
      <Flex my="4%">
        <Badge
          ml="50px"
          borderRadius="8px"
          p="10px"
          fontSize="2xl"
          color="#0054A6"
          bg="rgba(0, 159, 227, 0.2)"
        >
          #PMENOSLABNAMIDIA # INNOVATION #LEAN # AGILE
        </Badge>
      </Flex>
      <Noticias />
      <Footer />
    </Box>
  );
}

export default Home;
