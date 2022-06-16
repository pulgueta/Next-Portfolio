import Head from "next/head";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";

import AnnyKactus from "../public/plant.svg";
import Chat from "../public/chatting.svg";
import Recicla from "../public/garbage-recycle.svg";

const Projects = () => {
  const router = useRouter();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const projects = [
    {
      id: 1,
      title: "Anny Kactus",
      description: `Anny Kactus is an online ecommerce store, where you can buy
      decorative plants at a great price.`,
      img: AnnyKactus,
      link: `https://annykactus.com`,
    },
    {
      id: 2,
      title: "Chat with Firebase",
      description: `I made a simple chat application; you can use your Google account to login, however, messages will show anonymously.`,
      img: Chat,
      link: `https://pulgueta-chat.firebaseapp.com/`,
    },
    {
      id: 3,
      title: "Distrito Recicla",
      description: `This is a collaboration with another developer, where I made the Landing of his website.`,
      img: Recicla,
      link: `https://distritorecicla.site/`,
    },
  ];

  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Andrés Rodríguez (pulgueta)" />
        <meta
          name="description"
          content="Projects made by Andrés Rodríguez before."
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English/Spanish" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Box
        maxW={[350, 600, 800]}
        py={8}
        mx={"auto"}
        minH={"calc(100vh - 80px)"}
      >
        <Heading
          as={motion.h2}
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          textAlign={"center"}
          mb={8}
        >
          My projects:
        </Heading>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            alt={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </Box>

      <Flex
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        w={["90%", "95%", "100%"]}
        mx={"auto"}
        pb={16}
      >
        <Flex alignItems={"center"}>
          <Text textAlign={"center"} pr={2}>
            Illustrations provided by
          </Text>
          <Button>
            <a href="https://iconscout.com" target="_blank" rel="noreferrer">
              IconScout
            </a>
          </Button>
        </Flex>

        <Flex
          direction={"column"}
          boxShadow={isDark ? "md" : "base"}
          px={[4, 10]}
          py={6}
          my={10}
          borderRadius={10}
          bg={isDark ? "gray.700" : "gray.100"}
        >
          <Heading mb={8} textAlign={"center"}>
            Would you like to hire me or work with me?
          </Heading>
          <Button
            py={8}
            h={14}
            w={"50%"}
            mx={"auto"}
            bg={isDark ? "gray.600" : "gray.300"}
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact me!
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Projects;
