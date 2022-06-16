import Head from "next/head";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Textarea,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const Contact = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Andrés Rodríguez (pulgueta)" />
        <meta name="description" content="Contact me." />
        <meta name="keywords" content="contact, email, email form, form" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English/Spanish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Flex
        minH={"calc(100vh - 128px)"}
        alignItems={"center"}
        justify={"center"}
        overflowX={"hidden"}
      >
        <Flex align="center" justify="center" id="contact">
          <Box borderRadius="xl">
            <Box>
              <VStack p={[10, 0]}>
                <Heading
                  as={motion.h2}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                >
                  Contact me
                </Heading>

                <Stack
                  as={motion.div}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                      delay: 0.5,
                    },
                  }}
                  spacing={{ base: 4, md: 8, lg: 20 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    borderRadius="lg"
                    w={[325, 400]}
                    p={8}
                    shadow="md"
                    bg={isDark ? "gray.700" : "gray.100"}
                  >
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>

                        <InputGroup>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>

                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                        />
                      </FormControl>

                      <Button bg={isDark ? "gray.600" : "gray.300"}>
                        Send Message
                      </Button>
                    </VStack>
                  </Box>
                </Stack>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
