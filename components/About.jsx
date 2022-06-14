import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const About = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box h="100vh" id="about">
      <Flex
        justify="center"
        alignItems="center"
        direction="column"
        px={[4, 4, 4, 2]}
        py={14}
        maxW="5xl"
        mx="auto"
      >
        <Heading mb={6}>A little bit about me:</Heading>
        <Text fontWeight={500} textAlign="center">
          I began developing websites 2 years ago. Since then, I focused on the
          User Experience and the interactivity they provide. But also I do the
          logic behind larger projects and make them secure, fast and reliable.
        </Text>

        <Box w={600} py={2}>
          <Heading as="h2" size="lg" textAlign={"center"} my={8}>
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
            <ListItem>
              <ListIcon as={CheckIcon} />
              ReactJS for the Frontend.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} />
              NodeJS and Firebase for the Backend.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} />
              TailwindCSS, Styled-Components and ChakraUI for the styling.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} />
              Firebase, Vercel and render for the hosting and deployment.
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
