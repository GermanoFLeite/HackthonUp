import React, { useState } from "react";
import axios from "axios";
import {
  Flex,
  Avatar,
  Box,
  Badge,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import CardsAvatar from "../../Components/CardsAvatar";
import TimeLine from "../../Components/TimeLine";
import Comentarios from "./components/Comentarios";

function Sobre() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [erro, setErro] = useState("");
  const [comentario, setComentario] = useState([]);

  function onChange(e, setValue) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      setErro("um dos campos não foi preenchido corretamente.");
      return;
    }
    const data = {
      Name: name,
      Email: email,
      Text: message,
    };

    axios
      .post("http://localhost:5001/Comment", data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setErro("");
        setComentario([response.data, ...comentario]);
      })
      .catch(() => {
        setErro("preencha todos os campos corretamente");
      });
  }

  return (
    <div>
      <Box bg="rgba(0, 159, 227, 0.2)">
        <Box>
          <Flex>
            <Header />
          </Flex>

          <Flex flexDirection="row" m="10px" p="10px" mt="5%">
            <Badge
              bg="rgba(0, 159, 227, 0.2)"
              borderRadius="20px"
              fontSize="30px"
              p="20px"
              ml="5%"
            >
              #histórico do PmenosLab
            </Badge>
          </Flex>

          <TimeLine />

          <Flex flexDirection="row" m="10px" p="10px" mt="5%">
            <Badge
              bg="rgba(0, 159, 227, 0.2)"
              borderRadius="20px"
              fontSize="30px"
              p="20px"
              ml="5%"
            >
              #liderancas#pmenoslab#falas
            </Badge>
          </Flex>

          <Flex flexDirection="column">
            <CardsAvatar />
          </Flex>

          {/* Form Comments */}

          <Box display="flex" flexDirection="column" m="20px">
            <Heading fontSize="3xl" ml="40px">
              # Comente Sobre Nós
            </Heading>
            <Image />
          </Box>

          <Flex flexDirection="row" mx="10%">
            <Flex
              p="5%"
              flexDirection="column"
              align="center"
              justify="center"
              bg="white"
              m="30px"
              borderRadius="30px"
              h="500px"
              _hover={{ transform: "scale(1.05)", transition: "0.2s all" }}
            >
              <FormControl as="form" onSubmit={onSubmit} w="90%">
                <Text>{erro}</Text>
                <FormLabel htmlFor="email">Seu Email</FormLabel>
                <Input
                  my="1%"
                  onChange={(e) => onChange(e, setEmail)}
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                />

                <FormLabel mt="10px" htmlFor="first-name">
                  Nome Completo
                </FormLabel>
                <Input
                  my="1%"
                  onChange={(e) => onChange(e, setName)}
                  id="first-name"
                  placeholder="seu nome"
                />

                <Textarea
                  mt="10px"
                  borderRadius="10px"
                  size="xs"
                  resize="none"
                  onChange={(e) => onChange(e, setMessage)}
                  placeholder="Comente aqui sobre nós"
                />

                <Flex flexDirection="row" justify="end">
                  <Input w="40%" mt="5%" type="submit" value="Enviar" />
                </Flex>
              </FormControl>
            </Flex>

            <Comentarios  
              comentario={comentario}
              setComentario={setComentario}
            />
          </Flex>

          <Footer />
        </Box>
      </Box>
    </div>
  );
}
export default Sobre;
