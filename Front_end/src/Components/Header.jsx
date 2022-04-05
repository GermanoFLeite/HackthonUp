import { Button, Flex, Image } from "@chakra-ui/react";
import Rocket from "../assets/rocket.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  function handleNavHome() {
    navigate("/");
  }

  function handleNavFastDating() {
    navigate("/fastDating");
  }

  function handleNavSobre() {
    navigate("/sobre");
  }

  function handleNavTime() {
    navigate("/nossotime");
  }

  function handleNavProgramas() {
    navigate("/programas");
  }

  return (
    <Flex
      bg="#0054A6"
      align="center"
      justify="space-between"
      w="100%"
      h="120px"
    >
      <Flex>
        <Image src={Logo} w="100%" h="60px" ml="20px" onClick={handleNavHome} />
      </Flex>
      <Flex flexDirection="row" align="center" mr="40px">
        <Image src={Rocket} mr="50px" />

        <Button m="10px" onClick={handleNavSobre}>
          Sobre
        </Button>
        <Button m="10px" onClick={handleNavFastDating}>
          Fast Dating
        </Button>
        <Button m="10px" onClick={handleNavTime}>
          Nosso Time
        </Button>
        <Button m="10px" onClick={handleNavProgramas}>
          Programas
        </Button>
      </Flex>
    </Flex>
  );
};
