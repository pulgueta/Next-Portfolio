import Head from "next/head";
import Image from "next/image";

import { Box, Heading, Flex, Text, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import Profile from "../public/profile.jpg";

const Landing = () => {
  return (
    <Box>
      <Head>
        <title>
          Andrés Rodríguez (pulgueta): Developer & Self taught Designer
        </title>
        <meta charSet="utf-8" />
        <meta name="author" content="Andrés Rodríguez (pulgueta)" />
        <meta
          name="description"
          content="Own personal portfolio, developed in NextJS, by Andrés Rodríguez"
        />
        <meta
          name="keywords"
          content="portfolio, nextjs, vercel, projects, chakra-ui, chakraui, styled, emotion"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box h="calc(100vh - 80px)">
        <Box py={12}>
          <Flex direction="column" maxW="640px" h="auto" mx="auto">
            <Box
              as={motion.div}
              initial={{ opacity: 0, y: -35 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              px={2}
              maxW="max-content"
            >
              <Image
                src={Profile}
                alt="Andrés Rodríguez"
                priority="true"
                className="rounded"
              />
            </Box>
            <Flex
              h="100%"
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Heading
                as={motion.h1}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.25,
                    ease: "easeInOut",
                  },
                }}
                mt={2}
              >
                Who am I?
              </Heading>
              <Text
                as={motion.p}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                  },
                }}
                p={4}
                fontSize="18px"
                fontWeight="500"
                textAlign="center"
              >
                I am a FullStack Developer and Designer. I build awesome looking
                websites and Web Applications with the latest technologies out
                there. Take a look over my portfolio and see what I am capable
                of!
              </Text>
              <IconButton mt={[14, 12, 8]}>
                <ArrowDownIcon />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
