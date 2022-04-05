import { Box, Image, Badge } from "@chakra-ui/react";

function CardProject({ titulo, imageUrl, imageAlt, preFrase, frase }) {
  return (
    <Box
      h="100%"
      borderRadius="8px"
      boxShadow="lg"
      p="4%"
      bg="#FFFFFF"
      _hover={{ transform: "scale(1.05)", transition: "0.2s all" }}
    >
      <Badge borderRadius="8px" p="5px" my="4%" colorScheme="teal">
        # {titulo}
      </Badge>
      <Image src={imageUrl} alt={imageAlt} borderRadius="10px" />
      <Box p="6">
        <Box
          my="4%"
          fontWeight="semibold"
          lineHeight="tight"
          textAlign="center"
        >
          {preFrase}
        </Box>
        <Box color="gray.500" fontSize="xs" textAlign="center">
          {frase}
        </Box>
      </Box>
    </Box>
  );
}

export default CardProject;
