import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import '../public/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
