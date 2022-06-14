import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { motion } from "framer-motion";

const About = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box h="100vh">
      <Flex
        justify="center"
        alignItems="center"
        direction="column"
        px={[4, 4, 4, 2]}
        py={10}
        maxW="5xl"
        mx="auto"
      >
        <Heading
          as={motion.h1}
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
            },
          }}
          mb={6}
        >
          A little bit about me:
        </Heading>
        <Text
          as={motion.p}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.75,
              delay: 0.5,
            },
          }}
          fontWeight={500}
          textAlign="center"
        >
          I began developing websites 2 years ago. Since then, I focused on the
          User Experience and the interactivity they provide. But also I do the
          logic behind larger projects and make them secure, fast and reliable.
        </Text>

        <Box w={600} py={2}>
          <Heading
            as={motion.h2}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.75,
                delay: 0.75,
              },
            }}
            size="lg"
            textAlign={"center"}
            my={8}
          >
            I use...
          </Heading>
          <List
            spacing={3}
            fontWeight={500}
            w={["360px", "400px", "600px"]}
            rounded="lg"
            mx={"auto"}
            bg={isDark ? "gray.700" : "gray.200"}
            p={6}
          >
            <ListItem
              as={motion.li}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.75,
                  delay: 0.75,
                },
              }}
            >
              <ListIcon as={CheckIcon} />
              ReactJS for the Frontend.
            </ListItem>
            <ListItem
              as={motion.li}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.75,
                  delay: 1,
                },
              }}
            >
              <ListIcon as={CheckIcon} />
              NodeJS and Firebase for the Backend.
            </ListItem>
            <ListItem
              as={motion.li}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.75,
                  delay: 1.25,
                },
              }}
            >
              <ListIcon as={CheckIcon} />
              TailwindCSS, Styled-Components and ChakraUI for the styling.
            </ListItem>
            <ListItem
              as={motion.li}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.75,
                  delay: 1.5,
                },
              }}
            >
              <ListIcon as={CheckIcon} />
              Firebase, Vercel and render for the hosting and deployment.
            </ListItem>
          </List>
          <Box w={[400, 500, 600]} mx={"auto"}>
            <Heading
              as={motion.h1}
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.75,
                  delay: 1.75,
                },
              }}
              textAlign={"center"}
              py={10}
            >
              Want to know what I have done?
            </Heading>
            <Flex
              as={motion.div}
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.75,
                  delay: 2,
                },
              }}
              w={["90%", "80%", "60%"]}
              mx={"auto"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Text fontWeight={500} fontSize={"xl"}>
                Checkout my past projects here:
              </Text>
              <IconButton icon={<ArrowForwardIcon />} />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
