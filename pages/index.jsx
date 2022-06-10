import Head from "next/head";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Head>
        <title>
          Andrés Rodríguez (pulgueta): Developer & Self taught Designer
        </title>
        <meta charSet="utf-8" />
        <meta name="author" content="Andrés Rodríguez (pulgueta)" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box width="100%" h="90px" boxShadow={isDark ? "md" : "base"}>
        <Flex
          maxW="1024px"
          px={[8, 12, 14, 16, 0]}
          mx="auto"
          h="inherit"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            userSelect="none"
            fontWeight="700"
            fontSize={{ base: "28px", md: "32px" }}
          >
            Andrés Rodríguez
          </Heading>
          <IconButton
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
      </Box>

      <Box h="calc(100vh - 90px)">
        <Flex
          h="100%"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading>I&apos;m a Web Developer and Self taught Designer.</Heading>
          <Text p={8} fontSize="18px" fontWeight="500">
            Cristian Developer, un beso muy grande &#128536;
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
