import Image from "next/image";

import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import About from "../components/About";

import Profile from "../public/profile.jpg";

const Landing = () => {
  return (
    <>
      <Box h="calc(100vh - 80px)">
        <Box py={12}>
          <Flex direction="column" maxW="640px" h="auto" mx="auto">
            <Box
              as={motion.div}
              initial={{ opacity: 0, x: -35 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                },
              }}
              px={2}
            >
              <Image
                src={Profile}
                alt="Andrés Rodríguez"
                width="1027px"
                height="782px"
                priority="true"
                className="rounded"
                layout="responsive"
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
                mt={4}
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

              <Box
                as={motion.div}
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.65,
                  },
                }}
                mt={5}
              >
                <ArrowDownIcon />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <About />
    </>
  );
};

export default Landing;
