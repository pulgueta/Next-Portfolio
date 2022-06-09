import Head from "next/head";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
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
      <Box width="100%" bg="gray.50" h="80px" boxShadow="lg">
        <Flex
          maxW="1024px"
          px={[8, 12, 14, 16, 0]}
          mx="auto"
          h="inherit"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            color="gray.900"
            userSelect="none"
            fontWeight="700"
            fontSize={{ base: "32px" }}
          >
            Andrés Rodríguez
          </Heading>
        </Flex>
      </Box>
      <Box h="calc(100vh - 80px)" bg="gray.100">
        <Flex h='100%' direction='column' alignItems='center' justifyContent='center'>
          <Heading>
            I&apos;m a Web Developer and Self taught Designer.
          </Heading>
          <Text p={8} fontSize='18px' fontWeight='500'>
            Cristian Developer, un beso muy grande &#128536;
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
