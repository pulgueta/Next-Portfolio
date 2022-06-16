import Image from "next/image";

import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const ProjectCard = ({ title, description, img, link }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } }}
      maxW={700}
      h={250}
      mb={8}
      borderRadius={8}
      bg={isDark ? "gray.600" : "gray.50"}
      mx="auto"
      boxShadow={"md"}
    >
      <Flex alignItems={"center"}>
        <Flex
          borderLeftRadius={8}
          h={250}
          width={[250, 400]}
          bg={isDark ? "gray.400" : "gray.200"}
        >
          <Image objectFit="cover" src={img} alt={title} priority />
        </Flex>
        <Flex direction={"column"} maxW={["70%", "80%"]} px={[4, 6]}>
          <Heading as={"h3"} size={"lg"} mb={[2, 4]}>
            {title}
          </Heading>
          <Text fontWeight={500} fontSize={[14, 18]} maxW={"65ch"}>
            {description}
          </Text>
          <Flex justifyContent={"flex-end"}>
            <Button mt={4} bg={isDark ? "gray.500" : "gray.300"}>
              <a href={link} target="_blank" rel="noreferrer">
                Website
              </a>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
