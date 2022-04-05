import axios from "axios";
import {
  Select,
  Flex,
  Input,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";

function FormularioInscricao() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dev, setDev] = useState(null);
  const [escolaridade, setEscolaridade] = useState("");
  const [skill, setSkill] = useState("");
  const [erro, setErro] = useState("");
  const [inscricao, setInscricao] = useState([]);

  function onChange(e, setValue) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!name || !email || !idade || !telefone || !escolaridade || !skill) {
      setErro("um dos campos não foi preenchido corretamente.");
      return;
    }

    console.log("dev=", dev);

    const data = {
      Name: name,
      Email: email,
      Idade: idade,
      Telefone: telefone,
      Isdeveloper: dev == "1" ? true : false,
      Escolaridade: escolaridade,
      Skill: skill,
    };

    axios
      .post("http://localhost:5001/Subscription", data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setErro("");
        setInscricao([response.data, ...inscricao]);
      })
      .catch(() => {
        setErro("preencha todos os campos corretamente");
      });
  }

  return (
    <Flex
      align="center"
      w="70%"
      m="60px"
      p="10%"
      flexDirection="column"
      justify="center"
      borderRadius="30px"
      h="850px"
      boxShadow="0px 8px 8px rgba(0, 0, 0, 0.2)"
      ml="15%"
    >
      <FormControl as="form" onSubmit={onSubmit} w="90%" isRequired>
        <Text>{erro}</Text>
        <FormLabel htmlFor="Seu">Nome Completo</FormLabel>
        <Input
          id="first-name"
          placeholder="Seu nome"
          onChange={(e) => onChange(e, setName)}
        />

        <FormLabel mt="30px " htmlFor="email">
          E-mail
        </FormLabel>
        <Input
          id="email"
          type="email"
          isRequired
          placeholder="exemplo@email.com"
          onChange={(e) => onChange(e, setEmail)}
        />

        <FormLabel mt="30px" htmlFor="Idade">
          Idade
        </FormLabel>
        <NumberInput max={50} min={18}>
          <NumberInputField
            id="Idade"
            onChange={(e) => onChange(e, setIdade)}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel mt="30px" htmlFor="Seu-numero">
          Telefone
        </FormLabel>
        <Input
          type="number"
          id="Seu-numero"
          placeholder="Seu número"
          onChange={(e) => onChange(e, setTelefone)}
        />

        <FormLabel mt="30px" htmlFor="Você é desenvolvedor?">
          Você é desenvolvedor?
        </FormLabel>
        <Select
          id="escolaridade"
          placeholder="selecione sua resposta"
          onChange={(e) => onChange(e, setDev)}
        >
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </Select>

        <FormLabel mt="30px" htmlFor="escolaridade">
          Escolaridade
        </FormLabel>
        <Select
          id="escolaridade"
          placeholder="Selecione sua escolaridade"
          onChange={(e) => onChange(e, setEscolaridade)}
        >
          <option>Fundamental incompleto</option>
          <option>Fundamental Completo</option>
          <option>Médio Incompleto</option>
          <option>Médio Completo</option>
          <option>Superior Incompleto</option>
          <option>Superior Completo</option>
        </Select>

        <FormLabel mt="30px" htmlFor="Sua-skill">
          Sua(as) Skill(s)
        </FormLabel>
        <Input
          type="text"
          id="Sua-skill"
          placeholder="Suas skill"
          onChange={(e) => onChange(e, setSkill)}
        />

        <Flex flexDirection="row" justify="end">
          <Input w="40%" mt="5%" type="submit" value="Enviar" />
        </Flex>
      </FormControl>
    </Flex>
  );
}

export default FormularioInscricao;
