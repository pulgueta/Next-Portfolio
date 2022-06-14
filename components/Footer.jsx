import Image from "next/image";

import { Flex, Text, useColorMode } from "@chakra-ui/react";

import Vercel from "../public/vercel.svg";

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      h={10}
      py={6}
      alignItems="center"
      justify={"center"}
      bg={isDark ? "gray.700" : "gray.200"}
      overflow={"hidden"}
    >
      <Text fontWeight={500} pr={2} color={isDark ? "white" : "gray.700"}>
        &copy; Andrés Rodríguez &#124; Deployed by
      </Text>
      <Image src={Vercel} width={75} />
    </Flex>
  );
};

export default Footer;
