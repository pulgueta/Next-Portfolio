import Link from "next/link";

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
    <Flex
      justify="center"
      alignItems="center"
      direction="column"
      overflowX={"hidden"}
      px={[4, 4, 4, 2]}
      py={4}
      maxW="5xl"
      h="100%"
      mx="auto"
      my="auto"
      minH="100vh"
    >
      <Heading
        viewport={{
          once: true,
        }}
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
        viewport={{
          once: true,
        }}
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
        Every day I am looking for challenges to improve my skills and knowledge
        to provide a high quality product.
      </Text>

      <Box w={600} py={2}>
        <Heading
          viewport={{
            once: true,
          }}
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
          viewport={{
            once: true,
          }}
          as={motion.ul}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.75,
              delay: 1,
            },
          }}
          spacing={3}
          fontWeight={500}
          w={["360px", "400px", "600px"]}
          rounded="lg"
          mx={"auto"}
          bg={isDark ? "gray.700" : "gray.200"}
          p={6}
        >
          <ListItem
            viewport={{
              once: true,
            }}
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
            viewport={{
              once: true,
            }}
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
            viewport={{
              once: true,
            }}
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
            viewport={{
              once: true,
            }}
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
            Firebase, Vercel and Render for the hosting and deployment.
          </ListItem>
        </List>
        <Box w={[400, 500, 600]} mx={"auto"}>
          <Heading
            viewport={{
              once: true,
            }}
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
            viewport={{
              once: true,
            }}
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
                delay: 1.5,
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
            <Link href={"/projects"}>
              <IconButton icon={<ArrowForwardIcon />} />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
