import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box h="100vh">
      <Flex justify="center" alignItems="center" direction="column" px={4} py={10}>
        <Heading mb={6}>A little bit about me:</Heading>
        <Text fontWeight={500} textAlign='center'>
          I began developing websites 2 years ago. Since then, I
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
