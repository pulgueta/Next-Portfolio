import { useRouter } from "next/router";

import { useState } from "react";

import {
  Box,
  Heading,
  Flex,
  Link,
  IconButton,
  useColorMode,
  useDisclosure,
  Fade,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { motion } from "framer-motion";

import Colombia from "./Colombia";
import USA from "./USA";

const Navbar = () => {
  const router = useRouter();

  const [icon, setIcon] = useState(false);

  const { isOpen, onToggle } = useDisclosure(true);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      width="100%"
      h="80px"
      boxShadow={isDark ? "md" : "base"}
      top={0}
      position="sticky"
      zIndex={10}
      bg={isDark ? "gray.800" : "white"}
    >
      <Flex
        maxW="1024px"
        px={[5, 5, 5, 0]}
        mx="auto"
        h="inherit"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading>
          <Button
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            }}
            onClick={() => {
              router.push("/");
            }}
            userSelect="none"
            bg={"transparent"}
            p={0}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            fontWeight="700"
            fontSize={{ base: "26px", md: "32px" }}
            href="/"
          >
            Andrés Rodríguez
          </Button>
        </Heading>
        <Box>
          <IconButton
            mr={4}
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            }}
            onClick={() => setIcon(!icon)}
            icon={icon ? <USA /> : <Colombia />}
          ></IconButton>
          <IconButton
            aria-label="Set color mode"
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            }}
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
