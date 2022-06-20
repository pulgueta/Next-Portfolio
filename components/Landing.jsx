import Image from "next/image";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import Profile from "../public/profile.jpg";

const Landing = () => {
  return (
    <>
      <Box minH="calc(100vh - 80px)">
        <Box py={12}>
          <VStack maxW="600px" h="auto" mx="auto" px={4}>
            <Box
              as={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              mx={'auto'}
              maxW="640px"
            >
              <Image
                src={Profile}
                alt="Andrés Rodríguez"
                maxW={800}
                h={800}
                priority="true"
                className="rounded"
              />
            </Box>
            <VStack
              h="100%"
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
                py={4}
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
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
