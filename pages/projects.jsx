import Head from "next/head";

import { Box, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";

import AnnyKactus from "../public/annykactus.png";
import Chat from "../public/chatting.svg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Anny Kactus",
      description: `Anny Kactus is an online ecommerce store, where you can buy
      decorative plants at a great place.`,
      img: AnnyKactus,
      link: `https://annykactus.com`,
    },
    {
      id: 2,
      title: "Chat with Firebase",
      description: `I made a simple chat application; you can use your Google account to login but messages will show anonymously.`,
      img: Chat,
      link: `https://pulgueta-chat.firebaseapp.com/`,
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
      </Head>

      <Box maxW={[350, 600, 800]} py={10} mx={"auto"}>
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
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </Box>
    </>
  );
};

export default Projects;