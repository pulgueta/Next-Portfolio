import { Box, Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box width="100%" h="80px" boxShadow={isDark ? "md" : "base"}>
      <Flex
        maxW="1024px"
        px={[8, 12, 14, 16, 0]}
        mx="auto"
        h="inherit"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          as={motion.h1}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.75,
            },
          }}
          userSelect="none"
          fontWeight="700"
          fontSize={{ base: "28px", md: "32px" }}
        >
          Andrés Rodríguez
        </Heading>
        <IconButton
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
        ></IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
