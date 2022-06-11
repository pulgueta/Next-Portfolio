import Head from "next/head";
import { Image } from "next/image";

import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import Profile from '../public/images/1.jpg'

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
        <meta name="description" content="Own personal portfolio, developed in NextJS, by Andrés Rodríguez" />
        <meta name="keywords" content="portfolio, nextjs, vercel, projects, chakra-ui, chakraui, styled, emotion" />
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
        <Flex>
          <Flex
            h="100%"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>Who am I?</Heading>
            <Text p={8} fontSize="18px" fontWeight="500">
              Cristian Developer, un beso muy grande &#128536;
            </Text>
          </Flex>
          <Image src="../public/images/1.jpg" alt='Andrés Rodríguez'  />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
