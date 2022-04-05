import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

function NewsCard({
  titleNews,
  imageUrl,
  textButton,
  news,
  textModalNews,
  closeButton,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box ml="20" w="60%">
        <Box>
          <Image src={imageUrl} alt="img" borderRadius="10px" w="90%" />
        </Box>
        <Text fontWeight="bold" w="90%" my="2%">
          {titleNews}
        </Text>

        <Button mt="4%" bg="rgba(0, 159, 227, 0.2)" w="50%" onClick={onOpen}>
          {textButton}
        </Button>

        <Modal size="xl" h="50%" onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent p="4%">
            <ModalHeader>{news}</ModalHeader>
            <ModalBody>{textModalNews}</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>{closeButton}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}

export default NewsCard;
