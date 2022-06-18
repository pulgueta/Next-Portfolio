import { useRouter } from "next/router";

import {
  Box,
  Heading,
  Flex,
  IconButton,
  useColorMode,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { motion } from "framer-motion";

import Hover from "./Hover";

const Navbar = () => {
  const router = useRouter();

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
          <Tooltip
            bg={isDark ? "gray.300" : "gray.500"}
            label="Si hablas español, contáctame con el formulario en tu idioma."
            aria-label="A tooltip"
          >
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
              icon={<Hover />}
            ></IconButton>
          </Tooltip>

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