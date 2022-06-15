import { useState } from "react";

import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { motion } from "framer-motion";

import Colombia from "./Colombia";
import USA from "./USA";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      width="100%"
      h="80px"
      position={"sticky"}
      boxShadow={isDark ? "md" : "base"}
    >
      <Flex
        maxW="1024px"
        px={[6, 12, 14, 16, 0]}
        mx="auto"
        h="inherit"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link
          as={motion.a}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          userSelect="none"
          fontWeight="700"
          fontSize={{ base: "26px", md: "32px" }}
          href="/"
        >
          Andrés Rodríguez
        </Link>
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
